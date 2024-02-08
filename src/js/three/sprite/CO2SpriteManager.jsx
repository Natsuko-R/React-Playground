import { Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { SpriteManager } from "./SpriteManager";
import { SpriteData } from "./SpriteData";

const TEXTURE_PATH = "/texture/co2blue.png";
const SPRITE_SCALE = 30.0;

// 何フレームで消滅するか（60f = 1sec）
const TIME_COUNT = 750;

// 何フレームに一回発生するか（60f = 1sec）
const FRAME_COUNT_WEIGHT = 55;

const MOVE_VALUE = 0.2;

export class CO2SpriteManager extends SpriteManager{
    
    constructor(scene){
        super(scene);

        // 稼働フラグ
        this.isEmitting = null;

        // 原点座標を保持する配列
        this.originPositions = [];

        this.frameCount = 1;
    }

    // スプライトを初期化(稼働フラグ)
    initSprite(isEmitting){

        // 稼働フラグの設定
        this.isEmitting = isEmitting;

        // マテリアルの作成
        this.material = new SpriteMaterial({
            map: new TextureLoader().load(TEXTURE_PATH)
        })

        this.material.opacity = 0.8;

        // スプライトオブジェクトの作成
        this.spriteObject = new Sprite(this.material);
        
        // 位置を原点座標に設定
        //this.spriteObject.position.set(this.originPosition.x, this.originPosition.y, this.originPosition.z);

        // スプライトデータの設定
        const spriteData = new SpriteData();
        spriteData.timeCount = TIME_COUNT;
        this.spriteObject.userData = spriteData;

        // 大きさを変更
        this.spriteObject.scale.set(SPRITE_SCALE, SPRITE_SCALE, SPRITE_SCALE);
    }
    
    // 原点座標を設定（vector3）
    setOriginPos(pos){

        // 原点座標を配列に登録
        const origin = new Vector3(pos.x, pos.y, pos.z);
        this.originPositions.push(origin);

    }



    // スプライトを発生・移動させる
    emitSprite(){

        if(this.isEmitting === true){

            // 登録された原点座標の数だけスプライトの発生判定をする
            for(let i = 0; i < this.originPositions.length; i++){

                //  スプライトを作成する
                if(this.frameCount % FRAME_COUNT_WEIGHT === 0 ){
            
                    // 登録用のオブジェクト作成
                    const sprite = this.spriteObject.clone();
                
                    // 個別の移動量を設定
                    if(this.originPositions[i].z > 0){
                        sprite.userData.moveValue.z = -MOVE_VALUE;
                    }else{
                        sprite.userData.moveValue.z = MOVE_VALUE;
                    }

                    // 原点座標を設定
                    sprite.position.set(this.originPositions[i].x, this.originPositions[i].y, this.originPositions[i].z);
            
                    // 時間管理用の配列に格納
                    this.spriteArray.push(sprite);

                    // シーンに登録
                    this.scene.add(sprite);
                }

                // フレームカウントを進める
                this.frameCount++;

                // フレームカウントが360になったとき、1に戻す
                if(this.frameCount === 360){
                    this.frameCount = 1;
                }
            }
        }

        // スプライトを移動させる
        for(let i = 0; i < this.spriteArray.length; i++){
            
            // 決まった移動量分移動させる
            this.spriteArray[i].position.z += this.spriteArray[i].userData.moveValue.z;
            
            // タイムカウントを下げる
            this.spriteArray[i].userData.timeCount -= 1;

            // タイムカウントが残り50フレーム以下の場合
            if(this.spriteArray[i].userData.timeCount <= 50){

                // サイズを小さくする
                this.spriteArray[i].scale.x *= 0.95;
                this.spriteArray[i].scale.y *= 0.95;
                this.spriteArray[i].scale.z *= 0.95;

            }

            // タイムカウントが0になった場合
            if(this.spriteArray[i].userData.timeCount === 0){

                // 削除
                this.terminateSprite(this.spriteArray[i], i);
    
            }
        }
    }

    // スプライトを削除する
    terminateSprite(spriteObject, index){
        
        // シーンと配列から削除
        this.scene.remove(spriteObject);
        this.spriteArray[index] = null;
        this.spriteArray.splice(index, 1);

    }

    // 運転フラグを変更する
    setOperateFlag(flag){

        this.isEmitting = flag;

    }
}