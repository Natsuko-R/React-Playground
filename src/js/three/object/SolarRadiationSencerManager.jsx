//import { Mesh, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";

// モデルのパス
const PATH_MODEL = '/model/gltf/radiationsencer.glb';

// モデルのスケール
const MODEL_SCALE = 50.0;                // 5.0

// 操作用の名前
const MODEL_NAME = 'radiationsencer';


export class SolarRadiationSencerManager extends ObjectManager{

    // センサーを配置
    createSolarRadiationSencer(scene, pos, objId){

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
        
            console.log("SolarRadiationSencerManager: succeeded on loading " + PATH_MODEL);

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

            // モデルの子要素にそれぞれオブジェクトデータを設定
            model.traverse((child) => {
                child.userData = objectData;
            });

            // モデルをシーンに追加
            scene.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            console.log("SolarRadiationSencerManager: this SolarRadiationSencerManager has following number of children " + this.children.length);

        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('SolarRadiationSencerManager: failed on loading ' + PATH_MODEL);
        
        });
    }

}