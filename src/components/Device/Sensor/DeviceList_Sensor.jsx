import React, { useState } from 'react'
import Select from 'react-select'
import DevCom_Sensor from './DevCom_Sensor';
import DatePicker from "react-datepicker"

const OPTIONS = [
  { value: 'tomato1', label: 'トマト農園' },
  { value: 'ichigo2', label: 'イチゴ農園' },
  { value: 'ichigo3', label: '制御盤３' },
  { value: 'ichigo4', label: '制御盤４' },
];

function DeviceList_Sensor() {

  const [startDate, setStartDate] = useState(new Date());
  const [range, setRange] = useState('過去24時間');

  const handleChange = (e) => setRange(e.target.value);

  return (
    <>

      <div className='flex justify-between'>

        <div className='flex justify-between gap-2'>
          <p>制御盤：</p>
          <Select options={OPTIONS} defaultValue={{ value: 'tomato1', label: 'トマト農園' }} />
        </div>

        <div className='flex justify-between gap-2'>
          <p>グラフデータ範囲：</p>
          <div>
            <input
              type="radio"
              value="過去24時間"
              onChange={handleChange}
              checked={range === '過去24時間'}
            />
            <label> 過去24時間</label>
          </div>
          <div>
            <input
              type="radio"
              value="指定期間"
              onChange={handleChange}
              checked={range === '指定期間'}
            />
            <label> 指定期間</label>
          </div>
        </div>

        <DatePicker className='border-solid border-2 border-gray-500'
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
      </div>

      <DevCom_Sensor />

    </>
  )
}

export default DeviceList_Sensor