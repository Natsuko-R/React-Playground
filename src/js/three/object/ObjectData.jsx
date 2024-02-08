// Object3Dクラスの.userDataに格納するためのクラス

export default class ObjectData{
    
    constructor(){
        
        // .userDataとして格納される時の親オブジェクト
        // <Object3D>
        this.parentObject = null;

        // 管理者側で一意に設定される背番号
        // <string>
        this.objId = "";

        // オブジェクトがどのような種類かを区別する属性
        // <string>
        this.attribute = "";

        // 稼働状態を設定
        // <boolean>
        this.operateFlag = false;

    }

    // 親オブジェクトを設定する
    setParentObject(object){
        this.parentObject = object;
    }

    // 親オブジェクトの参照を取得する
    getParentObject(){
        return this.parentObject;
    }
    
    // objIdを取得する
    getObjId(){
        return this.objId;
    }

    // attributeを取得する
    getObjAttribute(){
        return this.attribute;
    }

}