import React, { useState } from 'react';

const OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function Dropdown(props) {
    const { activeTab } = props;

    const [selectedIrrigation, setSelectedIrrigation] = useState('state1');
    const [selectedCO2, setSelectedCO2] = useState('type1');
    const [selectedLED, setSelectedLED] = useState('state1');

    // activeTab : 0 -> Irrigation ; 1 -> CO2 ; 2 -> LED
    const selectedTab = activeTab === 0 ? selectedIrrigation : activeTab === 1 ? selectedCO2 : selectedLED;
    const text = activeTab === 1 ? 'type' : 'state';

    const handleChange = (e) => {
        const value = e.target.value;
        switch (activeTab) {
            case 0:
                setSelectedIrrigation(value);
                break;
            case 1:
                setSelectedCO2(value);
                break;
            default:
                setSelectedLED(value);
                break;
        }
    }


    return (
        <select className="border-solid border-2 border-gray-700 rounded-md " value={selectedTab} onChange={handleChange}>
            {OPTIONS.map((v, idx) => (
                <option key={idx} value={`value${idx + 1}`}>
                    {`${text}${v}`}
                </option>
            ))}
        </select>
    )
}

export default Dropdown;
