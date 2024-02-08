import React, { useState } from 'react';
import SystemOne from './ViewTwoPages/SystemOne';
import SystemTwo from './ViewTwoPages/SystemTwo';
import SystemThree from './ViewTwoPages/SystemThree';
import Dropdown from './ViewTwoPages/Dropdown';

function ViewTwo() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'SYSTEM-1', component: <SystemOne /> },
    { label: 'SYSTEM-2', component: <SystemTwo /> },
    { label: 'SYSTEM-3', component: <SystemThree /> },
  ];

  return (
    <div className='h-160 w-260'>

      <div className='grid grid-cols-8 gap-3'>

        <div className='col-span-2 p-2'>
          <p className='pl-2 font-bold text-3xl inline'>{tabs[activeTab].label}</p>
        </div>

        <div className='col-span-4'>
          {tabs.map((tab, index) => (
            <div key={index} className='inline-grid grid-col-1 gap-3 p-4'>
              <button
                className={index === activeTab ? 'bg-orange-100 hover:bg-primary hover:text-white rounded-full text-black text-sm px-4 py-1' :
                  'bg-primary hover:bg-orange-100 hover:text-black rounded-full text-white text-sm px-4 py-1'}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>

        <div className='col-span-2 pt-4'>
          <Dropdown activeTab={activeTab} />
        </div>

      </div>

      <div className='h-80'>
        {tabs[activeTab].component}
      </div>

    </div>
  )
}

export default ViewTwo;