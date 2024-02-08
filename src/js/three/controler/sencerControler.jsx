import { Scene, Mesh } from "three"
import  ObjectControler  from "./ObjectControler";



export default class SencerControler extends ObjectControler{

    // センサーオブジェクトの色を変更する
    changeSencerColor(selectedName){
        // Sceneに登録されているMeshオブジェクトからnameプロパティが"target"のオブジェクトを取得する
        const targetObject = this.scene.getObjectByName(selectedName);


        // targetObjectがMeshオブジェクトのとき
        if (targetObject instanceof Mesh) {
            targetObject.traverse( (child) => {
                child.material.color.r = 255;
                child.material.color.g = 0;
                child.material.color.b = 0;
            });
        
        }
    }
}