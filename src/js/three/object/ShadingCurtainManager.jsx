
import { MeshLambertMaterial, Group, Mesh, BoxGeometry, Float32BufferAttribute } from "three";
import { ObjectManager } from "./ObjectManager";

// モデルのスケール
const MODEL_SPACING = 50.0;

// カーテン
const BOX_HEIGHT = 0.5;
const BOX_WIDTH = 12.5;
const BOX_DEPTH = 50.0;
const CURTAIN_OPACITY = 0.75;

const PLANE_COLOR = {color: 0xffffff};

const ANIMATION_VALUE = 0.0025;

export class ShadingCurtainManager extends ObjectManager{

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

                // カーテン
        this.leftCurtainObjects = [];
        this.leftCurtainGeometries = [];
        this.leftCurtainTargetPositions = [];
        this.leftCurtainAnimationWeight = 0;

                // カーテン
        this.rightCurtainObjects = [];
        this.rightCurtainGeometries = [];
        this.rightCurtainTargetPositions = [];
        this.rightCurtainAnimationWeight = 0;
    }

    // カーテンを作成
    createShadingCurtain(scene){

        // ジオメトリの作成
        //const geometry = new PlaneGeometry(PLANE_WIDTH, PLANE_HEIGHT);
        const geometryLeft = new BoxGeometry(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH, 1, 1, 1);
        geometryLeft.morphAttributes.position = [];
        const geometryRight = new BoxGeometry(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH, 1, 1, 1);
        geometryRight.morphAttributes.position = [];
        const material = new MeshLambertMaterial(PLANE_COLOR);

        // 透明度の設定
        material.transparent = true;
        material.alphaToCoverage = true;
        material.opacity = CURTAIN_OPACITY;     
        
        // メッシュの作成
        const meshLeft = new Mesh(geometryLeft, material);
        const meshRight = new Mesh(geometryRight, material);

        // メッシュの設定
        meshLeft.position.y = 100;
        meshRight.position.y = 100;
    
    
        // 登録用グループの作成
        const group = new Group();

        // 繰り返す回数を設定
        for(let i = 0; i < this.line; i++){
        
            for(let j = 0; j < this.row; j++){

                // 左側
                const modelLeft = meshLeft.clone();
                modelLeft.position.x = this.minLinePosX + i * 4 * MODEL_SPACING  + 6.25;
                modelLeft.position.z = this.minRowPosZ + j * MODEL_SPACING + 25.0;
                
                // モーフィング用配列に追加
                this.leftCurtainObjects.push(modelLeft);
                this.leftCurtainGeometries.push(modelLeft.geometry);
            
                // 登録用グループに追加
                group.add(modelLeft);

                // 右側
                const modelRight = meshRight.clone();
                modelRight.position.x = this.minLinePosX + (i + 1) * 4 * MODEL_SPACING - 6.25;
                modelRight.position.z = this.minRowPosZ + j * MODEL_SPACING + 25.0;

                // モーフィング用配列に追加
                this.rightCurtainObjects.push(modelRight);
                this.rightCurtainGeometries.push(modelRight.geometry);

                // 登録用グループに追加
                group.add(modelRight);


            }

        }

        scene.add(group);
        this.addChild(group);
        console.log("ShadingCurtainManager: this ShadingCurtainManager has following number of children " + this.children.length)
    }

    setShadingCurtainAnimation(){

        // 左側カーテンの数だけ実行
        for(let i = 0; i < this.leftCurtainGeometries.length; i++){

            // 変形後の座標
            const targetAttribute = [];

            // 頂点座標を取得
            const positionAttribute = this.leftCurtainGeometries[i].attributes.position;

            // 頂点ごとに実行
            for( let j = 0; j < positionAttribute.count; j++){

                let x = positionAttribute.getX(j);
                const y = positionAttribute.getY(j);
                const z = positionAttribute.getZ(j);

                // 右側面の場合
                if(x === (BOX_WIDTH / 2)){
                    x = 100 - (BOX_WIDTH / 2);
                }

                targetAttribute.push(x, y, z);

            }

            // ジオメトリのモーフターゲットに追加
            this.leftCurtainGeometries[i].morphAttributes.position[0] = new Float32BufferAttribute( targetAttribute, 3 );

            // インフルエンスを初期化
            this.leftCurtainObjects[i].morphTargetInfluences[0] = 0;
        }

                // 左側カーテンの数だけ実行
        for(let i = 0; i < this.leftCurtainGeometries.length; i++){

            // 変形後の座標
            const targetAttribute = [];

            // 頂点座標を取得
            const positionAttribute = this.leftCurtainGeometries[i].attributes.position;

            // 頂点ごとに実行
            for( let j = 0; j < positionAttribute.count; j++){

                let x = positionAttribute.getX(j);
                const y = positionAttribute.getY(j);
                const z = positionAttribute.getZ(j);

                // 右側面の場合
                if(x === (BOX_WIDTH / 2)){
                    x = 100 - (BOX_WIDTH / 2);
                }

                targetAttribute.push(x, y, z);

            }

            // ジオメトリのモーフターゲットに追加
            this.leftCurtainGeometries[i].morphAttributes.position[0] = new Float32BufferAttribute( targetAttribute, 3 );

            // インフルエンスを初期化
            this.leftCurtainObjects[i].morphTargetInfluences[0] = 0;
        }

        // 右側カーテンの数だけ実行
        for(let i = 0; i < this.rightCurtainGeometries.length; i++){

            // 変形後の座標
            const targetAttribute = [];

            // 頂点座標を取得
            const positionAttribute = this.rightCurtainGeometries[i].attributes.position;

            // 頂点ごとに実行
            for( let j = 0; j < positionAttribute.count; j++){

                let x = positionAttribute.getX(j);
                const y = positionAttribute.getY(j);
                const z = positionAttribute.getZ(j);

                // 左側面の場合
                if(x === -(BOX_WIDTH / 2)){
                    x = -100 + (BOX_WIDTH / 2);
                }

                targetAttribute.push(x, y, z);

            }

            // ジオメトリのモーフターゲットに追加
            this.rightCurtainGeometries[i].morphAttributes.position[0] = new Float32BufferAttribute( targetAttribute, 3 );

            // インフルエンスを初期化
            this.rightCurtainObjects[i].morphTargetInfluences[0] = 0;
        }

    }

    // 遮光カーテンのモーフィングアニメーション
    updateShadingCurtainAnimation(){

        // 左のカーテンオブジェクト配列のそれぞれに処理を行う
        for(let i = 0; i < this.leftCurtainObjects.length; i++){
            
            // 閉動作
            if(this.leftCurtainObjects[i].morphTargetInfluences[0] >= 1){
                this.leftCurtainObjects[i].morphTargetInfluences[0] = 1;
                this.leftCurtainAnimationWeight = -ANIMATION_VALUE;
            }// 開動作
            else if(this.leftCurtainObjects[i].morphTargetInfluences[0] <= 0){
                this.leftCurtainObjects[i].morphTargetInfluences[0] = 0;
                this.leftCurtainAnimationWeight = ANIMATION_VALUE;
            }

            // 呼び出されるたびにウェイト分変動させる
            this.leftCurtainObjects[i].morphTargetInfluences[0] += this.leftCurtainAnimationWeight;

        }

        // 右のカーテンオブジェクト配列のそれぞれに処理を行う
        for(let i = 0; i < this.rightCurtainObjects.length; i++){
            
            // 閉動作
            if(this.rightCurtainObjects[i].morphTargetInfluences[0] >= 1){
                this.rightCurtainObjects[i].morphTargetInfluences[0] = 1;
                this.rightCurtainAnimationWeight = -ANIMATION_VALUE;
            }// 開動作
            else if(this.rightCurtainObjects[i].morphTargetInfluences[0] <= 0){
                this.rightCurtainObjects[i].morphTargetInfluences[0] = 0;
                this.rightCurtainAnimationWeight = ANIMATION_VALUE;
            }

            // 呼び出されるたびにウェイト分変動させる
            this.rightCurtainObjects[i].morphTargetInfluences[0] += this.rightCurtainAnimationWeight;

        }        

    }

    // 設定した値にモーフィングさせる
    setMophingInfluences(degree){
    
        // 右：オブジェクトごとに値を設定する
        for(let i = 0; i < this.rightCurtainObjects.length; i++){
            this.rightCurtainObjects[i].morphTargetInfluences[0] = degree / 100;
        }

        // 左：オブジェクトごとに値を設定する
        for(let i = 0; i < this.leftCurtainObjects.length; i++){
            this.leftCurtainObjects[i].morphTargetInfluences[0] = degree / 100;
        }

    }
}