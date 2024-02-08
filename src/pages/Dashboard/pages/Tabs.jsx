import React, { useState } from 'react';
import CanvasView from "./TabViews/CanvasView";
import ViewOne from './TabViews/ViewOne';
import ViewTwo from './TabViews/ViewTwo';
import ViewThree from './TabViews/ViewThree';
import ViewFour from './TabViews/ViewFour';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'TAB-1', component: <CanvasView /> },
    { label: 'TAB-2', component: <ViewOne /> },
    { label: 'TAB-3', component: <ViewTwo /> },
    { label: 'TAB-4', component: <ViewThree /> },
    { label: 'TAB-5', component: <ViewFour /> },
  ];

  return (
    <>
      <div className="flex justify-between static">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className=''>{tabs[activeTab].component}</div>
    </>
  );
}

export default Tabs;
