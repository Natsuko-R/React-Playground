import { Group } from "three";

export class SpriteManager{

    constructor(scene){
        
        // 表示対象のscene
        this.scene = scene;

        // ベースとなるスプライトオブジェクト
        this.spriteObject = null;

        // スプライトのマテリアル
        this.material = null;

        // 管理するスプライトの配列
        this.spriteArray = [];

    }

    // ベースとなるスプライトを作成する
    initSprite(){}

    // スプライトを大量に作成する
    createSprite(){}

    // スプライトを移動させる
    updateSprite(){}

    // スプライトを削除する
    terminateSprite(){}
}