import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faSolarPanel, faSmog, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function DeviceInfo() {

  return (
    <div className='flex justify-between gap-1 bg-slate-400 px-4 py-2'>
      <div>
        <FontAwesomeIcon icon={faSmog} className='text-green-300' />晴時々曇
        <div>天気</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faThermometerHalf} className='text-red-500' />{12.0}&deg;C
        <div>気温</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
        <div>湿度</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faSolarPanel} className='text-indigo-500' />{2.9}％
        <div>降水確率</div>
      </div>
    </div>
  )
}
