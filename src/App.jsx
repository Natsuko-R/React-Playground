import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Main from './pages/Main';
import Game from './pages/Game/TicTacToe';
import { AgGrid } from './components/User/AgGrid';
import UserInfo from './components/User/UserInfo';
import UserHelp from './components/User/UserHelp';
import OmConCommunity from './components/User/OmConCommunity';
import ResetPasswordPage from './components/Auth/ResetPasswordPage';
import ConfirmationPage from './components/Auth/ConfirmationPage';
// 
import DeviceList_Sensor from './components/Device/Sensor/DeviceList_Sensor';
import ThresholdValue from './components/Device/Threshold/ThresholdValue';
import DeviceList_Valve from './components/Device/FarmInfo/DeviceList_Valve';
import PHValve from './components/Device/BasicPlan/PHValve';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home/forgotpassword" element={<ResetPasswordPage />} />
                <Route path="home/finishconfirm" element={<ConfirmationPage />} />
                <Route path="/home" element={<Main />} />

                <Route path="/test" element={<Game />} />

                <Route path="home/devicelist_sensor" element={<DeviceList_Sensor />} />
                <Route path="home/devicelist_valve" element={<DeviceList_Valve />} />

                {/* 这个写得不好，看dong桑的 */}
                <Route path="home/thresholdvalue" element={<ThresholdValue />} />
                <Route path="home/phvalve" element={<PHValve />} />


                <Route path="home/ag-grid" element={<AgGrid />} />
                <Route path="home/userinfo" element={<UserInfo />} />
                <Route path="home/userhelp" element={<UserHelp />} />
                <Route path="/home/community" element={<OmConCommunity />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App