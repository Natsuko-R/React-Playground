//import { Mesh, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";

// モデルのパス
const PATH_MODEL = '/model/gltf/heatpump.glb';

// モデルのスケール
const MODEL_SCALE = 30.0;

// 操作用の名前
const MODEL_NAME = 'heatpump';


export class HeatpumpManager extends ObjectManager{

    // センサーを配置
    createHeatpump(scene, pos, objId, flag){

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
        
            console.log("HeatpumpManager: succeeded on loading " + PATH_MODEL);

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
            objectData.attribute = "heatpump";
            objectData.operateFlag = flag;
            
            // モデルのユーザーデータにオブジェクトデータを設定
            //model.userData = objectData;
            model.traverse((child) => {
                child.userData = objectData;
            });

            // モデルをシーンに追加
            scene.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            console.log("HeatpumpManager: this HeatpumpManager has following number of children " + this.children.length);

        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('HeatpumpManager: failed on loading ' + PATH_MODEL);
        
        });
    }

    // 稼働フラグをトグル
    toggleOperateFlag(objId){

        const target = this.getChildByObjId(objId);

        if(target.userData.operateFlag === true){

            target.userData.operateFlag = false;

        }else{

            target.userData.operateFlag = true;
            
        }
    }
}