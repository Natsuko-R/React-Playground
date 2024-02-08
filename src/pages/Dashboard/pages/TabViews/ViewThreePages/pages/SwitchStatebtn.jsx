import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faSolarPanel, faSmog, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function SwitchStatebtn(props) {
  const clickSwitchState = props.clickSwitchState;
  const [clicked, setClicked] = useState(false);
  const handleclick = ()=>{
    setClicked(!clicked);
    props.setclickSwitchState( clickSwitchState => !clickSwitchState );
  }
  const buttonClass = clicked
    ? 'grid grid-cols-7 gap-1 border-2 border-black rounded-md w-55 bg-zinc-500 text-white'
    : 'grid grid-cols-7 gap-1 border-2 border-black rounded-md w-55 bg-rose-100 hover:bg-zinc-500 hover:text-white';

  return (
    <div>
        <button className={buttonClass} onClick={handleclick}>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>H01R025:汎用１</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            作動
          </div>
          <span className='col-start-1 col-span-2 w-12 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-500'>リレー</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
    </div>
  )
}
