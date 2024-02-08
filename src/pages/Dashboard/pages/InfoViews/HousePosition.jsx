import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const buttonList = [
  { label: 'smile-1', value: 'button1', path: '/home/link1/sublink1' },
  { label: 'smile-2', value: 'button2', path: '/home/link1/sublink2' },
  { label: 'smile-3', value: 'button3', path: '/home/link1/sublink3' },
];

function HousePosition({ action }) {

  const button = buttonList.find(b => b.label === action);
  const [selectedBtn, setSelectedBtn] = useState(button);
  const navigate = useNavigate();

  const handleClickHouse = (button) => {
    setSelectedBtn(button);
    // navigate(button.path, { replace: true });
  };

  return (
    <div className='flex justify-evenly'>
      {buttonList.map(btn => (
        <button
          key={btn.label}
          onClick={() => handleClickHouse(btn)}
          className={selectedBtn.value === btn.value ? 'border-2 border-amber-300 border-solid bg-red-300 py-7 px-1 text-xs m-2' :
            'border-2 border-amber-300 border-solid py-7 px-1 text-xs m-2 hover:bg-red-300 hover:text-white text-black'}
        >
          <FontAwesomeIcon icon={faHome} />
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default HousePosition;