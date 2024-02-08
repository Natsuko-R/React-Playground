import { TextureLoader, PlaneGeometry, MeshStandardMaterial, Mesh } from "three";

import { ObjectManager } from "./ObjectManager";
import ObjectData from "./ObjectData";

// 画像のパス
const PATH_TEXTURE = '/texture/dirt.png';

// 床
const FLOOR_SEGMENT = 1;             

// モデル名
const MODEL_NAME = "floor";

export class FloorManager extends ObjectManager{

    // 土を配置
    createFloor(scene, width, height){

        // ローダの作成
        const loader = new TextureLoader();

        // テクスチャ・レンダーターゲットの作成
        const texture = loader.load(PATH_TEXTURE, () =>{

            // テクスチャ読み込み成功時
            console.log("FloorManager: succeeded on loading " + PATH_TEXTURE);

        }, undefined, () => {

            // テクスチャ読み込み失敗時
            console.error('FloorManager: failed on loading' + PATH_TEXTURE);

        });

        // ジオメトリの作成
        const geometry = new PlaneGeometry(width, height, FLOOR_SEGMENT, FLOOR_SEGMENT);
        const material = new MeshStandardMaterial({ map : texture});

        // メッシュの作成
        const model = new Mesh(geometry, material);
        model.position.set(0, -0.05, 0);

        // 名前設定
        model.traverse( (child) => {
            child.name = MODEL_NAME;
        });

        // 現在x軸上に起立しているためX軸に沿って90度回転
        model.rotation.x = -0.5 * Math.PI;

        // オブジェクトデータを設定
        const objectData = new ObjectData();
        objectData.setParentObject(model);
        objectData.objId = "floor";
        objectData.attribute = "bg";

        // モデルのユーザーデータにオブジェクトデータを設定
        model.userData = objectData;

        // シーンに登録
        scene.add(model);

        // モデルをマネージャの子要素に追加
        this.addChild(model);

        console.log("FloorManager: this FloorManager has following number of children " + this.children.length);
    }
}