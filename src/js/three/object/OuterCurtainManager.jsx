import { Mesh, MeshLambertMaterial, BoxGeometry, Group, Float32BufferAttribute } from "three";
import { ObjectManager } from "./ObjectManager";

// ハウスオブジェクトの表示単位
const MODEL_SPACING = 50.0;

// カーテン
const BOX_HEIGHT = 0.5;
const BOX_WIDTH = 50.0;
const BOX_DEPTH = 1.0;

const BOX_COLOR = {color: 0xffffff};
const CURTAIN_SPACING = 2;

const ANIMATION_VALUE = 0.0025;
const CURTAIN_OPACITY = 0.50;

export class OuterCurtainManager extends ObjectManager{

    constructor(line, row, minRowPosZ, maxRowPosZ, minLinePosX, maxLinePosX){
        super();

        // ハウスが横何列あるか
        this.line = line;

                // ハウスの奥行が何列あるか
        this.row = row;
        
        // ハウスの範囲
        this.minRowPosZ = minRowPosZ;
        this.maxRowPosZ = maxRowPosZ;
        this.minLinePosX = minLinePosX;
        this.maxLinePosX = maxLinePosX;

        this.curtainObjects = [];
        this.curtainGeometries = [];
        this.curtainTargetPositions = [];
        this.curtainAnimationWeight = 0;
    }

    // カーテンの作成
    createCurtain(scene){

        // ジオメトリの作成
        const geometry = new BoxGeometry(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH, 1, 1);
        geometry.morphAttributes.position = [];

        // マテリアルの作成
        const material = new MeshLambertMaterial(BOX_COLOR);
        
        // 透明度の設定
        material.transparent = true;
        material.alphaToCoverage = true;
        material.opacity = CURTAIN_OPACITY;

        // メッシュの作成
        const mesh = new Mesh(geometry, material);

        // 登録用グループ
        const group = new Group();

        // 側面の壁を作成 lineで指定回数実行
        for(let i = 0; i < this.row; i++){
    
            // 左側
            const modelLeft = mesh.clone();
            this.curtainObjects.push(modelLeft);
            
            // ジオメトリを配列に格納
            this.curtainGeometries.push(modelLeft.geometry);

            modelLeft.rotation.y = -0.5 * Math.PI;

            // 座標設定
            modelLeft.position.x = this.minLinePosX - CURTAIN_SPACING;
            modelLeft.position.y = 100;
            modelLeft.position.z = this.minRowPosZ + i * MODEL_SPACING + 25;
    
            // 右側
            const modelRight = mesh.clone();
            this.curtainObjects.push(modelRight);
                        
            // ジオメトリを配列に格納
            this.curtainGeometries.push(modelRight.geometry);

            modelRight.rotation.y = 0.5 * Math.PI;
    
            // 座標設定
            modelRight.position.x = this.maxLinePosX + CURTAIN_SPACING;
            modelRight.position.y = 100;
            modelRight.position.z = this.minRowPosZ + i * MODEL_SPACING + 25;
    
            // 登録用グループに登録
            group.add(modelLeft);
            group.add(modelRight);
        }

        // // 繰り返す回数を設定
        // const repeat = 4 * this.line; 

        // // 前面・後面の壁を作成
        // for(let i = 0; i < repeat; i++){
    
        //     // 背面
        //     const modelBack = mesh.clone();
        //     this.curtainObjects.push(modelBack);
                                    
        //     // ジオメトリを配列に格納
        //     this.curtainGeometries.push(modelBack.geometry);

        //     modelBack.rotation.y = 1 * Math.PI;

        //     // 座標設定
        //     modelBack.position.x = this.minLinePosX + i * MODEL_SPACING + 25;
        //     modelBack.position.y = 100;
        //     modelBack.position.z = this.minRowPosZ - CURTAIN_SPACING;
    
        //     // 前面
        //     const modelFront = mesh.clone();
        //     this.curtainObjects.push(modelFront);

        //     // ジオメトリを配列に格納
        //     this.curtainGeometries.push(modelFront.geometry);
    
        //     // 座標設定
        //     modelFront.position.x = this.maxLinePosX - i * MODEL_SPACING - 25;
        //     modelFront.position.y = 100;
        //     modelFront.position.z = this.maxRowPosZ + CURTAIN_SPACING;

        //     // 背面を登録
        //     group.add(modelBack); 

        //     // 前面はスペースを開ける
        //     if(i === (repeat / 2) || i === (repeat / 2) - 1){

        //         continue;

        //     }else{
                
        //         // 登録用グループに登録
        //         group.add(modelFront);

        //     }   
        // }

        // モデルをシーンに追加
        scene.add(group);
    
            // モデルをマネージャーの子要素に追加
        this.addChild(group);
        console.log("CurtainManager: this HouseManager has following number of children " + this.children.length);

    }

