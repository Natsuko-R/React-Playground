import { Object3D } from "three";

export class ObjectManager{

    constructor(){

        // 管理対象の子要素
        this.children = [];

        // ベースとなるモデルの作成
        this.baseModel = null;

    }

    // 子要素に追加
    addChild(child){
        this.children.push(child);
    }

    // 子要素から削除
    removeChild(index){
        if(index < this.children.length && index >= 0){
            this.children.splice(index, 1);
        }
    }

    // 子要素の参照をインデックス番号から取得
    getChildByIndex(index){
        if(index < this.children.length && index >= 0){
            return this.children[index];
        }
    }

    // 子要素の参照を.useDataのAttributeから取得
    getChildrenByAttribute(attribute){
        // 返却用の配列
        const array = [];

        for(let i = 0; i < this.children.length; i++){
            if(this.children[i].userData.attribute === attribute){
                array.push(this.children[i]);
            }
        }

        return array;
    }

    getChildByObjId(objId){
        // 返却用のオブジェクト
        let object = null;

        for(let i = 0; i < this.children.length; i++){
            if(this.children[i].userData.objId === objId){
                object = this.children[i];
            }
        }

        return object;
    }

    // objIdで指定したモデルの透過・表示をトグル
    // toggleChildVisibility(objId, flag){
    //     const target = this.getChildByObjId(objId);

    //     target.traverse((child) => {
    //         child.visible = flag;
    //     });
    // }

    // 子要素すべてのモデルの透過・表示を切り替え
    setChildrenVisibility(flag){
        // すべての子要素に対して行う
        for(let i = 0; i <= this.children.length; i++){

            let target = new Object3D(); 
            target = this.children[i];
            
            target.traverse((child) => {
                if(this.children[i].visible !== undefined){
                    child.visible = flag;
                }
            });
        }
    }   
}