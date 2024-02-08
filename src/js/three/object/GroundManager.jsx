import { TextureLoader, CircleGeometry, MeshStandardMaterial, Mesh } from "three";

import { ObjectManager } from "./ObjectManager";
import ObjectData from "./ObjectData";

// 画像のパス
const PATH_TEXTURE = '/texture/ground.jpg';

// 床
const FLOOR_SEGMENT = 24;       // 床の分割
const FLOOR_RADIUS = 1000;       // 床の半径              

// モデル名
const MODEL_NAME = "ground";

export class GroundManager extends ObjectManager{

    // 地面を配置
    createGround(scene){

        // ローダの作成
        const loader = new TextureLoader();

        // テクスチャ・レンダーターゲットの作成
        const texture = loader.load(PATH_TEXTURE, () =>{

            // テクスチャ読み込み成功時
            console.log("GroundManager: succeeded on loading " + PATH_TEXTURE);

        }, undefined, () => {

            // テクスチャ読み込み失敗時
            console.error('GroundManager: failed on loading' + PATH_TEXTURE);

        });

        // ジオメトリの作成
        const geometry = new CircleGeometry(FLOOR_RADIUS, FLOOR_SEGMENT)
        const material = new MeshStandardMaterial({ map : texture});

        // メッシュの作成
        const model = new Mesh(geometry, material);
        model.position.set(0, -0.1, 0);

        // 名前設定
        model.traverse( (child) => {
            child.name = MODEL_NAME;
        });

        // 現在x軸上に起立しているためX軸に沿って90度回転
        model.rotation.x = -0.5 * Math.PI;

        // オブジェクトデータを設定
        const objectData = new ObjectData();
        objectData.setParentObject(model);
        objectData.objId = "ground";
        objectData.attribute = "bg";

        // モデルのユーザーデータにオブジェクトデータを設定
        model.userData = objectData;

        // シーンに登録
        scene.add(model);

        // モデルをマネージャの子要素に追加
        this.addChild(model);

        console.log("GroundManager: this GroundManager has following number of children " + this.children.length);
    }
}