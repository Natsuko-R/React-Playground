import React, { useState } from 'react';
import SystemOne from './ViewOnePages/SystemOne';
import SystemTwo from './ViewOnePages/SystemTwo';
import SystemThree from './ViewOnePages/SystemThree';
import SystemFour from './ViewOnePages/SystemFour';

function ViewOne(props) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'ITEM-1', component: <SystemOne selected={props.selected} /> },
    { label: 'ITEM-2', component: <SystemTwo /> },
    { label: 'ITEM-3', component: <SystemThree /> },
    { label: 'ITEM-4', component: <SystemFour /> },
  ];
  return (
    <div className='h-160 w-260'>

      <div className='grid grid-cols-8 gap-3'>

        <div className='col-span-2 p-2'>
          <p className='font-bold text-3xl'>{tabs[activeTab].label}</p>
        </div>

        <div className='col-span-6'>
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

      </div>

      <div className='h-80'>
        {tabs[activeTab].component}
      </div>

    </div>
  )
}

export default ViewOne;