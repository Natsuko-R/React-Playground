import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faSolarPanel, faSmog, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function Graph_DeviceInfo(props) {
  const [
    showTemperature,
    showHumidity,
    showCO2,
    showPressure,
    showLux,
    showSoilPH,
    showSoilEC,
    showWinSpeed,
    showRainDetection,
    showCO2FlowRate,
    showAirFlowRate,
    showIrrigationRate,
    showPHLiquidFlowRate,
    showECLiquidFlowRate,
    showLEDState,
    showSwitchState,
    showAirconState,
    showWindowState,
  ] = props.value;

  return (
    <div className='flex flex-wrap justify-start w-full'>
      {showTemperature &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-3 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faThermometerHalf} className='text-red-500' />{22.0}&deg;C
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-red-600'>気温</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showHumidity &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-600'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showCO2 &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}ppm
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-green-600'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showPressure &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}hpa
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-purple-600'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showLux &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faLightbulb} className='text-yellow-300' />{52.19}klx
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-orange-600'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showSoilPH &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-cyan-300'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showSoilEC &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-teal-300'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showWinSpeed &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-orange-800'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showRainDetection &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-cyan-400'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showCO2FlowRate &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-yellow-700'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showAirFlowRate &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-purple-700'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showIrrigationRate &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-orange-300'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showPHLiquidFlowRate &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-700'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showECLiquidFlowRate &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-pink-400'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showLEDState &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white  w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-lime-400'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showSwitchState &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white  w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-500'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showAirconState &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white  w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-800'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
      {showWindowState &&
        <button className='grid grid-cols-7 gap-1 border-2 border-black rounded-md bg-rose-100 hover:bg-zinc-500 hover:text-white  w-1/2'>
          <div className='col-start-1 col-span-7 p-2 text-xs text-left'>A01S001:CO2・温湿度計</div>
          <div className='col-start-3 col-span-4 text-xl text-center font-bold'>
            <FontAwesomeIcon icon={faTint} className='text-blue-300' />{52.19}%
          </div>
          <span className='col-start-1 col-span-2 w-10 p-1 ml-2 mb-2 text-xs text-center font-bold text-white rounded-md bg-purple-300'>湿度</span>
          <span className='col-start-3 col-span-3 w-20 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-blue-400'>エリア１</span>
          <span className='col-start-6 col-span-2 w-10 p-1 mb-2 text-xs text-center font-bold text-white rounded-md bg-emerald-400'>正常</span>
        </button>
      }
    </div>
  )
}