    // ジオメトリのモーフターゲットを作成
    setCurtainAnimation(){

        // カーテンの数だけ実行
        for(let i = 0; i < this.curtainGeometries.length; i++){
            
            // 変形後の座標
            const targetAttribute = [];

            // 頂点座標を取得
            const positionAttribute = this.curtainGeometries[i].attributes.position;

            // 頂点ごとに実行
            for( let j = 0; j < positionAttribute.count; j++){

                const x = positionAttribute.getX(j);
                let y = positionAttribute.getY(j);
                const z = positionAttribute.getZ(j);

                // 底面の場合
                if(y === -(BOX_HEIGHT / 2)){
                    y = -100;
                }

                targetAttribute.push(x, y, z);

            }

            // ジオメトリのモーフターゲットに追加
            this.curtainGeometries[i].morphAttributes.position[0] = new Float32BufferAttribute( targetAttribute, 3 );

            // 前面だけ開く
            if(this.curtainObjects[i].rotation.y === 0){

                this.curtainObjects[i].morphTargetInfluences[0] = 0;

            }else{

                this.curtainObjects[i].morphTargetInfluences[0] = 0;

            }
            
        }

    }

    // カーテンのモーフィングアニメーション
    updateCurtainAnimation(){

        // カーテンオブジェクト配列それぞれに処理を行う
        for(let i = 0; i < this.curtainObjects.length; i++){
    
            // 閉動作：1になった時減算に変更する
            if(this.curtainObjects[i].morphTargetInfluences[0] >= 1){

                this.curtainObjects[i].morphTargetInfluences[0] = 1;
                this.curtainAnimationWeight = -ANIMATION_VALUE;
                
            } // 開動作：0になったとき加算に変更する
            else if(this.curtainObjects[i].morphTargetInfluences[0] <= 0){

                this.curtainObjects[i].morphTargetInfluences[0] = 0;
                this.curtainAnimationWeight = ANIMATION_VALUE;

            }

            // 呼び出されるたびにウェイト分変動させる
            this.curtainObjects[i].morphTargetInfluences[0] += this.curtainAnimationWeight;

        }
    }

    // 前側のカーテンのモーフィングアニメーション
    updateFrontCurtainAnimation(){

        // カーテンオブジェクト配列それぞれに処理を行う
        for(let i = 0; i < this.curtainObjects.length; i++){

            if(this.curtainObjects[i].rotation.y === Math.PI || this.curtainObjects[i].rotation.y === (-0.5 * Math.PI) || this.curtainObjects[i].rotation.y === (0.5 * Math.PI)){
                continue;
            }else{

                // 閉動作：1になった時減算に変更する
                if(this.curtainObjects[i].morphTargetInfluences[0] >= 1){
    
                    this.curtainObjects[i].morphTargetInfluences[0] = 1;
                    this.curtainAnimationWeight = -ANIMATION_VALUE;
                 
                // 開動作：0になったとき加算に変更する
                }else if(this.curtainObjects[i].morphTargetInfluences[0] <= 0){
    
                    this.curtainObjects[i].morphTargetInfluences[0] = 0;
                    this.curtainAnimationWeight = ANIMATION_VALUE;
    
                }
    
            // 呼び出されるたびにウェイト分変動させる
            this.curtainObjects[i].morphTargetInfluences[0] += this.curtainAnimationWeight;;
            }
        }
    }

