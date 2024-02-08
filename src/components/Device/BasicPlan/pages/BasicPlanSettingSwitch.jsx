import React, { useState } from 'react';
import BasicPlanSettingDisplay from './BasicPlanSettingDisplay';
import BasicPlanSettingEdit from './BasicPlanSettingEdit';
// ui
import "../css/BasicPlanSettingSwitch.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

function BasicPlanSettingSwitch(props) {
    const [isEditMode, setIsEditMode] = useState(props.m);
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditMode(true);
        props.setMode(true);
    }

    const handleConfirmClick = () => {
        setIsConfirmDialogOpen(true);
    }

    const handleConfirmDialogClose = (isConfirmed) => {
        if (isConfirmed === true) {
            setIsConfirmDialogOpen(false);
            setIsEditMode(false);
            props.setMode(false);
        } else if (isConfirmed === false) {
            setIsConfirmDialogOpen(false);
        }
        //setData([...startTimedata, { id, time }]);
    }

    return (
        <div>
            <h1 className="bg-blue-200 title">現在の制御盤の設定＜{props.data[0]}＞</h1>
            <div className="bg-blue-100 Switchsetting">
                {isEditMode && props.mode ? (<BasicPlanSettingEdit data={props.data} />) : (<BasicPlanSettingDisplay data={props.data} />)}
                <div className='buttons'>
                    <button className="btnConfirm" onClick={handleConfirmClick} disabled={!isEditMode}>確定</button>
                    <button className="btnEdit" onClick={handleEditClick}>変更</button>
                </div>
                {isConfirmDialogOpen && (
                    <Dialog
                        open={isConfirmDialogOpen}
                        onClose={handleConfirmDialogClose}
                        aria-labelledby="alert-dialog-title">
                        <DialogTitle id="alert-dialog-title">
                            {"この内容で更新してもよろしいでしょうか?"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={() => handleConfirmDialogClose(true)}>Yes</Button>
                            <Button onClick={() => handleConfirmDialogClose(false)}>No</Button>
                        </DialogActions>
                    </Dialog>
                )}
            </div>
        </div>
    );
}

export default BasicPlanSettingSwitch;