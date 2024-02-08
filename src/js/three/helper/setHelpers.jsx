    import { GridHelper, AxesHelper}  from "three";

    // 定数宣言
    const GRID_SIZE = 500;      // グリッドの大きさ
    const GRID_SEGMENT = 10;    // グリッドの分割数(10列に分割している)
    const AXES_SIZE = 180;      // 軸表示ガイドの大きさ

    // 二種のヘルパーを作成する関数
    export function setHelpers(scene){
        // ヘルパーの作成
        const gridHelper = new GridHelper(GRID_SIZE, GRID_SEGMENT);
        scene.add(gridHelper);

        const axesHelper = new AxesHelper(AXES_SIZE);
        scene.add(axesHelper);

    }