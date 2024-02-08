//import { Mesh, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";
import { Group, MeshStandardMaterial } from "three";

// モデルのパス
const CABLE_PATH = '/model/gltf/cableLED.glb';
const SOCKET_PATH = '/model/gltf/socketLED.glb';

// モデルのスケール
const MODEL_SCALE = 50.0;

// 操作用の名前
const MODEL_NAME = 'led';


export class LEDManager extends ObjectManager{

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


    // ケーブルを配置
    createLED(scene, pos, objId, flag){

        const group = new Group();

        // ケーブルをグループに登録
        this.createCable(group, pos, objId, flag);

        // ソケットをグループに登録
        this.createSocket(group, pos, objId, flag);

        // オブジェクトデータを設定
        const objectData = new ObjectData();
        objectData.setParentObject(group);
        objectData.objId = objId;
        objectData.attribute = "led";
        objectData.operateFlag = flag;
         
        // モデルのユーザーデータにオブジェクトデータを設定
        group.traverse( (child) => {
            child.userData = objectData;
        });

        scene.add(group);

        console.log("LEDManager : created Model, and its opeateFlag is " + group.userData.operateFlag);

    }

    // ケーブル部分を作成
    createCable(group, pos, objId, flag){
        
        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( CABLE_PATH, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
        
            // 名前設定
            this.baseModel.traverse( (child) => {
                child.name = MODEL_NAME;
                child.material = this.baseMaterial;
            });

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

            // モデルをグループに追加
            group.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            // マネージャのケーブル配列に追加
            this.cables.push(model);


        }, undefined, undefined);
    }

    // ソケットを作成
    createSocket(group, pos, objId, flag){
        
        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( SOCKET_PATH, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
        
            // 名前設定
            this.baseModel.traverse( (child) => {
                child.name = MODEL_NAME;
            });

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

            // モデルをグループに追加
            group.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

        }, undefined, undefined);
    }

    // LEDの色を変える
    changeCableColor(model){
        
        model.traverse( (child) => {
            child.material = this.colorMaterial;
        });
    }

    // すべてのLEDの色を変える
    changeAllCableColor(){
            
        // ケーブルの色を変える
        if(this.wholeOperateFlag !== true){
                
            // それぞれのケーブル要素について処理を行う
            for(let i = 0; i < this.cables.length; i++){
                    
                // 稼働時用マテリアルに変更し、フラグを変更する
                this.changeCableColor(this.cables[i]);
                this.cables[i].userData.operateFlag = true;
            }

            this.wholeOperateFlag = true;

        }else{

            // それぞれのケーブル要素について処理を行う
            for(let i = 0; i < this.cables.length; i++){
                    
                // 元のマテリアルに戻し、フラグを変更する
                this.cables[i].traverse( (child) => {
                    if(this.cables[i].material !== undefined){
                        child.material = this.baseMaterial;
                    }
                });

                this.cables[i].userData.operateFlag = false;
                
            }
            this.wholeOperateFlag = false;
        }
    }
}