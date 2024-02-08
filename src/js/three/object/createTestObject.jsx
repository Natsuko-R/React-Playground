import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// モデルのパス
const PATH_WALL_1x2 = '/model/gltf/tomato.glb';
const PATH_LED = '/model/gltf/led.glb';
const PATH_HEATPUMP = '/model/gltf/heatpump.glb';
const PATH_CAMERA = '/model/gltf/camera.glb';
const PATH_FAN = '/model/gltf/greenhouse/basewall.glb';
//const PATH_FAN = '/model/gltf/greenhouse/pillar.glb';

// モデルのスケール
const MODEL_SCALE = 30;                // 5.0
const MODEL_SCALE_HEIGHT = 1.0;

// 操作用の名前
const MODEL_NAME_1x2 = 'wall1x2';

export function createTestObject(scene){

   // ローダの作成
   const loader = new GLTFLoader();

   // エッジパーツを指定された回数作成
   loader.load( PATH_WALL_1x2, (gltf) => {
   //loader.load( PATH_WALL_1x2, (gltf) => {

        console.log("loaded TestObject")

       // モデルが読み込みされた際のコールバック関数
       const baseModel = gltf.scene;
       baseModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
       baseModel.rotation.y = 0.5 * Math.PI;
       baseModel.position.set(0, 0, 0);

       // 登録用のGroup作成
       const wallGroup = new Group();

       // モデルをクローン
       const wallModel = baseModel.clone();

       // 操作用の名前設定
       wallModel.name = MODEL_NAME_1x2;

       // 登録用グループに登録
       wallGroup.add(wallModel);
   
       // groupを登録
       scene.add(wallGroup);
           
   },undefined, (error) => {

       // モデル読み込み失敗時
       console.error('failed to load .gltf model:', error);

   });
}