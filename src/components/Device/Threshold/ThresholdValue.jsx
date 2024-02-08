import { React, useState, useEffect } from 'react';
import ThresholdDisplayMode from './ThresholdDisplayMode';
import ThresholdEditMode from './ThresholdEditMode';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

function ThresholdValue() {
  const machines = ['トマト農園', 'イチゴ農園', '制御盤３', '制御盤４'];
  const houses = ['ハウス1', 'ハウス２', 'ハウス３', 'ハウス４'];
  const areas = ['西大久保店', 'エリア２', 'エリア３', 'エリア４', 'エリア５', 'エリア６', 'エリア７', 'エリア８', 'エリア９', 'エリア１０'];

  const [selectedMachine, setselectedMachine] = useState('');
  const [selectedHouse, setselectedHouse] = useState('');
  const [selectedArea, setselectedArea] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  }

  const handleConfirmClick = () => {
    setIsConfirmDialogOpen(true);
  }

  const handleConfirmDialogClose = (isConfirmed) => {
    if (isConfirmed === true) {
      setIsConfirmDialogOpen(false);
      setIsEditMode(false);
    } else if (isConfirmed === false) {
      setIsConfirmDialogOpen(false);
    }

  }
  const [columnHeight, setColumnHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setColumnHeight(window.innerHeight);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateHeight = () => {
    if (columnHeight <= 601) {
      return '480px';
    } else {
      return '800px';
    }
  }
  return (
    <div className='grid grid-cols-6 gap-4' style={{ overflowY: 'auto', maxHeight: calculateHeight() }}>
      <div className='col-start-2 col-span-3 flex justify-center items-start pt-10 pl-10'>
        <label className='p-1 pr-2 font-light text-md'>制御盤：</label>
        <select className="p-1 pr-2 w-180 border-2 border-solid border-gray-700 rounded-md text-black" value={selectedMachine} onChange={e => setselectedMachine(e.target.value)}>
          {machines.map(v => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <label className='p-1 pr-2 font-light text-md'>ハウス：</label>
        <select className="p-1 pr-2 w-180 border-2 border-solid border-gray-700 rounded-md text-black" value={selectedHouse} onChange={e => setselectedHouse(e.target.value)}>
          {houses.map(v => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <label className='p-1 pr-2 font-light text-md'>エリア：</label>
        <select className="p-1 pr-2 w-180 border-2 border-solid border-gray-700 rounded-md text-black" value={selectedArea} onChange={e => setselectedArea(e.target.value)}>
          {areas.map(v => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className='col-start-2 col-span-3 flex justify-center items-center pt-5'>
        {isEditMode ? <ThresholdEditMode /> : <ThresholdDisplayMode />}
      </div>

      <div className='col-start-2 col-span-3 flex justify-center items-center'>
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
  )
}


export default ThresholdValue;