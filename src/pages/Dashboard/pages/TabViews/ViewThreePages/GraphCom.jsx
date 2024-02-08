import { React, useState } from 'react';
// import BarChart from './pages/BarChart';
// import { UserData as DATA } from './pages/data';
import LineChart from './pages/LineChart';
import Graph_DeviceInfo from './pages/Graph_DeviceInfo';
import TemperatureBtn from './pages/TemperatureBtn';
import Humiditybtn from './pages/Humiditybtn';
import CO2btn from './pages/CO2btn';
import Pressurebtn from './pages/Pressurebtn';
import Luxbtn from './pages/Luxbtn';
import SoilPHbtn from './pages/SoilPHbtn';
import SoilECbtn from './pages/SoilECbtn';
import WindSpeedbtn from './pages/WindSpeedbtn';
import RainDetectionbtn from './pages/RainDetectionbtn';
import CO2FlowRatebtn from './pages/CO2FlowRatebtn';
import AirFlowRatebtn from './pages/AirFlowRatebtn';
import IrrigationRatebtn from './pages/IrrigationRatebtn';
import PHLiquidFlowRatebtn from './pages/PHLiquidFlowRatebtn';
import ECLiquidFlowRatebtn from './pages/ECLiquidFlowRatebtn';
import LEDStatebtn from './pages/LEDStatebtn';
import SwitchStatebtn from './pages/SwitchStatebtn';
import AirconStatebtn from './pages/AirconStatebtn';
import WindowStatebtn from './pages/WindowStatebtn';

function GraphCom(props) {
    const [
        showTemperature,
        showHumidity,
        showCO2,
        showPressure,
        showLux,
        showSoilPH,
        showSoilEC,
        showWindSpeed,
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
    const isShowArea = props.area;

    const [clickTemperature, setclickTemperature] = useState(false);
    const [clickHumidity, setclickHumidity] = useState(false);
    const [clickCO2, setclickCO2] = useState(false);
    const [clickPressure, setclickPressure] = useState(false);
    const [clickLux, setclickLux] = useState(false);
    const [clickSoilPH, setclickSoilPH] = useState(false);
    const [clickSoilEC, setclickSoilEC] = useState(false);
    const [clickWindSpeed, setclickWindSpeed] = useState(false);
    const [clickRainDetection, setclickRainDetection] = useState(false);
    const [clickCO2FlowRate, setclickCO2FlowRate] = useState(false);
    const [clickAirFlowRate, setclickAirFlowRate] = useState(false);
    const [clickIrrigationRate, setclickIrrigationRate] = useState(false);
    const [clickPHLiquidFlowRate, setclickPHLiquidFlowRate] = useState(false);
    const [clickECLiquidFlowRate, setclickECLiquidFlowRate] = useState(false);
    const [clickLEDState, setclickLEDState] = useState(false);
    const [clickSwitchState, setclickSwitchState] = useState(false);
    const [clickAirconState, setclickAirconState] = useState(false);
    const [clickWindowState, setclickWindowState] = useState(false);
    const Buttonvalue = [clickTemperature, clickHumidity, clickCO2, clickPressure, clickLux,
        clickSoilPH, clickSoilEC, clickWindSpeed, clickRainDetection, clickCO2FlowRate, clickAirFlowRate,
        clickIrrigationRate, clickPHLiquidFlowRate, clickECLiquidFlowRate, clickLEDState,
        clickSwitchState, clickAirconState, clickWindowState];

    // const [userData, setUserData] = useState({
    //     labels: DATA.map(v => v.year),
    //     datasets: [{
    //         label: "Users Gained",
    //         data: DATA.map(v => v.userGain)
    //     }]
    // });

    return (
        <div className='grid grid-cols-9 gap-2 static'>

            {/* <BarChart chartData={userData} /> */}

            <div className='col-start-1 col-span-6 '>
                <LineChart value={Buttonvalue} />
            </div>

            <div className='col-start-7 col-span-3 max-h-80 overflow-y-auto'>
                <div className='flex flex-wrap gap-1'>
                    {isShowArea &&
                        <>
                            {showTemperature &&
                                <TemperatureBtn clickTemperature={clickTemperature} setclickTemperature={setclickTemperature} />
                            }
                            {showHumidity &&
                                <Humiditybtn clickHumidity={clickHumidity} setclickHumidity={setclickHumidity} />
                            }
                            {showCO2 &&
                                <CO2btn clickCO2={clickCO2} setclickCO2={setclickCO2} />
                            }
                            {showPressure &&
                                <Pressurebtn clickPressure={clickPressure} setclickPressure={setclickPressure} />
                            }
                            {showLux &&
                                <Luxbtn clickLux={clickLux} setclickLux={setclickLux} />
                            }
                            {showSoilPH &&
                                <SoilPHbtn clickSoilPH={clickSoilPH} setclickSoilPH={setclickSoilPH} />
                            }
                            {showSoilEC &&
                                <SoilECbtn clickSoilEC={clickSoilEC} setclickSoilEC={setclickSoilEC} />
                            }
                            {showWindSpeed &&
                                <WindSpeedbtn clickWindSpeed={clickWindSpeed} setclickWindSpeed={setclickWindSpeed} />
                            }
                            {showRainDetection &&
                                <RainDetectionbtn clickRainDetection={clickRainDetection} setclickRainDetection={setclickRainDetection} />
                            }
                            {showCO2FlowRate &&
                                <CO2FlowRatebtn clickCO2FlowRate={clickCO2FlowRate} setclickCO2FlowRate={setclickCO2FlowRate} />
                            }
                            {showAirFlowRate &&
                                <AirFlowRatebtn clickAirFlowRate={clickAirFlowRate} setclickAirFlowRate={setclickAirFlowRate} />
                            }
                            {showIrrigationRate &&
                                <IrrigationRatebtn clickIrrigationRate={clickIrrigationRate} setclickIrrigationRate={setclickIrrigationRate} />
                            }
                            {showPHLiquidFlowRate &&
                                <PHLiquidFlowRatebtn clickPHLiquidFlowRate={clickPHLiquidFlowRate} setclickPHLiquidFlowRate={setclickPHLiquidFlowRate} />
                            }
                            {showECLiquidFlowRate &&
                                <ECLiquidFlowRatebtn clickECLiquidFlowRate={clickECLiquidFlowRate} setclickECLiquidFlowRate={setclickECLiquidFlowRate} />
                            }
                            {showLEDState &&
                                <LEDStatebtn clickLEDState={clickLEDState} setclickLEDState={setclickLEDState} />
                            }
                            {showSwitchState &&
                                <SwitchStatebtn clickSwitchState={clickSwitchState} setclickSwitchState={setclickSwitchState} />
                            }
                            {showAirconState &&
                                <AirconStatebtn clickAirconState={clickAirconState} setclickAirconState={setclickAirconState} />
                            }
                            {showWindowState &&
                                <WindowStatebtn clickWindowState={clickWindowState} setclickWindowState={setclickWindowState} />
                            }
                        </>
                    }
                </div>
            </div>

        </div>
    );
}

export default GraphCom;
