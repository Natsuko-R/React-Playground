import React, { useState } from 'react';
import BasicPlanSettingDropdown from './BasicPlanSettingDropdown';
import BasicPlanSettingSwitch from './BasicPlanSettingSwitch';
import { Irrigation } from './GlobalVariables';
// ui
import '../css/BasicPlanSetting.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

function BasicPlanSetting({ Name }) {
    const [data, setData] = useState(["プラン１", Name]);
    const [selectedButton, setSelectedButton] = useState('plan1');
    const [editMode, setEditMode] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    let Mode = false; // 干嘛的？

    const handleButtonClick = (e, plan) => {
        // 如果当前仍在编辑中，切换"プラン１"也会弹窗
        if (editMode) {
            setShowDialog(true);
            Mode = true;
            return;
        }

        setData([plan, Name]);
        setSelectedButton(e.target.id);
    };

    const handleDialogDismiss = (isConfirmed) => {
        if (isConfirmed === true) {
            setEditMode(false);
            setShowDialog(false);
        } else if (isConfirmed === false) {
            setShowDialog(false);
        }
        Mode = false;
    }

    return (
        <div>
            <div className='top'>
                <BasicPlanSettingDropdown name={Name} />

                <p>※{Name}の基本プランはエリア毎に登録します。</p>

                <div className='PlanSetting'>
                    {Name !== Irrigation ?
                        <>
                            <button id='plan1' className={`plan1 ${selectedButton === 'plan1' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１')}>プラン1</button>
                            <button id='plan2' className={`plan2 ${selectedButton === 'plan2' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン２')}>プラン2</button>
                            <button id='plan3' className={`plan3 ${selectedButton === 'plan3' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン３')}>プラン3</button>
                            <button id='plan4' className={`plan4 ${selectedButton === 'plan4' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン４')}>プラン4</button>
                            <button id='plan5' className={`plan5 ${selectedButton === 'plan5' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン５')}>プラン5</button>
                            <button id='plan6' className={`plan6 ${selectedButton === 'plan6' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン６')}>プラン6</button>
                        </> : <>
                            <button id='plan1' className={`plan1 ${selectedButton === 'plan1' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１')}>プラン1</button>
                            <button id='plan2' className={`plan2 ${selectedButton === 'plan2' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン２')}>プラン2</button>
                            <button id='plan3' className={`plan3 ${selectedButton === 'plan3' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン３')}>プラン3</button>
                            <button id='plan4' className={`plan4 ${selectedButton === 'plan4' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン４')}>プラン4</button>
                            <button id='plan5' className={`plan5 ${selectedButton === 'plan5' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン５')}>プラン5</button>
                            <button id='plan6' className={`plan6 ${selectedButton === 'plan6' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン６')}>プラン6</button>
                            <button id='plan7' className={`plan7 ${selectedButton === 'plan7' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン７')}>プラン7</button>
                            <button id='plan8' className={`plan8 ${selectedButton === 'plan8' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン８')}>プラン8</button>
                            <button id='plan9' className={`plan9 ${selectedButton === 'plan9' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン９')}>プラン9</button>
                            <button id='plan10' className={`plan10 ${selectedButton === 'plan10' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１０')}>プラン10</button>
                            <button id='plan11' className={`plan11 ${selectedButton === 'plan11' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１１')}>プラン11</button>
                            <button id='plan12' className={`plan12 ${selectedButton === 'plan12' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１２')}>プラン12</button>
                            <button id='plan13' className={`plan13 ${selectedButton === 'plan13' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１３')}>プラン13</button>
                            <button id='plan14' className={`plan14 ${selectedButton === 'plan14' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１４')}>プラン14</button>
                            <button id='plan15' className={`plan15 ${selectedButton === 'plan15' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１５')}>プラン15</button>
                            <button id='plan16' className={`plan16 ${selectedButton === 'plan16' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１６')}>プラン16</button>
                            <button id='plan17' className={`plan17 ${selectedButton === 'plan17' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１７')}>プラン17</button>
                            <button id='plan18' className={`plan18 ${selectedButton === 'plan18' ? 'selected' : ''}`} onClick={e => handleButtonClick(e, 'プラン１８')}>プラン18</button>
                        </>
                    }
                </div>

                <BasicPlanSettingSwitch data={data} m={Mode} mode={editMode} setMode={setEditMode} />

                {showDialog && (
                    <Dialog
                        open={showDialog}
                        onClose={handleDialogDismiss}
                        aria-labelledby="alert-dialog-title">
                        <DialogTitle id="alert-dialog-title">
                            {"現在の変更内容を破棄してもよろしいですか？"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={() => handleDialogDismiss(true)}>Yes</Button>
                            <Button onClick={() => handleDialogDismiss(false)}>No</Button>
                        </DialogActions>
                    </Dialog>
                )}
            </div>
        </div>
    )
}

export default BasicPlanSetting;