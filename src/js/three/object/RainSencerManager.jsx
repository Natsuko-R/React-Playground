//import { Mesh, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";

// モデルのパス
const PATH_MODEL = '/model/gltf/rainsencer.glb';

// モデルのスケール
const MODEL_SCALE = 20.0;                // 5.0

// 操作用の名前
const MODEL_NAME = 'rainsencer';


export class RainSencerManager extends ObjectManager{

    // センサーを配置
    createRainSencer(scene, pos, objId){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_MODEL, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
            this.baseModel.rotation.y = -0.75 * Math.PI;

            // 名前設定
            this.baseModel.traverse( (child) => {
                child.name = MODEL_NAME;
            });
        
            console.log("SenserManager: succeeded on loading " + PATH_MODEL);

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
            objectData.attribute = "rainsencer";

            // モデルの子要素にそれぞれオブジェクトデータを設定
            model.traverse((child) => {
                child.userData = objectData;
            });


            // モデルをシーンに追加
            scene.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            console.log("RainSenserManager: this SencerManager has following number of children " + this.children.length);

        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('RainSenserManager: failed on loading ' + PATH_MODEL);
        
        });
    }

}