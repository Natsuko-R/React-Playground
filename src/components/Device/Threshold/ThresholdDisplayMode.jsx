import React from 'react';
//import './../../../css/ThresholdTable.css';

function ThresholdDisplayMode() {

    return (
        <table className="table-fixed border-separate border border-slate-300">
            <thead>
                <tr>
                    <th className='border border-slate-200 bg-blue-300 p-3'>設定項目</th>
                    <th className='border border-slate-200 bg-blue-300 p-3'>下限</th>
                    <th className='border border-slate-200 bg-blue-300 p-3'>上限</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-200 p-2'>大気温度</td>
                    <td className='border border-slate-200 p-2'>20</td>
                    <td className='border border-slate-200 p-2'>40</td>
                </tr>
                <tr>
                    <td className='border border-slate-200 p-2'>大気湿度</td>
                    <td className='border border-slate-200 p-2'>23</td>
                    <td className='border border-slate-200 p-2'>45</td>
                </tr>
                <tr>
                    <td className='border border-slate-200 p-2'>CO2濃度</td>
                    <td className='border border-slate-200 p-2'>262</td>
                    <td className='border border-slate-200 p-2'>16.0</td>
                </tr>
                <tr>
                    <td className='border border-slate-200 p-2'>照度</td>
                    <td className='border border-slate-200 p-2'>262</td>
                    <td className='border border-slate-300 p-2'>16.0</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 p-2'>気圧</td>
                    <td className='border border-slate-300 p-2'>262</td>
                    <td className='border border-slate-200 p-2'>16.0</td>
                </tr>
                <tr>
                    <td className='border border-slate-200 p-2'>土壌温度</td>
                    <td className='border border-slate-200 p-2'>262</td>
                    <td className='border border-slate-200 p-2'>16.0</td>
                </tr>
                <tr>
                    <td className='border border-slate-200 p-2'>土壌湿度</td>
                    <td className='border border-slate-200 p-2'>262</td>
                    <td className='border border-slate-200 p-2'>16.0</td>
                </tr>
                <tr>
                    <td className='border border-slate-200 p-2'>土壌酸性度</td>
                    <td className='border border-slate-200 p-2'>262</td>
                    <td className='border border-slate-200 p-2'>16.0</td>
                </tr>
                <tr>
                    <td className='border border-slate-200 p-2'>土壌電気伝照度導率</td>
                    <td className='border border-slate-200 p-2'>262</td>
                    <td className='border border-slate-200 p-2'>16.0</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ThresholdDisplayMode;