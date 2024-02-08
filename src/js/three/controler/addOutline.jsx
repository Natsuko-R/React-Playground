import { Vector2 } from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

// アウトラインパスの設定
const EDGE_STRENGTH = 10;
const EDGE_THICKNESS = 4;
const EDGE_COLOR = '#ff0000';

// 後ラインパス
let outlinePass;

export function createEffectComposer(renderer, scene, camera){
    // エフェクトコンポーザーの作成
    const composer = new EffectComposer( renderer );

    // レンダーパスの作成
    const renderPass = new RenderPass( scene, camera);
    composer.addPass( renderPass );

    // アウトラインパスの作成
    const canvas = document.querySelector('#glcanvas');
    outlinePass = new OutlinePass( new Vector2(canvas.width, canvas.height), scene, camera);
    outlinePass.edgeStrength = EDGE_STRENGTH;
    outlinePass.edgeThickness = EDGE_THICKNESS;
    outlinePass.visibleEdgeColor.set(EDGE_COLOR);
    outlinePass.hiddenEdgeColor.set(EDGE_COLOR);
    
    // コンポーザーにアウトラインパスを追加
    composer.addPass( outlinePass );

    return composer;
}

// 対象を縁取りさせる
export function addOutline(objects){

    // objectsで渡されたobject3D配列をアウトラインパスの対象にする
    outlinePass.selectedObjects = [objects];
}

// 縁取りを削除する
export function removeOutline(){

    // アウトラインパスの中身を削除する
    outlinePass.selectedObjects = [];

}