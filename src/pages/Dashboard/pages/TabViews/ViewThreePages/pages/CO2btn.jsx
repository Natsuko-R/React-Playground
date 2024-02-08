import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faCloud, faSmog, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function CO2btn(props) {
  const clickCO2 = props.clickCO2;
  const [clicked, setClicked] = useState(false);
  const handleclick = ()=>{
    setClicked(!clicked);
    props.setclickCO2( clickCO2 => !clickCO2 );
  }
  const buttonClass = clicked
  ? 'grid grid-cols-7 gap-1 border-2 border-black rounded-md w-55 bg-zinc-500 text-white'
  : 'grid grid-cols-7 gap-1 border-2 border-black rounded-md w-55 bg-rose-100 hover:bg-zinc-500 hover:text-white';

return (
  <div>
      <button className={buttonClass} onClick={handleclick}>
        <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-2 col-span-5 text-xl font-bold'>
            <FontAwesomeIcon icon={faSmog} className='text-green-300' />{996.1}ppm
          </div>
          <span className='col-start-1 col-span-2 w-12 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-green-600'>CO₂</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
    </div>
  )
}
