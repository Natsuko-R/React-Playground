import { React } from 'react';
import Tabs from './pages/Tabs';
import InfoBoard from './pages/InfoBoard';

function Dashboard() {

  return (
    <div className='grid grid-cols-5 '>
      <div className='col-span-1'>
        <InfoBoard />
      </div>
      <div className='col-span-4'>
        <Tabs />
      </div>
    </div >
  );
}
export default Dashboard;
