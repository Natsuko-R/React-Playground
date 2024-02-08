import React, { useState } from 'react';
import GraphCom from './ViewThreePages/GraphCom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faList, faLocation } from '@fortawesome/free-solid-svg-icons';

const measureData = ["気温", "湿度", "CO₂濃度", "気圧", "照度", "土壌pH", "土壌EC（電気伝導度）", "風速・最大瞬間風速", "雨検知", "炭酸ガス流量", "Air流量", "潅水流量", "pH液流量", "EC液流量", "LED状態", "汎用スイッチ状態", "空調機状態", "窓・カーテン開放度"];
const place = ["エリア１", "エリア２", "エリア３", "エリア４", "エリ５", "エリア６", "エリア７", "エリア８", "エリア９", "エリア１０"];

function GraphView() {

  const [isShow, setIsShow] = useState(true);
  // 
  const [selectedDatas, setSelectedDatas] = useState(["気温", "湿度", "CO₂濃度", "気圧"]);
  const [selectedPlaces, setSelectedPlaces] = useState(["エリア１"]);
  const [showTemperature, setshowTemperature] = useState(true);
  const [showHumidity, setshowHumidity] = useState(true);
  const [showCO2, setshowCO2] = useState(true);
  const [showPressure, setshowPressure] = useState(true);
  const [showLux, setshowLux] = useState(false);
  const [showSoilPH, setshowSoilPH] = useState(false);
  const [showSoilEC, setshowSoilEC] = useState(false);
  const [showWindSpeed, setshowWindSpeed] = useState(false);
  const [showRainDetection, setshowRainDetection] = useState(false);
  const [showCO2FlowRate, setshowCO2FlowRate] = useState(false);
  const [showAirFlowRate, setshowAirFlowRate] = useState(false);
  const [showIrrigationRate, setshowIrrigationRate] = useState(false);
  const [showPHLiquidFlowRate, setshowPHLiquidFlowRate] = useState(false);
  const [showECLiquidFlowRate, setshowECLiquidFlowRate] = useState(false);
  const [showLEDState, setshowLEDState] = useState(false);
  const [showSwitchState, setshowSwitchState] = useState(false);
  const [showAirconState, setshowAirconState] = useState(false);
  const [showWindowState, setshowWindowState] = useState(false);
  const [isShowArea, setIsShowArea] = useState(true);
  // 
  const value = [showTemperature, showHumidity, showCO2, showPressure, showLux,
    showSoilPH, showSoilEC, showWindSpeed, showRainDetection, showCO2FlowRate, showAirFlowRate,
    showIrrigationRate, showPHLiquidFlowRate, showECLiquidFlowRate, showLEDState,
    showSwitchState, showAirconState, showWindowState];

  const handleDataChange = (name, isChecked) => {
    if (isChecked) {
      setSelectedDatas([...selectedDatas, name]);
    } else {
      setSelectedDatas(selectedDatas.filter(item => item !== name));
    }
    switch (name) {
      case "気温":
        setshowTemperature((showTemperature) => !showTemperature);
        break;
      case "湿度":
        setshowHumidity((showHumidity) => !showHumidity);
        break;
      case "CO₂濃度":
        setshowCO2((showCO2) => !showCO2);
        break;
      case "気圧":
        setshowPressure((showPressure) => !showPressure);
        break;
      case "照度":
        setshowLux((showLux) => !showLux);
        break;
      case "土壌pH":
        setshowSoilPH((showSoilPH) => !showSoilPH);
        break;
      case "土壌EC（電気伝導度）":
        setshowSoilEC((showSoilEC) => !showSoilEC);
        break;
      case "風速・最大瞬間風速":
        setshowWindSpeed((showWindSpeed) => !showWindSpeed);
        break;
      case "雨検知":
        setshowRainDetection((showRainDetection) => !showRainDetection);
        break;
      case "炭酸ガス流量":
        setshowCO2FlowRate((showCO2FlowRate) => !showCO2FlowRate);
        break;
      case "Air流量":
        setshowAirFlowRate((showAirFlowRate) => !showAirFlowRate);
        break;
      case "潅水流量":
        setshowIrrigationRate((showIrrigationRate) => !showIrrigationRate);
        break;
      case "pH液流量":
        setshowPHLiquidFlowRate((showPHLiquidFlowRate) => !showPHLiquidFlowRate);
        break;
      case "EC液流量":
        setshowECLiquidFlowRate((showECLiquidFlowRate) => !showECLiquidFlowRate);
        break;
      case "LED状態":
        setshowLEDState((showLEDState) => !showLEDState);
        break;
      case "汎用スイッチ状態":
        setshowSwitchState((showSwitchState) => !showSwitchState);
        break;
      case "空調機状態":
        setshowAirconState((showAirconState) => !showAirconState);
        break;
      case "窓・カーテン開放度":
        setshowWindowState((showWindowState) => !showWindowState);
        break;
      default:
        break;
    }
  };

  const handlePlaceChange = (name, isChecked) => {
    if (isChecked) {
      setSelectedPlaces([...selectedPlaces, name]);
    } else {
      setSelectedPlaces(selectedPlaces.filter(item => item !== name));
    }
    switch (name) {
      case "エリア１":
        setIsShowArea(!isShowArea);
        break;
      case "エリア２":
        break;
      case "エリア３":
        break;
      case "エリア４":
        break;
      case "エリア５":
        break;
      case "エリア６":
        break;
      case "エリア７":
        break;
      case "エリア８":
        break;
      case "エリア９":
        break;
      case "エリア１０":
        break;
      default:
        break;
    }
  };

  return (
    <div className='h-160 w-260'>

      <div>
        <button className="flex justify-start" onClick={() => setIsShow(p => !p)}>
          <FontAwesomeIcon icon={faChevronDown} />表示項目切替設定
        </button>

        {isShow &&
          <div className="bg-slate-400 pl-2 m-0.5">

            <p><FontAwesomeIcon icon={faList} className="pt-1 pr-1 text-orange-600" />計測項目</p>
            <div className="flex flex-wrap justify-start w-fit text-sm mr-2 pl-2">
              {measureData.map(v => (
                <div className='mr-3' key={v}>
                  <label>
                    <input type="checkbox" name={v} checked={selectedDatas.indexOf(v) !== -1} onChange={e => handleDataChange(v, e.target.checked)} />
                    {v}
                  </label>
                </div>
              ))}
            </div>

            <p><FontAwesomeIcon icon={faLocation} className="pt-1 pr-1 text-orange-600" />配置場所</p>
            <div className="flex flex-wrap justify-start w-fit text-sm mr-2 pl-2">
              {place.map(v => (
                <div className='mr-3' key={v}>
                  <label>
                    <input type="checkbox" name={v} checked={selectedPlaces.indexOf(v) !== -1} onChange={e => handlePlaceChange(v, e.target.checked)} />
                    {v}
                  </label>
                </div>
              ))}
            </div>

          </div>
        }

        <div className='pt-5'>
          <GraphCom value={value} area={isShowArea} />
        </div>
      </div>
    </div>
  )
}

export default GraphView;