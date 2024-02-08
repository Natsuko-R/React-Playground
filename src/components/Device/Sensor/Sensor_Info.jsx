import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faTachometerAlt, faSmog, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export function Temperature() {

  return (
    <div className='temperature-info'>
      <div className='temperature-text'>
        <FontAwesomeIcon icon={faThermometerHalf} className='temperature-icon' />温度
      </div>
      <div className='temperature-avg-value'>{22.0}&deg;C</div>
      <div className='temperature-min-value'>Min:{12.0}&deg;C</div>
      <div className='temperature-max-value'>Max:{35.0}&deg;C</div>
    </div>
  );
}

export function Humidity() {

  return (
    <button className='humidity-info'>
      <div className='humidity-text'>
        <FontAwesomeIcon icon={faTint} className='humidity-icon' />湿度
      </div>
      <div className='humidity-avg-value'>{52.19}%</div>
      <div className='humidity-min-value'>Min:{52.19}%</div>
      <div className='humidity-max-value'>Max:{52.19}%</div>
    </button>
  );
}

export function Co2() {

  return (
    <button className='Co2-info'>
      <div className='Co2-text'>
        <FontAwesomeIcon icon={faSmog} className='Co2-icon' />CO₂濃度
      </div>
      <div className='Co2-avg-value'>{443.0}ppm</div>
      <div className='Co2-min-value'>Min:{443.0}ppm</div>
      <div className='Co2-max-value'>Max:{443.0}ppm</div>
    </button>
  );
}

export function Pressure() {

  return (
    <button className='pressure-info'>
      <div className='pressure-text'>
        <FontAwesomeIcon icon={faTachometerAlt} className='pressure-icon' />気圧
      </div>
      <div className='pressure-avg-value'>{1024.66}hpa</div>
      <div className='pressure-min-value'>Min:{1024.66}hpa</div>
      <div className='pressure-max-value'>Max:{1024.66}hpa</div>
    </button>
  );
}

export function LUX() {

  return (
    <button className='lux-info'>
      <div className='lux-text'>
        <FontAwesomeIcon icon={faLightbulb} className='lux-icon' />照度
      </div>
      <div className='lux-avg-value'>{443.0}klx</div>
      <div className='lux-min-value'>Min:{443.0}klx</div>
      <div className='lux-max-value'>Max:{443.0}klx</div>
    </button>
  );
}
