import { Group, Clock, AnimationMixer, AnimationObjectGroup } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { ObjectManager } from "./ObjectManager";
import { FloorManager } from "./FloorManager";
import { ShadingCurtainManager } from "./ShadingCurtainManager";
import { WarmingCurtainManager } from "./WarmingCurtainManager";
import { OuterCurtainManager } from "./OuterCurtainManager";
import { InnerCurtainManager } from "./InnerCurtainManager";

// モデルのパス
const PATH_BASEWALL = '/model/gltf/greenhouse/basewall.glb';
const PATH_PILLAR = '/model/gltf/greenhouse/pillar.glb';
const PATH_BASEROOF = '/model/gltf/greenhouse/baseroof.glb';
const PATH_ENDROOF = '/model/gltf/greenhouse/endroof.glb';
const PATH_TRIANGLEWALL = '/model/gltf/greenhouse/trianglewall.glb';

// モデルのスケール
const MODEL_SCALE = 50.0;
const MODEL_SPACING = 50.0;
const HOUSE_SPACING = 200;

// ハウスグループ名
const GROUP_NAME = 'housegroup';


export class HouseManager extends ObjectManager{

    constructor(line, row){

        super();

        // ハウス登録用のグループ
        this.group = null;
        
        // ハウスが横何列あるか
        this.line = line;

        // ハウスの奥行が何列あるか
        this.row = row;

        // ハウスの範囲
        this.minRowPosZ = 0;
        this.maxRowPosZ = 0;
        this.minLinePosX = 0;
        this.maxLinePosX = 0;

        // アニメーション
        // アニメーショングループの作成
        this.animationGroup = new AnimationObjectGroup();
        this.animations = null;
        this.clock = new Clock();
        
        // アニメーショングループにアニメーションミキサーを作成
        this.mixer = new AnimationMixer(this.animationGroup);
        this.action = null;

        // 格納用配列
        this.actions = [];

        // 地面
        this.floorManager = null;

        // 遮光カーテン
        this.shadingCurtainManager = null;

        // 保温カーテン
        this.warmingCurtainManager = null;

        // 外側のカーテン
        this.outerCurtainManagar = null;

        // 内側のカーテン
        this.innerCurtainManager = null;

    }

    // ハウスを作成
    createHouse(scene){

        // ハウス登録用のグループ作成
        this.group = new Group()
        this.group.name = GROUP_NAME;

        // 列の計算
        this.minRowPosZ = - this.row * MODEL_SPACING / 2;
        this.maxRowPosZ = this.row * MODEL_SPACING / 2;

        // 行の計算
        this.minLinePosX = - this.line * HOUSE_SPACING / 2;
        this.maxLinePosX = this.line * HOUSE_SPACING / 2;

        // 屋根の作成
        this.createBaseRoof(scene);
        this.createEndRoof(scene);
        this.createBaseWall(scene);
        this.createTriangleWall(scene);
        this.createEndWall(scene);
        this.createFloor(scene);
        this.createShadingCurtain(scene);
        this.createWarmingCurtain(scene);
        this.createOuterCurtain(scene);
        this.createInnerCurtain(scene);
 
    }

