import React, { useState } from 'react';
import { Temperature, Humidity, Co2, Pressure, LUX } from "./Sensor_Info";
import LineChart from './LineChart_Sensor';

function DevCom_Sensor() {

    const [sensorVisibility, setSensorVisibility] = useState({
        showTemperature: false,
        showHumidity: false,
        showCO2: false,
        showPressure: false,
        showLux: false,
    });

    const toggleSensorVisibility = (sensor) => {
        setSensorVisibility(prev => ({
            ...prev,
            [sensor]: !prev[sensor],
        }));
    };

    return (
        <div className='col-span-3 grid grid-cols-6 gap-1 border-solid border-2 border-teal-300'>
            <div className='col-span-6 grid grid-cols-5 gap-1'>
                <div className='col-span-5 text-center'>
                    <p>トマト農場　CO₂・温湿度センサ　1</p>
                </div>
                {Object.keys(sensorVisibility).map(sensor => (
                    <div key={sensor} className={`flex justify-center`}>
                        <div className="cursor-pointer" onClick={() => toggleSensorVisibility(sensor)}>
                            {sensor === 'showTemperature' && <Temperature />}
                            {sensor === 'showHumidity' && <Humidity />}
                            {sensor === 'showCO2' && <Co2 />}
                            {sensor === 'showPressure' && <Pressure />}
                            {sensor === 'showLux' && <LUX />}
                        </div>
                    </div>
                ))}
            </div>

            <div className='col-start-1 col-span-6 h-96'>
                <LineChart value={Object.values(sensorVisibility)} />
            </div>
        </div>
    )
}

export default DevCom_Sensor