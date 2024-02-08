import React, { useState, useEffect } from 'react';

const INIT_DATA = [
    { id: 1, name: '南側積算温度①', category: 'temperature', sensor: 'sensor01', startDate: '2023-04-02', days: '43日', targetValue: '1200°C', effectiveValue: '892.0°C', Average: '20.7°C', RemainingValue: '308.0°C', RemainingDays: '16日', ExpectedDate: '2023-05-30' },
    { id: 2, name: '南側積算温度②', category: 'temperature', sensor: 'sensor02', startDate: '2023-04-14', days: '31日', targetValue: '1200°C', effectiveValue: '654.4°C', Average: '21.1°C', RemainingValue: '545.6°C', RemainingDays: '26日', ExpectedDate: '2023-06-09' },
    { id: 3, name: '積算日射量', category: 'solar', sensor: 'radsensor01', startDate: '2023-04-24', days: '21日', targetValue: '1000MJ/m²', effectiveValue: '600MJ/m²', Average: '10MJ/m²', RemainingValue: '400MJ/m²', RemainingDays: '10日', ExpectedDate: '2023-05-25' }
]

function Two(props) {
    const [tableData, setTableData] = useState(INIT_DATA);
    const [currentId, setCurrentId] = useState(undefined)
    const [rows, setRows] = useState(undefined);
    const [selectedSensor, setSelectedSensor] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('temperature');

    const enabled = !currentId; //  only add a new row when there is no currently selected currentId
    const isBtnChanged = !!currentId;

    const handleDeleteRow = (id) => {
        setTableData(prev => prev.filter(item => item.id !== id));
        setCurrentId(undefined)
    };

    const handleBtnSetting = (id) => () => {
        setCurrentId(id)
    };

    const handleBtnClose = () => {
        setTableData(prev => {
            return prev.map(item => {
                if (item.id === currentId) return rows
                else return item
            })
        })
        setCurrentId(undefined)
    };

    const handleAddRow = () => {
        if (enabled) {
            setTableData(prev => {
                const newId = prev[prev.length - 1].id + 1 // id of the last ele of prev arr
                const newRow = createNewRow(newId)
                return [
                    ...prev,
                    newRow,
                ]
            })
        }
    };

    const handleChange = (e, key) => {
        // setRows(prevRow => ({ ...prevRow, [key]: e.target.value, ['days']: '30日', ['effectiveValue']: '750.8°C', ['Average']: '10.8°C', ['RemainingValue']: '430.8°C', ['RemainingDays']: '20日' }));
        setRows(prevRow => ({ ...prevRow, [key]: e.target.value }));
        if (key === 'sensor') setSelectedSensor(e.target.value);
        if (key === 'category') setSelectedCategory(e.target.value);
    };

    const createNewRow = (id) => {
        return { id, name: '', category: 'temperature', sensor: '', startDate: '', days: '', targetValue: '', effectiveValue: '', Average: '', RemainingValue: '', RemainingDays: '', ExpectedDate: '' }
    }

    useEffect(() => {
        if (currentId === undefined) return
        const currentRow = tableData.find(item => item.id === currentId)
        setRows({ ...currentRow })
        setSelectedSensor(currentRow.sensor)
        setSelectedCategory(currentRow.category)
    }, [currentId, tableData, setSelectedSensor, setSelectedCategory])

    return (
        <div className=''>
            <table className="table-fixed border-collapse border border-slate-700 text-xs w-full">
                <thead>
                    <tr>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>設定名</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>センサー名</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>積算開始日</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>積算日数</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>目標積算値</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>有効積算値</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>平均</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>残り</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>予定残り日数</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>積算達成予定日</th>
                        <th className='border border-slate-700 bg-lime-500 p-2 text-center'>設定</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item) => (
                            <tr key={item.id}>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.name}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.sensor}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.startDate}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.days}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.targetValue}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.effectiveValue}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.Average}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.RemainingValue}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.RemainingDays}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-left'>{item.ExpectedDate}</td>
                                <td className='border border-slate-700 p-1 bg-lime-100 text-center'>
                                    {currentId === item.id ?
                                        <button className='p-1 text-xs text-center rounded-md bg-sky-400' type="submit" onClick={handleBtnClose}>Close</button>
                                        :
                                        <button className='p-1 text-xs text-center rounded-md bg-lime-500' onClick={handleBtnSetting(item.id)}>Change</button>
                                    }
                                    <button className='p-1 ml-2 text-xs text-center rounded-md bg-red-500' onClick={() => handleDeleteRow(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {isBtnChanged &&
                <div className='static grid grid-cols-5 grid-rows-3 gap-2 bg-lime-500 mt-2'>
                    <label className='col-start-1 col-span-1 row-start-1 row-span-1 text-md m-2 mr-3'>積算設定名：
                        <input
                            value={rows ? rows.name : undefined}
                            className="border border-green-300 p-1"
                            type="text"
                            onChange={(event) => handleChange(event, 'name')}
                            required
                        />
                    </label>
                    <label className='col-start-2 col-span-1 row-start-1 row-span-1 text-md m-2 ml-8'>開始日：
                        <input
                            value={rows ? rows.startDate : undefined}
                            className="border border-green-300 p-1"
                            type="date"
                            onChange={(event) => handleChange(event, 'startDate')}
                            required
                        />
                    </label>
                    <label className='col-start-3 col-span-1 row-start-1 row-span-1 text-md m-2 ml-8'>終了日：
                        <input
                            className="border border-green-300 p-1"
                            type="date"
                            onChange={(event) => handleChange(event, 'ExpectedDate')}
                        />
                    </label>
                    <div className='col-start-1 col-span-1 row-start-2 row-span-1 text-md m-2 ml-8'>
                        <label className="text-md">センサー</label>
                        <select className="border border-green-300 p-1 pr-14" value={selectedSensor} onChange={(event) => handleChange(event, 'sensor')} required>
                            <option />
                            {selectedCategory === 'temperature' ?
                                <>
                                    <option value="sensor01">sensor01</option>
                                    <option value="sensor02">sensor02</option>
                                    <option value="sensor03">sensor03</option>
                                    <option value="sensor04">sensor04</option>
                                </>
                                :
                                <>
                                    <option value="radsensor01">radsensor01</option>
                                    <option value="radsensor02">radsensor02</option>
                                    <option value="radsensor03">radsensor03</option>
                                    <option value="radsensor04">radsensor04</option>
                                </>
                            }
                        </select>
                    </div>
                    <label className='col-start-2 col-span-1 row-start-2 row-span-1 text-md m-2'>有効値上限：
                        <input
                            className="border border-green-300 p-1"
                            type="text"
                        />
                    </label>
                    <label className='col-start-3 col-span-1 row-start-2 row-span-1 text-md m-2'>有効値下限：
                        <input
                            className="border border-green-300 p-1"
                            type="text"
                        />
                    </label>
                    <label className='col-start-4 col-span-1 row-start-1 row-span-1 text-md m-2'>目標積算値：
                        <input
                            value={rows ? rows.targetValue : undefined}
                            className="border border-green-300 p-1"
                            type="text"
                            onChange={(event) => handleChange(event, 'targetValue')}
                        />
                    </label>
                    <div className='col-start-1 col-span-1 row-start-3 row-span-1 text-md m-2 ml-8'>
                        <label className="text-md">積算対象</label>
                        <select className="border border-green-300 p-1 pr-14" value={selectedCategory} onChange={(event) => handleChange(event, 'category')} required>
                            <option />
                            <option value="temperature">温度</option>
                            <option value="solar">日射量</option>
                        </select>
                    </div>
                </div>
            }

            <button className='m-1 pr-10 pl-10 p-1 text-md text-center text-white rounded-md bg-lime-500' onClick={handleAddRow}>設定を追加する</button>

        </div>
    )
}

export default Two;