    // 背面のカーテンのモーフィングアニメーション
    updateBackCurtainAnimation(){

        // カーテンオブジェクト配列それぞれに処理を行う
        for(let i = 0; i < this.curtainObjects.length; i++){

            if(this.curtainObjects[i].rotation.y === 0 || this.curtainObjects[i].rotation.y === (-0.5 * Math.PI) || this.curtainObjects[i].rotation.y === (0.5 * Math.PI)){
                continue;
            }else{

                 // 閉動作：1になった時減算に変更する
                if(this.curtainObjects[i].morphTargetInfluences[0] >= 1){
    
                    this.curtainObjects[i].morphTargetInfluences[0] = 1;
                    this.curtainAnimationWeight = -ANIMATION_VALUE;

                // 開動作：0になったとき加算に変更する    
                }else if(this.curtainObjects[i].morphTargetInfluences[0] <= 0){
    
                    this.curtainObjects[i].morphTargetInfluences[0] = 0;
                    this.curtainAnimationWeight = ANIMATION_VALUE;
    
                }
    
                // 呼び出されるたびにウェイト分変動させる
                this.curtainObjects[i].morphTargetInfluences[0] += this.curtainAnimationWeight;;
            }
    
        }
    }

    // 左側のカーテンのモーフィングアニメーション
    updateLeftCurtainAnimation(){

        // カーテンオブジェクト配列それぞれに処理を行う
        for(let i = 0; i < this.curtainObjects.length; i++){

            if(this.curtainObjects[i].rotation.y === 0 || this.curtainObjects[i].rotation.y === Math.PI ||
               this.curtainObjects[i].rotation.y === (0.5 * Math.PI) || this.curtainObjects[i].rotation.y === -Math.PI){
                    continue;
            }else{

        
                // 閉動作：1になった時減算に変更する
                if(this.curtainObjects[i].morphTargetInfluences[0] >= 1){
    
                    this.curtainObjects[i].morphTargetInfluences[0] = 1;
                    this.curtainAnimationWeight = -ANIMATION_VALUE;
                
                // 開動作：0になったとき加算に変更する
                }else if(this.curtainObjects[i].morphTargetInfluences[0] <= 0){
    
                    this.curtainObjects[i].morphTargetInfluences[0] = 0;
                    this.curtainAnimationWeight = ANIMATION_VALUE;
    
                }
    
                // 呼び出されるたびにウェイト分変動させる
                this.curtainObjects[i].morphTargetInfluences[0] += this.curtainAnimationWeight;;
            }
        }
    }

    // 右側のモーフィングアニメーション
    updateRightCurtainAnimation(){

        // カーテンオブジェクト配列それぞれに処理を行う
        for(let i = 0; i < this.curtainObjects.length; i++){
        
            if(this.curtainObjects[i].rotation.y === 0 || this.curtainObjects[i].rotation.y === -Math.PI ||
               this.curtainObjects[i].rotation.y === -(0.5 * Math.PI) || this.curtainObjects[i].rotation.y === Math.PI){
                continue;
            }else{
        
                // 閉動作：1になった時減算に変更する
                if(this.curtainObjects[i].morphTargetInfluences[0] >= 1){
            
                    this.curtainObjects[i].morphTargetInfluences[0] = 1;
                    this.curtainAnimationWeight = -ANIMATION_VALUE;

                 // 開動作：0になったとき加算に変更する            
                }else if(this.curtainObjects[i].morphTargetInfluences[0] <= 0){
            
                    this.curtainObjects[i].morphTargetInfluences[0] = 0;
                    this.curtainAnimationWeight = ANIMATION_VALUE;
            
                }
            
                // 呼び出されるたびにウェイト分変動させる
                this.curtainObjects[i].morphTargetInfluences[0] += this.curtainAnimationWeight;;
            }
            
        }
    }

    // 設定した値にモーフィングさせる
    setMophingInfluences(degree){
    
        // オブジェクトごとに値を設定する
        for(let i = 0; i < this.curtainObjects.length; i++){
            this.curtainObjects[i].morphTargetInfluences[0] = degree / 100;
        }
    }
}