import { Raycaster, Vector2 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { addOutline, removeOutline } from './addOutline';

// 遠ざかれる最大距離
const MAX_DISTANCE = 700;

// 通常動作のコントローラを作成する
export function createNormalControler(camera){

    // canvas要素への参照を取得
    const canvas = document.querySelector('#glcanvas');

    // コントローラの作成
    const controler = new OrbitControls(camera, canvas);

    // プロパティの設定
    controler.maxDistance = MAX_DISTANCE;
    
    // 滑らかに動作
    controler.enableDamping = true;
    controler.dampingFactor = 0.1;

    // 地面にもぐらない
    controler.addEventListener('change', () => {
    
        // カメラの位置を取得
        const camPosition = camera.position;
    
        // カメラのy座標が0未満の場合y座標をに設定する。
        if(camPosition.y <= 10){
            camPosition.y = 10;
        }
    
        // カメラ位置を更新
        camera.position.copy(camPosition);
    });

    return controler;
}

// マウスからオブジェクトとの接触判定を行い、当たった場合引数の関数を実施。
export function checkIntersect(scene, camera, setSelectedAttr, setSelectedObjId, setOperateFlag){

    // raycasterの作成
    const raycaster = new Raycaster();

    // canvas要素を取得
    let canvas = document.querySelector('#glcanvas');

    // マウス座標格納用のベクトル
    const mousePos = new Vector2();

    // マウスのクリックイベントを定義
    canvas.addEventListener('click', (event) => {

        // キャンバス要素のクライアントに対する座標を取得
        const rect = canvas.getBoundingClientRect();

        // canvas要素上のマウス座標を正規化して取得(-1.0 ~ 1.0)
        mousePos.x = (event.clientX - rect.left) / canvas.width * 2.0 -1.0;
        mousePos.y = -(event.clientY - rect.top) / canvas.height * 2.0 + 1.0;

        // レイキャストする
        raycaster.setFromCamera(mousePos, camera);

        // 属性で交差判定
        const intersects = raycaster.intersectObjects(scene.children, true).filter(obj => obj.object.parent.userData.attribute === "sencer"     || obj.object.parent.userData.attribute === "heatpump" 
                                                                                    || obj.object.parent.userData.attribute    === "led"        || obj.object.parent.userData.attribute === "circurator"
                                                                                    || obj.object.parent.userData.attribute    === "livecam"    || obj.object.parent.userData.attribute === "heater"
                                                                                    || obj.object.parent.userData.attribute    === "rainsencer" || obj.object.parent.userData.attribute === "windmeter"
                                                                                    || obj.object.parent.userData.attribute    === "exhaustfan" || obj.object.parent.userData.attribute === "gascylinder" 
                                                                                    || obj.object.parent.userData.attribute    === "illuminationsencer"
                                                                                    || obj.object.parent.userData.attribute    === "radiationsencer");

        // 交差していた場合の処理
        if(intersects.length > 0){
            // 対象のオブジェクトの親要素を取得する(モデル登録時、Groupの子要素としてMeshが登録されている。Meshはプリミティブの数だけ生成される。)
            const selectedObject = intersects[0].object.parent;
            const objectName = selectedObject.userData.attribute;
            const objectId = selectedObject.userData.objId;
            const objectFlag = selectedObject.userData.operateFlag;
            //console.log("normalControler : objectName = " + objectName);

            // 縁取りを付与
            addOutline(selectedObject);
            setSelectedAttr(objectName);
            setSelectedObjId(objectId);
            console.log(objectName);
            // フラッグがtrueなら
            if(objectFlag){
                setOperateFlag(true);
            }else{
                setOperateFlag(false);
            }

        }// 交差していなかった場合の処理
        else{
            removeOutline();
            setSelectedAttr("");
            setSelectedObjId("");
            setOperateFlag(null);
        }
    })
}

