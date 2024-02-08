//import { Mesh, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";
import { MeshStandardMaterial } from "three";

// モデルのパス
const MODEL_PATH = '/model/gltf/ledwithoutmaterial.glb';

// モデルのスケール
const MODEL_SCALE = 50.0;


export class LEDManagerTest extends ObjectManager{

    constructor(){
        super();

        // 元のマテリアル
        this.baseMaterial = new MeshStandardMaterial({
                                                        color: 0xffffff, // ベースカラー
                                                        emissive: 0xdcdcdc, // 発光色
                                                        emissiveIntensity: 1, // 発光強度
                                                        roughness: 0, // 表面のざらつき
                                                        metalness: 1 // 金属度合い
        });

        // 稼働時用マテリアル
        this.colorMaterial = new MeshStandardMaterial({
                                                        color: 0xff0000, // ベースカラー
                                                        emissive: 0xff0080, // 発光色
                                                        emissiveIntensity: 10, // 発光強度
                                                        roughness: 0, // 表面のざらつき
                                                        metalness: 1 // 金属度合い
                                                    });
        
        // ケーブル部分だけを含んだ配列
        this.cables = [];

        // 全体で制御する場合の稼働状況
        this.wholeOperateFlag = false;
    }

    // LEDを作成
    createLED(scene, pos, objId, flag){
        
        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( MODEL_PATH, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

            // モデルを複製
            const model = this.baseModel.clone();

            // 位置設定
            model.position.set(pos.x, pos.y, pos.z);

            // オブジェクトデータを設定
            const objectData = new ObjectData();
            objectData.setParentObject(model);
            objectData.objId = objId;
            objectData.attribute = "led";
            objectData.operateFlag = flag;
            // モデルのユーザーデータにオブジェクトデータを設定
            model.userData = objectData;

            // 稼働フラグがtrueなら色を変える
            if(flag){
                this.changeCableColor(model);
            }

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            // マネージャのケーブル配列に追加
            this.cables.push(model);

            // モデルをシーンに追加
            scene.add(model);


        }, undefined, undefined);
    }

    // すべてのLEDの色を変える
    changeAllCableColor(){
            
        // ケーブルの色を変える
        if(this.wholeOperateFlag !== true){
                
            // それぞれのケーブル要素について処理を行う
            for(let i = 0; i < this.cables.length; i++){
                    
                // 稼働時用マテリアルに変更し、フラグを変更する
                this.cables[i].traverse( (child) => {

                    // 名前がrightもしくはleftならばマテリアルを変更
                    if(child.name === "right" || child.name === "left"){
                        console.log(child);
                        child.material = this.colorMaterial;
                    }

                });

                this.cables[i].userData.operateFlag = true;
            }

            this.wholeOperateFlag = true;

        }else{

            // それぞれのケーブル要素について処理を行う
            for(let i = 0; i < this.cables.length; i++){
                    
                // 元のマテリアルに戻し、フラグを変更する
                this.cables[i].traverse( (child) => {
                    
                    // 名前がrightもしくはleftならばマテリアルを変更
                    if(child.name === "right" || child.name === "left"){
                        child.material = this.baseMaterial;
                    }

                });

                this.cables[i].userData.operateFlag = false;
                
            }
            this.wholeOperateFlag = false;
        }
    }
}