    // 屋根の作成 
    createBaseRoof(scene){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_BASEROOF, (gltf) => {
        
            const baseModel = gltf.scene;
            this.animations = gltf.animations;
            baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

            // アニメーションが読み込まれた時
            if(this.animations){

                console.log("HouseManager: animations.length = " + this.animations.length);
                    
                // アニメーションクリップ毎の処理
                // 逆から回すときは減算していけばよい
                for(let i = 0; i < this.animations.length; i++){
                    let clip = this.animations[i];
            
                    // AnimationActionの作成
                    this.action = this.mixer.clipAction(clip);
                    this.action.setDuration(5);
            
                    // ループ設定
                    // this.action.setLoop(LoopPingPong);
            
                    // // アニメーションの最後のフレームでアニメーションを終了
                    this.action.clampWhenFinished = true;
            
                    this.action.time = 0;

                    // アニメーションの再生
                    this.action.play();                        
            
                }
            
                console.log("HouseManager: loaded AnimationFrame from " + PATH_BASEROOF);
            
            }

            // 登録用グループ
            const group = new Group();

            // lineで指定回数実行
            for(let j = 0; j < this.line; j++){

                // rowで指定回数実行
                for(let i = 0; i < this.row; i++){

                    // 左側
                    const modelLeft = baseModel.clone();
                    modelLeft.rotation.y = -0.5 * Math.PI;

                    // 座標設定
                    modelLeft.position.x = this.minLinePosX + j * HOUSE_SPACING + 50;
                    modelLeft.position.y = 100;
                    modelLeft.position.z = this.minRowPosZ + i * MODEL_SPACING + 50;

                    // 右側
                    const modelRight = baseModel.clone();
                    modelRight.rotation.y = 0.5 * Math.PI;

                    // 座標設定
                    modelRight.position.x = this.minLinePosX + j * HOUSE_SPACING + 150;
                    modelRight.position.y = 100;
                    modelRight.position.z = this.minRowPosZ + i * MODEL_SPACING;

                    // モデルをアニメーショングループに追加
                    this.animationGroup.add(modelLeft);
                    this.animationGroup.add(modelRight);

                    // 登録用グループに登録
                    group.add(modelLeft);
                    group.add(modelRight);

                }
            }

            // モデルをシーンに追加
            scene.add(group);

            // モデルをマネージャーの子要素に追加
            this.addChild(group);
            console.log("HouseManager: this HouseManager has following number of children " + this.children.length);


        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('HouseManager: failed on loading ' + PATH_BASEROOF);
        
        });
    }

    // 屋根の終わりの作成 
    createEndRoof(scene){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_ENDROOF, (gltf) => {
        
            const baseModel = gltf.scene;
            baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

            // 登録用グループ
            const group = new Group();

            // lineで指定回数実行
            for(let i = 0; i < this.line; i++){

                // 左側
                const modelLeft = baseModel.clone();
                modelLeft.rotation.y = -0.5 * Math.PI;

                // 座標設定
                modelLeft.position.x = this.minLinePosX + i * HOUSE_SPACING + 50;
                modelLeft.position.y = 100;
                modelLeft.position.z = this.minRowPosZ;

                // 右側
                const modelRight = baseModel.clone();
                modelRight.rotation.y = 0.5 * Math.PI;

                    // 座標設定
                modelRight.position.x = this.minLinePosX + i * HOUSE_SPACING + 150;
                modelRight.position.y = 100;
                modelRight.position.z = this.maxRowPosZ;

                // 登録用グループに登録
                group.add(modelLeft);
                group.add(modelRight);
                
            };

            // モデルをシーンに追加
            scene.add(group);

            // モデルをマネージャーの子要素に追加
            this.addChild(group);
            console.log("HouseManager: this HouseManager has following number of children " + this.children.length);


        }, undefined, () => {
        
            // モデル読み込み失敗時
            console.error('HouseManager: failed on loading ' + PATH_ENDROOF);
        
        });
    }

    // 壁の作成 
    createBaseWall(scene){

        // ローダの作成
        const loader = new GLTFLoader();
    
        // モデルの読み込み
        loader.load( PATH_BASEWALL, (gltf) => {
            
            const baseModel = gltf.scene;
            baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

            // 登録用グループ
            const group = new Group();
    
            // 側面の壁を作成 lineで指定回数実行
            for(let i = 0; i < this.row; i++){
    
                // 左側
                const modelLeft = baseModel.clone();
                modelLeft.rotation.y = -0.5 * Math.PI;

                // 座標設定
                modelLeft.position.x = this.minLinePosX;
                modelLeft.position.y = 0;
                modelLeft.position.z = this.minRowPosZ + i * MODEL_SPACING + 25;
    
                // 右側
                const modelRight = baseModel.clone();
                modelRight.rotation.y = 0.5 * Math.PI;
    
                // 座標設定
                modelRight.position.x = this.maxLinePosX;
                modelRight.position.y = 0;
                modelRight.position.z = this.minRowPosZ + i * MODEL_SPACING + 25;
    
                // 登録用グループに登録
                group.add(modelLeft);
                group.add(modelRight);    
            }

            // 繰り返す回数を設定
            const repeat = 4 * this.line; 

            // 前面・後面の壁を作成
            for(let i = 0; i < repeat; i++){
    

                // 背面
                const modelBack = baseModel.clone();    
                modelBack.rotation.y = 1 * Math.PI;

                // 座標設定
                modelBack.position.x = this.minLinePosX + i * MODEL_SPACING + 25;
                modelBack.position.y = 0;
                modelBack.position.z = this.minRowPosZ;
    
                // 後面
                const modelFront = baseModel.clone();
    
                // 座標設定
                modelFront.position.x = this.maxLinePosX - i * MODEL_SPACING - 25;
                modelFront.position.y = 0;
                modelFront.position.z = this.maxRowPosZ;

                // 背面を登録
                group.add(modelBack); 

                // 前面はスペースを開ける
                if(i === (repeat / 2) || i === (repeat / 2) - 1){

                    continue;

                }else{
                
                    // 登録用グループに登録
                    group.add(modelFront);

                }   
            }

    
            // モデルをシーンに追加
            scene.add(group);
    
            // モデルをマネージャーの子要素に追加
            this.addChild(group);
            console.log("HouseManager: this HouseManager has following number of children " + this.children.length);
    
        }, undefined, () => {
            
            // モデル読み込み失敗時
            console.error('HouseManager: failed on loading ' + PATH_BASEWALL);
            
        });
    }
   
    // 壁の作成 
    createTriangleWall(scene){

        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_TRIANGLEWALL, (gltf) => {
            
            const baseModel = gltf.scene;
            baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

            // 登録用グループ
            const group = new Group();
    
            // 前面の壁を作成 lineで指定回数実行
            for(let i = 0; i < this.line ; i++){
    
                // 前
                const modelFront = baseModel.clone();

                // 座標設定
                modelFront.position.x = this.minLinePosX + i * HOUSE_SPACING + 100;
                modelFront.position.y = 100;
                modelFront.position.z = this.maxRowPosZ;
    
                // 後
                const modelBack = baseModel.clone();
    
                // 座標設定
                modelBack.position.x = this.minLinePosX + i * HOUSE_SPACING + 100;
                modelBack.position.y = 100;
                modelBack.position.z = this.minRowPosZ;
    
    
                // 登録用グループに登録
                group.add(modelFront);
                group.add(modelBack);    
            }  
            
            // モデルをシーンに追加
            scene.add(group);
    
            // モデルをマネージャーの子要素に追加
            this.addChild(group);
            console.log("HouseManager: added triangle wall " + this.children.length);
    
        }, undefined, () => {
            
            // モデル読み込み失敗時
            console.error('HouseManager: failed on loading ' + PATH_TRIANGLEWALL);
            
        });
    }

    // 壁の終わりを作成
    createEndWall(scene){
        // ローダの作成
        const loader = new GLTFLoader();

        // モデルの読み込み
        loader.load( PATH_PILLAR, (gltf) => {
            
            const baseModel = gltf.scene;
            baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

            // 座標設定
            const targetCount = this.line * 4 / 2;
            baseModel.position.x = this.minLinePosX + targetCount * MODEL_SPACING - 50;
            baseModel.position.y = 0;
            baseModel.position.z = this.maxRowPosZ;

            scene.add(baseModel);
 
        }, undefined, () => {
            
            // モデル読み込み失敗時
            console.error('HouseManager: failed on loading ' + PATH_PILLAR);
            
        });
    }

    // ハウスの地面の作成
    createFloor(scene){
        
        const width = Math.abs(this.minLinePosX) + Math.abs(this.maxLinePosX);
        const height = Math.abs(this.minRowPosZ) + Math.abs(this.maxRowPosZ);

        // フロアマネージャの作成
        this.floorManager = new FloorManager()
        this.floorManager.createFloor(scene, width, height);


    }

    // 遮光カーテンの作成
    createShadingCurtain(scene){
        this.shadingCurtainManager = new ShadingCurtainManager(this.line, this.row, this.minRowPosZ, this.maxRowPosZ, this.minLinePosX, this.maxLinePosX);
        this.shadingCurtainManager.createShadingCurtain(scene);
        this.shadingCurtainManager.setShadingCurtainAnimation();
    }

    // 遮光カーテンのアニメーション
    updateShadingCurtainAnimation(){
        this.shadingCurtainManager.updateShadingCurtainAnimation();
    }

    // 保温カーテンの作成
    createWarmingCurtain(scene){
        this.warmingCurtainManager = new WarmingCurtainManager(this.line, this.row, this.minRowPosZ, this.maxRowPosZ, this.minLinePosX, this.maxLinePosX);
        this.warmingCurtainManager.createWarmingCurtain(scene);
        this.warmingCurtainManager.setWarmingCurtainAnimation();
    }

    // 保温カーテンのアニメーション
    updateWarmingCurtainAnimation(){
        
        this.warmingCurtainManager.updateWarmingCurtainAnimation();
    }

    // 外側のカーテンの作成
    createOuterCurtain(scene){
        this.outerCurtainManagar = new OuterCurtainManager(this.line, this.row, this.minRowPosZ, this.maxRowPosZ, this.minLinePosX, this.maxLinePosX);
        this.outerCurtainManagar.createCurtain(scene);
        this.outerCurtainManagar.setCurtainAnimation();
    }

    // 外側のカーテンのアニメーション
    updateOuterCurtainAnimation(){
        
        this.outerCurtainManagar.updateCurtainAnimation();
    }

    // 内側のカーテンの作成
    createInnerCurtain(scene){
        this.innerCurtainManager = new InnerCurtainManager(this.line, this.row, this.minRowPosZ, this.maxRowPosZ, this.minLinePosX, this.maxLinePosX);
        this.innerCurtainManager.createCurtain(scene);
        this.innerCurtainManager.setCurtainAnimation(scene);
    }

    // 内側のカーテンのアニメーション
    updateInnerCurtainAnimation(){

        this.innerCurtainManager.updateCurtainAnimation();
    }

    // アニメーションミキサーの実行
    updateHouseAnimation(){

        this.mixer.update(this.clock.getDelta());
        this.mixer.setTime(4.9);

    }

    // 天窓の状態を設定された値で固定する
    setRoofAnimation(degree){
        
        // 秒数の計算
        const time = 4.9 * (degree * 0.01);
        
        this.mixer.setTime(time);

    }

    // 内側のカーテンを設定された値に変形させる
    setInnerCurtainMorphingInfluences(degree){
        this.innerCurtainManager.setMophingInfluences(degree);
    }

    // 外側のカーテンを設定された値に変形させる
    setOuterCurtainMorphingInfluences(degree){
        this.outerCurtainManagar.setMophingInfluences(degree);
    }
    
    // 遮光カーテンを設定された値に変形させる
    setShadingCurtainMorphingInfluences(degree){
        this.shadingCurtainManager.setMophingInfluences(degree);
    }

    // 保温カーテンを設定された値に変形させる
    setWarmingCurtainMorphingInfluences(degree){
        this.warmingCurtainManager.setMophingInfluences(degree);
    }
}