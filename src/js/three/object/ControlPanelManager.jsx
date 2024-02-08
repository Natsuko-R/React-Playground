import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";

// モデルのパス
//const PATH_MODEL = '/model/gltf/controlpanel.glb';
const PATH_MODEL = '/model/gltf/controlpanelwood.glb';

// モデルのスケール
const MODEL_SCALE = 30.0;

// 操作用の名前
const MODEL_NAME = 'controlpanel';


export class ControlPanelManager extends ObjectManager{

    // 制御盤を配置
    createControlPanel(scene, pos, objId){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_MODEL, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
            this.baseModel.rotation.y = -0.5 * Math.PI;
        
            // 名前設定
            this.baseModel.traverse( (child) => {
                child.name = MODEL_NAME;
            });
        
            console.log("ControlPanelManager: succeeded on loading " + PATH_MODEL);

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

            console.log("ControlPanelManager: this HeatpumpManager has following number of children " + this.children.length);

        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('ControlPanelManager: failed on loading ' + PATH_MODEL);
        
        });
    }

}