import  ObjectControler  from "./ObjectControler";

const GROUP_NAME = "housegroup";

export default class HouseControler extends ObjectControler{
    
    constructor(scene){
        super(scene);
        this.houseObjects = [];
    }

    // ハウスのオブジェクト配列を作成する
    createTargetArray(){
        //const houseObjects = [];
        const houseGroup = this.scene.getObjectByName(GROUP_NAME);
        console.log(houseGroup.name);
        houseGroup.visible = false;
        // 子要素ごとオブジェクトを配列に
        this.houseObjects.push(houseGroup);
        
    }

    // オーバーライド
    toggleTargetVisible(){
        // 透明なら
        if(!this.houseObjects[0].visible){
            this.houseObjects[0].visible = true;
            this.flag = true;
        }
        // 不透明なら
        else if(this.houseObjects[0].visible){
            this.houseObjects[0].visible = false;
            this.flag = false;
        }
    }
}