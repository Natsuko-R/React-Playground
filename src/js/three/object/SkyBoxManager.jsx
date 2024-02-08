import { WebGLCubeRenderTarget, TextureLoader } from "three";

import { ObjectManager } from "./ObjectManager";

// 画像のパス
const PATH_TEXTURE = '/texture/sky1.jpg';


export class SkyBoxManager extends ObjectManager{

    // スカイボックスを配置
    createSkyBox(scene, renderer){

        // ローダの作成
        const loader = new TextureLoader();

        // テクスチャ・レンダーターゲットの作成
        const texture = loader.load(PATH_TEXTURE, () =>{

            // レンダーターゲットをテクスチャをもとに作成
            const target = new WebGLCubeRenderTarget(texture.image.height);
            target.fromEquirectangularTexture(renderer, texture);

            console.log("SkyBoxManager: succeeded on loading " + PATH_TEXTURE);

            // シーンのバックグラウンドに追加
            scene.background = target.texture;
            // 風景をマネージャーの子要素に追加
            this.addChild(target);
            
            console.log("SkyBoxManager: this SkyBoxManager has following number of children " + this.children.length);  
        }, undefined, () => {

            // テクスチャ読み込み失敗時
            console.error('SkyBoxManager: failed on loading' + PATH_TEXTURE);

        });
    }
}