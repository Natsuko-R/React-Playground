import React, { useState } from 'react';
import "../css/BasicPlanSettingEdit.css";
import { Input } from '@mui/material';
import { CO2data, Airdata, PHdata, ECdata, LED1data, LED2data, LED3data, LED4data, Windowdata, Curtaindata, CFANdata, PFANdata, Injectordata, Generaldata, Aircondata, Irrigationdata } from './DataComponent';
import { CO2, Air, PH, EC, CO2sensor, PHsensor, ECsensor, CO2unit, ECunit, LED1, LED2, LED3, LED4, LEDsensor, LEDunit } from './GlobalVariables';
import { Curtain, Window, CurtainKey, WindowKey, Temperaturesensor, Humiditysensor, Temperatureunit, Humidityunit } from './GlobalVariables';
import { CFAN, PFAN, Injector, General, Aircon, Irrigation } from './GlobalVariables';

function BasicPlanSettingEdit(props) {
    const planName = props.data[0];
    const Name = props.data[1];

    let data;
    //センサーデータ取得
    switch (Name) {
        case CO2:
            data = CO2data;
            break;
        case Air:
            data = Airdata;
            break;
        case PH:
            data = PHdata;
            break;
        case EC:
            data = ECdata;
            break;
        case LED1:
            data = LED1data;
            break;
        case LED2:
            data = LED2data;
            break;
        case LED3:
            data = LED3data;
            break;
        case LED4:
            data = LED4data;
            break;
        case Window:
            data = Windowdata;
            break;
        case Curtain:
            data = Curtaindata;
            break;
        case CFAN:
            data = CFANdata;
            break;
        case PFAN:
            data = PFANdata;
            break;
        case Injector:
            data = Injectordata;
            break;
        case General:
            data = Generaldata;
            break;
        case Aircon:
            data = Aircondata;
            break;
        case Irrigation:
            data = Irrigationdata;
            break;
        default:
            data = null;
            break;
    }

    const planNames = {
        "プラン１": 0,
        "プラン２": 1,
        "プラン３": 2,
        "プラン４": 3,
        "プラン５": 4,
        "プラン６": 5,
        "プラン７": 6,
        "プラン８": 7,
        "プラン９": 8,
        "プラン１０": 9,
        "プラン１１": 10,
        "プラン１２": 11,
        "プラン１３": 12,
        "プラン１４": 13,
        "プラン１５": 14,
        "プラン１６": 15,
        "プラン１７": 16,
        "プラン１８": 17
    };
    //プラン取得  
    const plan = planNames[planName];


    //センサー名取得
    const sensor = Name === CO2 ? CO2sensor
        : Name === PH ? PHsensor
            : Name === EC ? ECsensor
                : Name === LED1 || LED2 || LED3 || LED4 ? LEDsensor
                    : null;

    //ユニット名取得
    const unit = Name === CO2 ? CO2unit
        : Name === EC ? ECunit
            : Name === LED1 || LED2 || LED3 || LED4 ? LEDunit
                : null;

    //キーワード取得
    const keyword = Name === Curtain ? CurtainKey : WindowKey;

    //開始時刻
    const [selectedStartOption, setselectedStartOption] = useState(
        data[plan].startoption === "2" ? "option2"
            : data[plan].startoption === "3" ? "option3"
                : "option1");
    const [starttimeOpt1, setStartTimeOpt1] = useState(data[plan].starttimeOpt1);
    const [starttimeOpt2, setStartTimeOpt2] = useState(data[plan].starttimeOpt2);

    //終了時刻
    const [selectedEndOption, setselectedEndOption] = useState(
        data[plan].endoption === "2" ? "option2"
            : data[plan].endoption === "3" ? "option3"
                : "option1");
    const [endtimeOpt1, setEndTimeOpt1] = useState(data[plan].endtimeOpt1);
    const [endtimeOpt2, setEndTimeOpt2] = useState(data[plan].endtimeOpt2);

    //停止条件
    const [stopValue, setStopValue] = useState(data[plan].stop);

    //再開条件
    const [restartValue, setRestartValue] = useState(data[plan].restart);

    //施用時の動作
    const [action1Value, setAction1Value] = useState(data[plan].action1);
    const [action2Value, setAction2Value] = useState(data[plan].action2);

    //温度条件
    const [selectedTempState, setselectedTempState] = useState(
        data[plan].tempstate === "2" ? "option2"
            : "option1");
    const [OpenStatTemp, setOpenStatTemp] = useState(data[plan].openstattemp);
    const [CloseStatTemp, setCloseStatTemp] = useState(data[plan].closestattemp);

    //湿度条件
    const [selectedHumiState, setselectedHumiState] = useState(
        data[plan].humistate === "2" ? "option2"
            : "option1");
    const [OpenStatHumi, setOpenStatHumi] = useState(data[plan].openstathumi);
    const [CloseStatHumi, setCloseStatHumi] = useState(data[plan].closestathumi);

    //照度条件
    const [selectedLEDState, setselectedLEDState] = useState(
        data[plan].LEDstate === "2" ? "option2"
            : "option1");
    const [OpenStatLED, setOpenStatLED] = useState(data[plan].openstatLED);
    const [CloseStatLED, setCloseStatLED] = useState(data[plan].closestatLED);

    //開閉時の動作
    const [OpenStatAction, setOpenStatAction] = useState(data[plan].openstataction);
    const [CloseStatAction, setCloseStatAction] = useState(data[plan].closestataction);
    const [ActionTime, setActionTime] = useState(data[plan].actiontime);

    //センサー故障時の動作
    const [selectedFailureAction, setselectedFailureAction] = useState(
        data[plan].failureaction === "2" ? "option2"
            : data[plan].failureaction === "3" ? "option3"
                : "option1");

    //運転条件（温度）
    const [StartDriveTempState, setStartDriveTempState] = useState(data[plan].startdrivetempstate);

    //停止条件（温度）
    const [EndDriveTempState, setEndDriveTempState] = useState(data[plan].enddrivetempstate);

    //運転条件（湿度）
    const [StartDriveHumiState, setStartDriveHumiState] = useState(data[plan].startdrivehumistate);

    //停止条件（湿度）
    const [EndDriveHumiState, setEndDriveHumiState] = useState(data[plan].enddrivehumistate);

    //冷房運転条件
    const [CoolerStartState, setCoolerStartState] = useState(data[plan].coolerstartstate);
    const [CoolerEndState, setCoolerEndState] = useState(data[plan].coolerendstate);

    //暖房運転条件
    const [HeaterStartState, setHeaterStartState] = useState(data[plan].heaterstartstate);
    const [HeaterEndState, setHeaterEndState] = useState(data[plan].heaterendstate);

    //除湿運転モード
    const [selectedDehumiMode, setselectedDehumiMode] = useState(
        data[plan].dehumimode === "2" ? "option2"
            : data[plan].dehumimode === "3" ? "option3"
                : data[plan].dehumimode === "4" ? "option4"
                    : data[plan].dehumimode === "5" ? "option5"
                        : "option1");

    //除湿運転条件
    const [DehumiStartState, setDehumiStartState] = useState(data[plan].dehumistartstate);
    const [DehumiEndState, setDehumiEndState] = useState(data[plan].dehumiendstate);

    //除湿冷暖切替
    const [SwitchStartState, setSwitchStartState] = useState(data[plan].switchstartstate);
    const [SwitchEndState, setSwitchEndState] = useState(data[plan].switchendstate);

    //センサー故障時の動作
    const [FailureAction, setFailureAction] = useState(
        data[plan].failureaction === "2" ? "option2"
            : data[plan].failureaction === "3" ? "option3"
                : "option1");

    //潅水システム用
    const [Line, setLine] = useState(
        data[plan].line === "2" ? "option2"
            : data[plan].line === "3" ? "option3"
                : "option1");

    return (
        <div className='SettingEdit'>
            <div>
                <label>
                    更新日時：
                </label>
            </div>
            <div>
                <label>
                    開始時刻：
                    <input type="radio" value="option1" checked={selectedStartOption === 'option1'} onChange={(event) => setselectedStartOption(event.target.value)} />
                    指定時刻
                    <input type="time" value={starttimeOpt1} onChange={(event) => setStartTimeOpt1(event.target.value)} />
                    に開始する、または
                </label>
                <label>
                    <input type="radio" value="option2" checked={selectedStartOption === 'option2'} onChange={(event) => setselectedStartOption(event.target.value)} />
                    日の出
                </label>
                <label>
                    <input type="radio" value="option3" checked={selectedStartOption === 'option3'} onChange={(event) => setselectedStartOption(event.target.value)} />
                    日の入から
                    <Input
                        className="text-field"
                        type="number"
                        value={starttimeOpt2}
                        onChange={(event) => setStartTimeOpt2(event.target.value)}
                    />
                    分間ずらして開始する
                </label>
            </div>

            {Name !== Irrigation &&
                <div>
                    <label>
                        終了時刻：
                        <input type="radio" value="option1" checked={selectedEndOption === 'option1'} onChange={(event) => setselectedEndOption(event.target.value)} />
                        指定時刻
                        <input type="time" value={endtimeOpt1} onChange={(event) => setEndTimeOpt1(event.target.value)} />
                        に終了する、または
                    </label>
                    <label>
                        <input type="radio" value="option2" checked={selectedEndOption === 'option2'} onChange={(event) => setselectedEndOption(event.target.value)} />
                        日の出
                    </label>
                    <label>
                        <input type="radio" value="option3" checked={selectedEndOption === 'option3'} onChange={(event) => setselectedEndOption(event.target.value)} />
                        日の入から
                        <Input
                            className="text-field"
                            type="number"
                            value={endtimeOpt2}
                            onChange={(event) => setEndTimeOpt2(event.target.value)}
                        />
                        分間ずらして終了する
                    </label>
                </div>
            }

            {[CO2, EC, PH, LED1, LED2, LED3, LED4].includes(Name) &&
                <><div>
                    <label>停止条件：すべての{sensor}が
                        <Input
                            className="text-field"
                            type="number"
                            value={stopValue}
                            onChange={(event) => setStopValue(event.target.value)}
                        />
                        {unit}以上になったら、
                        {![LED1, LED2, LED3, LED4].includes(Name) ?
                            '施用を一時停止する' : '消灯する'}
                    </label>
                </div>
                    <div>
                        <label>再開条件：いずれかの{sensor}が
                            <Input
                                className="text-field"
                                type="number"
                                value={restartValue}
                                onChange={(event) => setRestartValue(event.target.value)}
                            />
                            {unit}以上になったら、
                            {![LED1, LED2, LED3, LED4].includes(Name) ?
                                '施用を再開する' : '点灯する'}
                        </label>
                    </div></>
            }

            <div>
                {[CO2, Air, PH, EC].includes(Name) &&
                    <label>施用時の動作：
                        <Input
                            className="text-field"
                            type="number"
                            value={action1Value}
                            onChange={(event) => setAction1Value(event.target.value)}
                        />
                        分間バルブを解放し、その後
                        <Input
                            className="text-field"
                            type="number"
                            value={action2Value}
                            onChange={(event) => setAction2Value(event.target.value)}
                        />
                        分間バルブを閉鎖する
                    </label>
                }
            </div>

            {[Curtain, Window].includes(Name) &&
                <>
                    <div>
                        <label>温度条件：すべての{Temperaturesensor}が
                            {keyword}を開く基準温度を
                            <input type="radio" value="option1" checked={selectedTempState === 'option1'} onChange={(event) => setselectedTempState(event.target.value)} />
                            上回ったら、
                            <input type="radio" value="option2" checked={selectedTempState === 'option2'} onChange={(event) => setselectedTempState(event.target.value)} />
                            下回ったら、{keyword}を開く
                        </label>
                    </div>
                    <div>
                        <label>基準温度：{keyword}を開く温度
                            <Input
                                className="text-field"
                                type="number"
                                value={OpenStatTemp}
                                onChange={(event) => setOpenStatTemp(event.target.value)}
                            />
                            {Temperatureunit}{keyword}を閉じる温度
                            <Input
                                className="text-field"
                                type="number"
                                value={CloseStatTemp}
                                onChange={(event) => setCloseStatTemp(event.target.value)}
                            />
                            {Temperatureunit}
                        </label>
                    </div>
                    <div>
                        <label>湿度条件：すべての{Humiditysensor}が
                            {keyword}を開く基準湿度を
                            <input type="radio" value="option1" checked={selectedHumiState === 'option1'} onChange={(event) => setselectedHumiState(event.target.value)} />
                            上回ったら、
                            <input type="radio" value="option2" checked={selectedHumiState === 'option2'} onChange={(event) => setselectedHumiState(event.target.value)} />
                            下回ったら、{keyword}を開く
                        </label>
                    </div>
                    <div>
                        <label>基準湿度：{keyword}を開く湿度
                            <Input
                                className="text-field"
                                type="number"
                                value={OpenStatHumi}
                                onChange={(event) => setOpenStatHumi(event.target.value)}
                            />
                            {Humidityunit}{keyword}を閉じる湿度
                            <Input
                                className="text-field"
                                type="number"
                                value={CloseStatHumi}
                                onChange={(event) => setCloseStatHumi(event.target.value)}
                            />
                            {Humidityunit}
                        </label>
                    </div>
                    {Name === Curtain &&
                        <>
                            <div>
                                <label>照度条件：すべての{LEDsensor}が
                                    {keyword}を開く基準照度を
                                    <input type="radio" value="option1" checked={selectedLEDState === 'option1'} onChange={(event) => setselectedLEDState(event.target.value)} />
                                    上回ったら、
                                    <input type="radio" value="option2" checked={selectedLEDState === 'option2'} onChange={(event) => setselectedLEDState(event.target.value)} />
                                    下回ったら、{keyword}を開く
                                </label>
                            </div>
                            <div>
                                <label>基準照度：{keyword}を開く照度
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={OpenStatLED}
                                        onChange={(event) => setOpenStatLED(event.target.value)}
                                    />
                                    {LEDunit}{keyword}を閉じる照度
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={CloseStatLED}
                                        onChange={(event) => setCloseStatLED(event.target.value)}
                                    />
                                    {LEDunit}
                                </label>
                            </div>
                        </>
                    }
                    <div>
                        <label>開閉時の動作：開く時
                            <Input
                                className="text-field"
                                type="number"
                                value={OpenStatAction}
                                onChange={(event) => setOpenStatAction(event.target.value)}
                            />
                            {Humidityunit}ずつ増加、閉じる時
                            <Input
                                className="text-field"
                                type="number"
                                value={CloseStatAction}
                                onChange={(event) => setCloseStatAction(event.target.value)}
                            />
                            {Humidityunit}ずつ減少、動作の度に
                            <Input
                                className="text-field"
                                type="number"
                                value={ActionTime}
                                onChange={(event) => setActionTime(event.target.value)}
                            />
                            分間待機する
                        </label>
                    </div>
                    <div>
                        <label>センサー故障時の動作：
                            <input type="radio" value="option1" checked={selectedFailureAction === 'option1'} onChange={(event) => setselectedFailureAction(event.target.value)} />
                            無視して何もしない
                            <input type="radio" value="option2" checked={selectedFailureAction === 'option2'} onChange={(event) => setselectedFailureAction(event.target.value)} />
                            {keyword}を開く
                            <input type="radio" value="option3" checked={selectedFailureAction === 'option3'} onChange={(event) => setselectedFailureAction(event.target.value)} />
                            {keyword}を閉じる
                        </label>
                    </div>
                </>
            }

            {[CFAN, PFAN, Injector, General].includes(Name) &&
                <>
                    <div>
                        <label>運転条件（温度）：いずれかの{Temperaturesensor}が
                            {keyword}を開く基準湿度を
                            <Input
                                className="text-field"
                                type="number"
                                value={StartDriveTempState}
                                onChange={(event) => setStartDriveTempState(event.target.value)} />
                            {Temperatureunit}以上になったら、運転を開始する
                        </label>
                    </div>
                    <div>
                        <label>停止条件（温度）：すべての{Temperaturesensor}が
                            <Input
                                className="text-field"
                                type="number"
                                value={EndDriveTempState}
                                onChange={(event) => setEndDriveTempState(event.target.value)} />
                            {Temperatureunit}以下になったら、運転を停止する
                        </label>
                    </div>
                    <div>
                        <label>運転条件（湿度）：いずれかの{Humiditysensor}が
                            <Input
                                className="text-field"
                                type="number"
                                value={StartDriveHumiState}
                                onChange={(event) => setStartDriveHumiState(event.target.value)} />
                            {Humidityunit}以上になったら、運転を開始する
                        </label>
                    </div>
                    <div>
                        <label>停止条件（湿度）：すべての{Humiditysensor}が
                            <Input
                                className="text-field"
                                type="number"
                                value={EndDriveHumiState}
                                onChange={(event) => setEndDriveHumiState(event.target.value)} />
                            {Humidityunit}以下になったら、運転を停止する
                        </label>
                    </div>
                </>
            }

            {Name === Aircon &&
                <>
                    <div>
                        <label>冷房運転条件：気温が
                            <Input
                                className="text-field"
                                type="number"
                                value={CoolerStartState}
                                onChange={(event) => setCoolerStartState(event.target.value)}
                            />
                            {Temperatureunit}以上になったら開始し、気温が
                            <Input
                                className="text-field"
                                type="number"
                                value={CoolerEndState}
                                onChange={(event) => setCoolerEndState(event.target.value)}
                            />
                            {Temperatureunit}以下になったら停止する
                        </label>
                    </div>
                    <div>
                        <label>暖房運転条件：気温が
                            <Input
                                className="text-field"
                                type="number"
                                value={HeaterStartState}
                                onChange={(event) => setHeaterStartState(event.target.value)}
                            />
                            {Temperatureunit}以下になったら開始し、気温が
                            <Input
                                className="text-field"
                                type="number"
                                value={HeaterEndState}
                                onChange={(event) => setHeaterEndState(event.target.value)}
                            />
                            {Temperatureunit}以上になったら停止する
                        </label>
                    </div>
                    <div>
                        <label>除湿運転モード：
                            <input type="radio" value="option1" checked={selectedDehumiMode === 'option1'} onChange={(event) => setselectedDehumiMode(event.target.value)} />
                            除湿なし
                            <input type="radio" value="option2" checked={selectedDehumiMode === 'option2'} onChange={(event) => setselectedDehumiMode(event.target.value)} />
                            常に冷房
                            <input type="radio" value="option3" checked={selectedDehumiMode === 'option3'} onChange={(event) => setselectedDehumiMode(event.target.value)} />
                            冷房から暖房
                            <input type="radio" value="option4" checked={selectedDehumiMode === 'option4'} onChange={(event) => setselectedDehumiMode(event.target.value)} />
                            暖房から冷房
                            <input type="radio" value="option5" checked={selectedDehumiMode === 'option5'} onChange={(event) => setselectedDehumiMode(event.target.value)} />
                            常に暖房
                        </label>
                    </div>
                    <div>
                        <label>除湿運転条件：湿度が
                            <Input
                                className="text-field"
                                type="number"
                                value={DehumiStartState}
                                onChange={(event) => setDehumiStartState(event.target.value)}
                            />
                            {Humidityunit}以上になったら除湿を開始し、湿度が
                            <Input
                                className="text-field"
                                type="number"
                                value={DehumiEndState}
                                onChange={(event) => setDehumiEndState(event.target.value)}
                            />
                            {Humidityunit}以下になったら停止する
                        </label>
                    </div>
                    <div>
                        <label>除湿冷暖切替：気温が
                            <Input
                                className="text-field"
                                type="number"
                                value={SwitchStartState}
                                onChange={(event) => setSwitchStartState(event.target.value)}
                            />
                            {Temperatureunit}以上になったら冷房に、気温が
                            <Input
                                className="text-field"
                                type="number"
                                value={SwitchEndState}
                                onChange={(event) => setSwitchEndState(event.target.value)}
                            />
                            {Temperatureunit}以下になったら暖房に切り替える
                        </label>
                    </div>
                    <div>
                        <label>センサー故障時の動作：
                            <input type="radio" value="option1" checked={FailureAction === 'option1'} onChange={(event) => setFailureAction(event.target.value)} />
                            無視して何もしない
                            <input type="radio" value="option2" checked={FailureAction === 'option2'} onChange={(event) => setFailureAction(event.target.value)} />
                            冷房で運転する
                            <input type="radio" value="option3" checked={FailureAction === 'option3'} onChange={(event) => setFailureAction(event.target.value)} />
                            暖房で運転する
                        </label>
                    </div>
                </>
            }
            {Name === Irrigation &&
                <><div>
                    <label>ライン：
                        <input type="radio" value="option1" checked={Line === 'option1'} onChange={(event) => setLine(event.target.value)} />
                        ライン１
                        <input type="radio" value="option2" checked={Line === 'option2'} onChange={(event) => setLine(event.target.value)} />
                        ライン２
                        <input type="radio" value="option3" checked={Line === 'option3'} onChange={(event) => setLine(event.target.value)} />
                        ライン３
                    </label>
                </div>
                    {/*<div>
                    {data[plan].area.slice(0, 10).map((area, index) => (
                        <div key={index}>
                            <label>{area.area}の土壌湿度が
                                {data[plan].updatetime !== '' ?
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={SoilHumidity}
                                        onChange={(event) => setSoilHumidity(event.target.value)} />
                                    :
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={0} />
                                }
                                {Humidityunit}以下なら、このエリアに
                                {data[plan].updatetime !== '' ?
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={timeValue}
                                        onChange={(event) => setTimeValue(event.target.value)} />
                                    :
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={0} />
                                }
                                分間施用する
                            </label>
                        </div>
                    ))}
                </div>*/}
                    <div>
                        {data[plan].area.slice(0, 10).map((area, index) => (
                            <div key={index}>
                                <label>{area.area}の土壌湿度が
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={area.soilhumidity} />
                                    {Humidityunit}以下なら、このエリアに
                                    <Input
                                        className="text-field"
                                        type="number"
                                        value={area.time} />
                                    分間施用する
                                </label>
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    );
}

export default BasicPlanSettingEdit;