import React from 'react';
import DeviceInfo from './InfoViews/DeviceInfo';
import Dropdownmenu from './InfoViews/Dropdownmenu';
import HousePosition from './InfoViews/HousePosition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import DigitalDateTime from './InfoViews/DigitalDateTime';
import ImagePopup from './InfoViews/ImagePopup';

function InfoBoard() {

  const currentInfo = {
    mood: "happy",
    action: "smile-1"
  }

  return (
    <div className='flex flex-col p-2'>
      <DigitalDateTime />
      <DeviceInfo />
      <Dropdownmenu info={currentInfo} />
      <HousePosition action={currentInfo.action} />
      <div className=' bg-orange-100 border-2 text-xs'>
        <FontAwesomeIcon icon={faInfoCircle} />
        <span>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</span>
      </div>
      <ImagePopup />
    </div>
  );
}

export default InfoBoard;
