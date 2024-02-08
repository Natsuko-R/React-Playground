//import { Mesh, MeshBasicMaterial } from "three";
import { Clock, AnimationMixer, LoopRepeat} from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ObjectData from "./ObjectData";
import { ObjectManager } from "./ObjectManager";

// モデルのパス
const PATH_MODEL = '/model/gltf/fan.glb';
//const PATH_MODEL = '/model/gltf/circurator.glb';
//const PATH_MODEL = '/model/gltf/exhaustfan.glb';

// モデルのスケール
const MODEL_SCALE = 20.0;

// 操作用の名前
const MODEL_NAME = 'fan';


export class FanManager extends ObjectManager{

    constructor(){
        super();

        // アニメーション
        this.animations = null;

        // 格納用配列
        this.mixers = [];
        this.actions = [];
        this.clocks = [];

    }

    // ファンを配置
    createFan(scene, pos, objId){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_MODEL, (gltf) => {
        
            this.baseModel = gltf.scene;
            this.animations = gltf.animations;

            this.baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
            //this.baseModel.rotation.y = 0.5 * Math.PI;
        
            // 名前設定
            this.baseModel.name = MODEL_NAME;
        
            console.log("FanManager: succeeded on loading " + PATH_MODEL);

            // モデルを複製
            const model = this.baseModel.clone();

            // 位置設定
            model.position.set(pos.x, pos.y, pos.z);


            // オブジェクトデータを設定
            const objectData = new ObjectData();
            objectData.setParentObject(model);
            objectData.objId = objId;
            objectData.attribute = "fan";
            objectData.operateFlag = true;

            // モデルのユーザーデータにオブジェクトデータを設定
            model.traverse( (child) => {
                child.userData = objectData;
            });

            //model.userData = objectData;

            // モデルをシーンに追加
            scene.add(model);

            // モデルをマネージャーの子要素に追加
            this.addChild(model);

            console.log("FanManager: this FanManager has following number of children " + this.children.length);

            // アニメーションが読み込まれた時
            if(this.animations){

                // クロックの作成
                const clock = new Clock();

                // 配列に追加
                this.clocks.push(clock);

                // モデルにアニメーションを登録
                model.animations = this.animations;

                // モデルにアニメーションミキサーを作成
                const mixer = new AnimationMixer(model);

                // 配列に追加
                this.mixers.push(mixer);
        
                // アニメーションクリップ毎の処理
                // 逆から回すときは減算していけばよい
                for(let i = 0; i < model.animations.length; i++){
                    let clip = model.animations[i];
                    

                    // AnimationActionの作成
                    const action = mixer.clipAction(clip);
                    action.setDuration(1.5);

                    // 配列に登録
                    this.actions.push(action);

                    // ループ設定
                    action.setLoop(LoopRepeat);

                    // アニメーションの最後のフレームでアニメーションを終了
                    action.clampWhenFinished = true;

                    // アニメーションの再生
                    action.play();                        

                }

                console.log("FanManager: loaded AnimationFrame from " + PATH_MODEL);
            }

        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('FanManager: failed on loading ' + PATH_MODEL);
        
        });
    }

    // アニメーションミキサーの実行
    updateFanGroup(){

        for (let i = 0; i < this.mixers.length; i++){

            if(this.mixers[i]){
                this.mixers[i].update(this.clocks[i].getDelta());
            }
        }
    }

    // 特定のobjIdを持つオブジェクトのアニメーションをトグル
    toggleFanAnimation(objId){

        // アクション配列を走査
        for (let i = 0; i < this.actions.length; i++){

            // アクション配列のルートオブジェクトがobjIdで指定されたオブジェクトと一致している場合トグル
            if(this.getChildByObjId(objId) === this.actions[i].getRoot()){

                // nullチェック
                if(this.actions[i]){

                    console.log(this.actions[i].isRunning());

                    if(this.actions[i].isRunning()){
                        this.actions[i].stop();
                    }else if(!this.actions[i].isRunning()){
                        this.actions[i].play();
                    }
                }
            }
        }
    }
}