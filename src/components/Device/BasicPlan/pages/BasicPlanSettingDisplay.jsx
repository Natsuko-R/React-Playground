import React from 'react';
import { CO2data, Airdata, PHdata, ECdata, LED1data, LED2data, LED3data, LED4data, Windowdata, Curtaindata, CFANdata, PFANdata, Injectordata, Generaldata, Aircondata, Irrigationdata } from './DataComponent';
import { nodata, CO2, Air, PH, EC, CO2sensor, PHsensor, ECsensor, CO2unit, ECunit, LED1, LED2, LED3, LED4, LEDsensor, LEDunit } from './GlobalVariables';
import { Curtain, Window, CurtainKey, WindowKey, Temperaturesensor, Humiditysensor, Temperatureunit, Humidityunit } from './GlobalVariables';
import { CFAN, PFAN, Injector, General, Aircon, Irrigation } from './GlobalVariables';
import "../css/BasicPlanSetting.css";

function BasicPlanSettingDisplay(props) {
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

    return (
        <div className='Settingdisplay'>
            <div>
                <label>
                    更新日時：{data[plan].updatetime === '' ? nodata : data[plan].updatetime}
                </label>
            </div>
            <div>
                <label>
                    開始時刻：
                </label>
                {data[plan].startoption === "1" &&
                    <label>
                        指定時刻{data[plan].starttimeOpt1}に開始する
                    </label>
                }
                {data[plan].startoption === "2" &&
                    <label>
                        日の出から{data[plan].starttimeOpt2}分間ずらして開始する
                    </label>
                }
                {data[plan].startoption === "3" &&
                    <label>
                        日の入から{data[plan].starttimeOpt2}分間ずらして開始する
                    </label>
                }
            </div>

            {Name !== Irrigation &&
                <div>
                    <label>
                        終了時刻：
                    </label>
                    {data[plan].endoption === "1" &&
                        <label>
                            指定時刻{data[plan].endtimeOpt1}に終了する
                        </label>
                    }
                    {data[plan].endoption === "2" &&
                        <label>
                            日の出から{data[plan].endtimeOpt2}分間ずらして終了する
                        </label>
                    }
                    {data[plan].endoption === "3" &&
                        <label>
                            日の入から{data[plan].endtimeOpt2}分間ずらして終了する
                        </label>
                    }
                </div>
            }

            {[CO2, EC, PH, LED1, LED2, LED3, LED4].includes(Name) &&
                <>
                    <div>
                        <label>停止条件：</label>
                        {data[plan].updatetime !== '' &&
                            <label>すべての{sensor}が
                                {data[plan].stop}{unit}以上になったら、
                                {![LED1, LED2, LED3, LED4].includes(Name) ?
                                    '施用を一時停止する' : '消灯する'}
                            </label>}
                    </div>
                    <div>
                        <label>再開条件：</label>
                        {data[plan].updatetime !== '' &&
                            <label>いずれかの{sensor}が
                                {data[plan].restart}{unit}以上になったら、
                                {![LED1, LED2, LED3, LED4].includes(Name) ?
                                    '施用を再開する' : '点灯する'}
                            </label>
                        }
                    </div>
                </>
            }

            <div>
                {[CO2, Air, PH, EC].includes(Name) &&
                    <>
                        <label>施用時の動作：</label>
                        {data[plan].updatetime !== '' &&
                            <label>{data[plan].action1}分間バルブを解放し、その後{data[plan].action2}分間バルブを閉鎖する</label>
                        }
                    </>
                }
            </div>

            {[Curtain, Window].includes(Name) &&
                <>
                    <div>
                        <label>温度条件：</label>
                        {data[plan].tempstate === '1' &&
                            <label>すべての{Temperaturesensor}が{keyword}を開く基準温度を上回ったら、{keyword}を開く</label>
                        }
                        {data[plan].tempstate === '2' &&
                            <label>すべての{Temperaturesensor}が{keyword}を開く基準温度を下回ったら、{keyword}を開く</label>
                        }
                    </div>
                    <div>
                        <label>基準温度：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                {keyword}を開く温度
                                {data[plan].openstattemp}{Temperatureunit}、
                                {keyword}を閉じる温度
                                {data[plan].closestattemp}{Temperatureunit}
                            </label>
                        }
                    </div>
                    <div>
                        <label>湿度条件：</label>
                        {data[plan].humistate === '1' &&
                            <label>すべての{Temperaturesensor}が{keyword}を開く基準温度を上回ったら、{keyword}を開く</label>
                        }
                        {data[plan].humistate === '2' &&
                            <label>すべての{Temperaturesensor}が{keyword}を開く基準温度を下回ったら、{keyword}を開く</label>
                        }
                    </div>
                    <div>
                        <label>基準湿度：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                {keyword}を開く湿度
                                {data[plan].openstathumi}{Humidityunit}、
                                {keyword}を閉じる湿度
                                {data[plan].closestathumi}{Humidityunit}
                            </label>
                        }
                    </div>
                    {Name === Curtain &&
                        <>
                            <div>
                                <label>照度条件：</label>
                                {data[plan].LEDstate === '1' &&
                                    <label>すべての{Temperaturesensor}が{keyword}を開く基準温度を上回ったら、{keyword}を開く</label>
                                }
                                {data[plan].LEDstate === '2' &&
                                    <label>すべての{Temperaturesensor}が{keyword}を開く基準温度を下回ったら、{keyword}を開く</label>
                                }
                            </div>
                            <div>
                                <label>基準照度：</label>
                                {data[plan].updatetime !== '' &&
                                    <label>
                                        {keyword}を開く照度
                                        {data[plan].openstatLED}{LEDunit}、
                                        {keyword}を閉じる照度
                                        {data[plan].openstatLED}{LEDunit}
                                    </label>
                                }
                            </div>
                        </>
                    }
                    <div>
                        <label>開閉時の動作：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                開く時
                                {data[plan].openstataction}
                                {Humidityunit}ずつ増加、閉じる時
                                {data[plan].closestataction}
                                {Humidityunit}ずつ減少、動作の度に
                                {data[plan].actiontime}
                                分間待機する
                            </label>
                        }
                    </div>
                    <div>
                        <label>センサー故障時の動作：
                            {data[plan].failureaction === '1' &&
                                <label>無視して何もしない</label>
                            }
                            {data[plan].failureaction === '2' &&
                                <label>{keyword}を開く</label>
                            }
                            {data[plan].failureaction === '3' &&
                                <label>{keyword}を閉じる</label>
                            }
                        </label>
                    </div>
                </>
            }

            {[CFAN, PFAN, Injector, General].includes(Name) &&
                <>
                    <div>
                        <label>運転条件（温度）：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                いずれかの{Temperaturesensor}が
                                {keyword}を開く基準湿度を
                                {data[plan].startdrivetempstate}
                                {Temperatureunit}以上になったら、運転を開始する
                            </label>
                        }
                    </div>
                    <div>
                        <label>停止条件（温度）：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                すべての{Temperaturesensor}が
                                {data[plan].enddrivetempstate}
                                {Temperatureunit}以下になったら、運転を停止する
                            </label>
                        }
                    </div>
                    <div>
                        <label>運転条件（湿度）：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                いずれかの{Humiditysensor}が
                                {data[plan].startdrivehumistate}
                                {Humidityunit}以上になったら、運転を開始する
                            </label>
                        }
                    </div>
                    <div>
                        <label>停止条件（湿度）：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                すべての{Humiditysensor}が
                                {data[plan].enddrivehumistate}
                                {Humidityunit}以下になったら、運転を停止する
                            </label>
                        }
                    </div>
                </>
            }

            {Name === Aircon &&
                <>
                    <div>
                        <label>冷房運転条件：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                気温が
                                {data[plan].coolerstartstate}{Temperatureunit}以上になったら開始し、気温が
                                {data[plan].coolerendstate}{Temperatureunit}以下になったら停止する
                            </label>
                        }
                    </div>
                    <div>
                        <label>暖房運転条件：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                気温が
                                {data[plan].heaterstartstate}{Temperatureunit}以下になったら開始し、気温が
                                {data[plan].heaterendstate}{Temperatureunit}以上になったら停止する
                            </label>
                        }
                    </div>
                    <div>
                        <label>除湿運転モード：
                            {data[plan].dehumimode === '1' &&
                                <label>除湿なし</label>
                            }
                            {data[plan].dehumimode === '2' &&
                                <label>常に冷房</label>
                            }
                            {data[plan].dehumimode === '3' &&
                                <label>冷房から暖房</label>
                            }
                            {data[plan].dehumimode === '4' &&
                                <label>暖房から冷房</label>
                            }
                            {data[plan].dehumimode === '5' &&
                                <label>常に暖房</label>
                            }
                        </label>
                    </div>
                    <div>
                        <label>除湿運転条件：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                湿度が
                                {data[plan].dehumistartstate}{Humidityunit}以上になったら除湿を開始し、湿度が
                                {data[plan].dehumiendstate}{Humidityunit}以下になったら停止する
                            </label>
                        }
                    </div>
                    <div>
                        <label>除湿冷暖切替：</label>
                        {data[plan].updatetime !== '' &&
                            <label>
                                気温が
                                {data[plan].switchstartstate}{Temperatureunit}以上になったら冷房に、気温が
                                {data[plan].switchendstate}{Temperatureunit}以下になったら暖房に切り替える
                            </label>
                        }
                    </div>
                    <div>
                        <label>センサー故障時の動作：
                            {data[plan].failureaction === '1' &&
                                <label>冷房で運転する</label>
                            }
                            {data[plan].failureaction === '2' &&
                                <label>無視して何もしない</label>
                            }
                            {data[plan].failureaction === '3' &&
                                <label>暖房で運転する</label>
                            }
                        </label>
                    </div>
                </>
            }
            {Name === Irrigation &&
                <><div>
                    <label>ライン：
                        {data[plan].line === '1' &&
                            <label>ライン１</label>
                        }
                        {data[plan].line === '2' &&
                            <label>ライン２</label>
                        }
                        {data[plan].line === '3' &&
                            <label>ライン３</label>
                        }
                    </label>
                </div>
                    {data[plan].updatetime !== '' &&
                        <div>
                            {data[plan].area.slice(0, 10).map((area, index) => (
                                <div key={index}>
                                    <label>{area.area}の土壌湿度が
                                        {area.soilhumidity}{Humidityunit}以下なら、このエリアに
                                        {area.time}分間施用する
                                    </label>
                                </div>
                            ))}
                        </div>
                    }
                </>
            }
        </div>
    );
}

export default BasicPlanSettingDisplay;