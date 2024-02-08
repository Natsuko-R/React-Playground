import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Banner_1 from './assets/banner-1.png';
import Banner_2 from './assets/banner-2.png';

function ImagePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <>
      <img src={showPopup ? Banner_1 : Banner_2} alt="image" onClick={() => setShowPopup(p => !p)} />
      <button className="bg-orange-100 font-bold rounded w-16 p-1 mt-2" onClick={handleClick}>詳細</button>
    </>
  );
};

export default ImagePopup;


