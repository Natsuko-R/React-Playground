import { PerspectiveCamera , Vector3} from "three";

// カメラ設定値
const CAMERA_DISTANCE = 450;

const CAMERA_FOV = 45;                  // 視覚野
const CAMERA_NEAR_PLANE = 10;            // クリップ前面
const CAMERA_FAR_PLANE = 1500;          // クリップ背面

// カメラ作成関数
// 第一引数：キャンバスの幅　第二引数：キャンバスの高さ
export function createPerspectiveCamera(aspect){
    
    // カメラの作成
    const camera = new PerspectiveCamera(CAMERA_FOV, aspect, CAMERA_NEAR_PLANE, CAMERA_FAR_PLANE);
    camera.position.set(CAMERA_DISTANCE, CAMERA_DISTANCE / 3, CAMERA_DISTANCE); 
    camera.lookAt(new Vector3(0, 0, 0));

    return camera;
}