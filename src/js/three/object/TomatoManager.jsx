import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three";
import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";

// モデルのパス
const PATH_MODEL = '/model/gltf/tomato.glb';

// モデルのスケール
const MODEL_SCALE = 40.0;

// 操作用の名前
const MODEL_NAME = 'tomato';


export class TomatoManager extends ObjectManager{

    // トマトを配置
    createTomato(scene, pos, objId){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_MODEL, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.baseModel.scale.set(MODEL_SCALE * 1.2, MODEL_SCALE, MODEL_SCALE * 1.2);
            this.baseModel.rotation.y = 0.5 * Math.PI;
        
            // 名前設定
            this.baseModel.traverse( (child) => {
                child.name = MODEL_NAME;
            });

            //this.baseModel.visible = true;
            console.log("basemodel.visible = " + this.baseModel.visible)
        
            console.log("TomatoManager: succeeded on loading " + PATH_MODEL);

    ////////////////////////////////////
    // 今後以下を複数回実行できるように改修
    ////////////////////////////////////

            // モデルを複製
            const model = this.baseModel.clone();

            // 位置設定
            model.position.set(pos.x, pos.y, pos.z);

            // オブジェクトデータを作成
            const objectData = new ObjectData();
            objectData.setParentObject(model);
            objectData.objId = objId;
            objectData.attribute = MODEL_NAME;
            objectData.operateFlag = false;
            
            // モデルのユーザーデータにオブジェクトデータを設定
            model.traverse((child) => {
                child.userData = objectData;
            });

            // モデルをシーンに追加
            scene.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            console.log("TomatoManager: this HeatpumpManager has following number of children " + this.children.length);

        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('TomatoManager: failed on loading ' + PATH_MODEL);
        
        });
    }

    setChildrenVisible(flag){
        // すべての子要素に対して行う
        for(let i = 0; i < this.children.length; i++){

            // 表示切り替え
            this.children[i].visible = flag;
        }
    }

}