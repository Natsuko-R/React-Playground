import React from 'react'
import { useLocation } from 'react-router-dom';

const urlLists = [
    { id: '/home/farmlists', name: '農場一覧' },
    { id: '/home/forgotpassword', name: 'パスワード忘れ' },
    { id: '/home/FinishConfirm', name: '' },
    { id: '/home/house', name: 'HELLO NATSUKI' },
    { id: '/home/areainf', name: 'エリア情報' },
    { id: '/home/devicelist_sensor', name: 'デバイス一覧-センサ' },
    { id: '/home/devicelist_valve', name: 'デバイス一覧-バルブ' },
    { id: '/home/devicelist_relay', name: 'デバイス一覧-リレー' },
    { id: '/home/alertlist', name: 'アラート一覧' },
    { id: '/home/weatherforecast', name: '天候と予報' },
    { id: '/home/csvdownload', name: 'CSV出力' },
    { id: '/home/housesetting', name: 'ハウス設定' },
    { id: '/home/areasetting', name: 'エリア設定' },
    { id: '/home/thresholdvalue', name: 'しきい値設定' },
    { id: '/home/estimatesetting', name: '積算設定' },
    { id: '/home/valverelaysetting', name: 'バルブ・リレー設定' },
    { id: '/home/co2valve', name: 'CO₂供給バルブ' },
    { id: '/home/airvalve', name: 'Air供給バルブ' },
    { id: '/home/phvalve', name: 'pH調整剤バルブ' },
    { id: '/home/ecvalve', name: 'EC調整剤バルブ' },
    { id: '/home/led1stsys', name: 'LED-第1系統' },
    { id: '/home/led2ndsys', name: 'LED-第2系統' },
    { id: '/home/led3rdsys', name: 'LED-第3系統' },
    { id: '/home/led4thsys', name: 'LED-第4系統' },
    { id: '/home/window1stsys', name: '窓-第1系統' },
    { id: '/home/curtain1stsys', name: 'カーテン-第1系統' },
    { id: '/home/general1st', name: '汎用1(CFAN)' },
    { id: '/home/general2nd', name: '汎用2(PFAN)' },
    { id: '/home/general3rd', name: '汎用3(動噴機)' },
    { id: '/home/general4th', name: '汎用4' },
    { id: '/home/aircon', name: '空調設定' },
    { id: '/home/irrigationsys', name: '潅水システム設定' },
    { id: '/home/userinfo', name: 'ユーザ情報' },
    { id: '/home/community', name: 'オムコン-コミュニティ' },
]

export default function PageName() {
    const location = useLocation();
    const result = urlLists.find(url => url.id === location.pathname);

    return <>{result ? (result.name || 'Page Not Found') : 'Page Not Found'}</>;
}

