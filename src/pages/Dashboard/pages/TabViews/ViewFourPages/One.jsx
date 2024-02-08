import React from 'react';
import { RealValue, MachineOp, WindowCurtainRate, HouseState_Sensor, HosuseState_Block, Weather, AverageTemp } from './OnePages/DetailsTables';

function One(props) {

    return (
        <div className='row-start-2 row-span-4 static grid grid-cols-3 gap-3 text-xs'>
            <RealValue />
            <MachineOp />
            <HouseState_Sensor />
            <WindowCurtainRate />
            <HosuseState_Block />
            <Weather />
            <AverageTemp />
        </div>
    )
}

export default One;