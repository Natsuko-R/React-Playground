import ObjectData from "./ObjectData";

// センサー用

export default class SencerData extends ObjectData{

    constructor(){
        super();


        this.errorFlag = false;
        this.valueCO2 = null;
        this.valueTemperature = null;
        this.valueHumidity = null;
    }

}