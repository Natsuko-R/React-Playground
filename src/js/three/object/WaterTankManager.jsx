//import { Mesh, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";

// モデルのパス
const PATH_MODEL = '/model/gltf/watertank.glb';

// モデルのスケール
const MODEL_SCALE = 30.0;

// 操作用の名前
const MODEL_NAME = 'watertank';


export class WaterTankManager extends ObjectManager{

    // 潅水タンクを配置
    createWaterTank(scene, pos, objId){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_MODEL, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
        
            // 名前設定
            this.baseModel.traverse( (child) => {
                child.name = MODEL_NAME;
            });
        
            console.log("WaterTankManager: succeeded on loading " + PATH_MODEL);

    ////////////////////////////////////
    // 今後以下を複数回実行できるように改修
    ////////////////////////////////////

            // モデルを複製
            const model = this.baseModel.clone();

            // 位置設定
            model.position.set(pos.x, pos.y, pos.z);

            // オブジェクトデータを設定
            const objectData = new ObjectData();
            objectData.setParentObject(model);
            objectData.objId = objId;
            objectData.attribute = MODEL_NAME;

            // モデルのユーザーデータにオブジェクトデータを設定
            model.traverse( (child) => {
                child.userData = objectData;
            });

            // モデルをシーンに追加
            scene.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            console.log("WaterTankManager: this WaterTankManager has following number of children " + this.children.length);

        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('WaterTankManager: failed on loading ' + PATH_MODEL);
        
        });
    }

}