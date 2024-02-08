import { AmbientLight, DirectionalLight, }  from "three";

// 光源
const AMBIENT_COLOR = {color: 0xffffff};        // 環境光の色
const AMBIENT_LUX = 0.6;                        // 環境光の強さ
const DIRECTIONAL_COLOR = {color: 0xffffff};    // 平行光源の色
const DIRECTIONAL_LUX = 0.6;                    // 平行光源の強さ

export function setStandardLight(scene){
    // 環境光
    const ambient = new AmbientLight(AMBIENT_COLOR, AMBIENT_LUX);
    scene.add(ambient);

    // 平行光源
    const directional = new DirectionalLight(DIRECTIONAL_COLOR, DIRECTIONAL_LUX);
    scene.add(directional);

}
