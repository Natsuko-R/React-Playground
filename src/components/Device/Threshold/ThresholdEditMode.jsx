import React, { useState } from 'react';
//import './../../../css/ThresholdTable.css';
import { Input } from '@mui/material';

function ThresholdEditMode() {
    const [temperatureMin, setTemperatureMin] = useState();
    const [temperatureMax, setTemperatureMax] = useState();
    const [humidityMin, setHumidityMin] = useState();
    const [humidityMax, setHumidityMax] = useState();
    const [CO2Min, setCO2Min] = useState();
    const [CO2Max, setCO2Max] = useState();
    const [LUXMin, setLUXMin] = useState();
    const [LUXMax, setLUXMax] = useState();
    const [pressureMin, setPressureMin] = useState();
    const [pressureMax, setPressureMax] = useState();
    const [soilTemperatureMin, setSoilTemperatureMin] = useState();
    const [soilTemperatureMax, setSoilTemperatureMax] = useState();
    const [soilHumidityMin, setSoilHumidityMin] = useState();
    const [soilHumidityMax, setSoilHumidityMax] = useState();
    const [soilAcidityMin, setSoilAcidityMin] = useState();
    const [soilAcidityMax, setSoilAcidityMax] = useState();
    const [soilConductivityMin, setSoilConductivityMin] = useState();
    const [soilConductivityMax, setSoilConductivityMax] = useState();
    const space5 = '　　　　　';
    const space2 = '　　';

    return (
        <div>
            <div>
                <label className="pr-5 mb-2">{space5}大気温度：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={temperatureMin}
                        onChange={(event) => setTemperatureMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={temperatureMax}
                        onChange={(event) => setTemperatureMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">{space5}大気湿度：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={humidityMin}
                        onChange={(event) => setHumidityMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={humidityMax}
                        onChange={(event) => setHumidityMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">{space5}CO2濃度：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={CO2Min}
                        onChange={(event) => setCO2Min(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={CO2Max}
                        onChange={(event) => setCO2Max(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">{space5}{space2}照度：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={LUXMin}
                        onChange={(event) => setLUXMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={LUXMax}
                        onChange={(event) => setLUXMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">{space5}{space2}気圧：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={pressureMin}
                        onChange={(event) => setPressureMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={pressureMax}
                        onChange={(event) => setPressureMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">{space5}土壌温度：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={soilTemperatureMin}
                        onChange={(event) => setSoilTemperatureMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={soilTemperatureMax}
                        onChange={(event) => setSoilTemperatureMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">{space5}土壌湿度：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={soilHumidityMin}
                        onChange={(event) => setSoilHumidityMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={soilHumidityMax}
                        onChange={(event) => setSoilHumidityMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">{space2}{space2}土壌酸性度：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={soilAcidityMin}
                        onChange={(event) => setSoilAcidityMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={soilAcidityMax}
                        onChange={(event) => setSoilAcidityMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
            <div>
                <label className="pr-5 mb-2">土壌電気伝照度導率：
                    <Input
                        className="border border-slate-300 p-1 mb-2"
                        type="number"
                        value={soilConductivityMin}
                        onChange={(event) => setSoilConductivityMin(event.target.value)}
                        placeholder='下限' />
                    <Input
                        className="border border-slate-300 p-1 ml-2 mb-2"
                        type="number"
                        value={soilConductivityMax}
                        onChange={(event) => setSoilConductivityMax(event.target.value)}
                        placeholder='上限' />
                </label>
            </div>
        </div>
    )
}

export default ThresholdEditMode;