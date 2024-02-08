import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// モデルのパス
const PATH_SIGNBOARD = '/model/gltf/signboard.glb';

// モデルのスケール
const MODEL_SCALE = 30.0;                // 5.0
const MODEL_SCALE_HEIGHT = 1.0;

// 操作用の名前
const MODEL_NAME_1x2 = 'wall1x2';

export function createSignboard(scene){

   // ローダの作成
   const loader = new GLTFLoader();

   // エッジパーツを指定された回数作成
   loader.load( PATH_SIGNBOARD, (gltf) => {
   //loader.load( PATH_WALL_1x2, (gltf) => {

       // モデルが読み込みされた際のコールバック関数
       const baseModel = gltf.scene;
       baseModel.scale.set(MODEL_SCALE, MODEL_SCALE * MODEL_SCALE_HEIGHT, MODEL_SCALE);
       baseModel.rotation.y =  -0.5 * Math.PI;
       baseModel.position.set(300.0, 0.0, 220.0);
   
       // groupを登録
       scene.add(baseModel);
           
   },undefined, (error) => {

       // モデル読み込み失敗時
       console.error('failed to load .gltf model:', error);

   });
}