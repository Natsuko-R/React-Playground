
var nodata = "データ未登録";

//バルブ名
var CO2 = "CO₂供給バルブ";
var Air = "Air供給バルブ";
var PH = "pH調整剤バルブ";
var EC = "EC調整剤バルブ";

//LED名
var LED1 = "LED（第１系統）";
var LED2 = "LED（第２系統）";
var LED3 = "LED（第３系統）";
var LED4 = "LED（第４系統）";

//カーテン名
var Curtain = "カーテン（第１系統）";

//窓名
var Window = "窓（第１系統）";

//汎用名
var CFAN = "汎用（CFAN）";
var PFAN = "汎用（PFAN）";
var Injector = "汎用（動噴機）";
var General = "汎用４";

//空調
var Aircon = "空調";

//潅水
var Irrigation = "潅水システム";

//センサー
var CO2sensor = "CO₂センサー";
var PHsensor = "PHセンサー";
var ECsensor = "ECセンサー";
var LEDsensor = "照度センサー";
var Temperaturesensor = "気温センサー";
var Humiditysensor = "湿度センサー"

//ユニット名
var CO2unit = "ppm";
var ECunit = "mS/cm";
var LEDunit = "klx";
var Temperatureunit = "°C";
var Humidityunit = "%";

//キーワード
var CurtainKey ="カーテン";
var WindowKey ="窓";

var categories = [CO2,Air, PH, EC, LED1, LED2, LED3, LED4, Curtain, Window, CFAN, PFAN, Injector, General, Aircon, Irrigation];


export{ nodata, CO2, Air, PH, EC, LED1, LED2, LED3, LED4, Curtain, Window, CFAN, PFAN, Injector, General, Aircon, Irrigation };
export{ CO2sensor, PHsensor, ECsensor, LEDsensor, Temperaturesensor, Humiditysensor };
export{ CO2unit, ECunit, LEDunit, Temperatureunit, Humidityunit };
export{ CurtainKey, WindowKey };
export{ categories };
