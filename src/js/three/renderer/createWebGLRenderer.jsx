import { WebGLRenderer } from "three";

// レンダラー作成関数
// 第一引数：キャンバスの幅　第二引数：キャンバスの高さ
// 戻り値：THREE.WebGLRenderer

let renderer = null;

export function createWebGLRenderer(width, height){
    // レンダラーの作成
    renderer = new WebGLRenderer({
        canvas: document.querySelector('#glcanvas'),
      });
      renderer.setSize(width, height);

      // 解像度を固定
      renderer.setPixelRatio(1);
      
      // 背景を空色に
      renderer.setClearColor(0x87ceeb, 1);

      return renderer;
}

export function destructWebGLRenderer(){

  // レンダラーの停止
  renderer.dispose();
  renderer = null;

}