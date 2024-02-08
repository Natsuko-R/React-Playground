import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MOOD_MAP = {
    'happy': 'mood1',
    'sad': 'mood2',
};

const ACTION_MAP = {
    'action1': 'smile-1',
    'action2': 'smile-2',
    'action3': 'smile-3',
    'action4': 'smile-4',
    'action5': 'cry-1',
    'action6': 'cry-2',
};

function Dropdownmenu(props) {

    const { mood, action } = props.info;

    const curMood = MOOD_MAP[mood];
    const curAction = ACTION_MAP[action];
    const [selectedMood, setSelectedMood] = useState(curMood);
    const [selectedAction, setSelectedAction] = useState(curAction);

    const navigate = useNavigate();

    const handleActionChange = (e) => {
        // console.log(typeof e.target.value); // string
        setSelectedAction(e.target.value);
        // navigate('/home/' + e.target.value);
    };

    return (
        <div className="p-2 bg-gray-100 rounded-lg shadow-md">

            <div>
                <label className="text-lg font-bold mr-8">Mood</label>
                <select
                    className="p-2 border rounded-md"
                    value={selectedMood}
                    onChange={e => setSelectedMood(e.target.value)}
                >
                    <option value="mood1">happy</option>
                    <option value="mood2">sad</option>
                </select>
            </div>

            <div>
                <label className="text-lg font-bold mr-4">Action</label>
                <select
                    className="p-2 border rounded-md"
                    value={selectedAction}
                    onChange={handleActionChange}
                >
                    {selectedMood === 'mood1' &&
                        <>
                            <option value="action1">smile-1</option>
                            <option value="action2">smile-2</option>
                            <option value="action3">smile-3</option>
                            <option value="action4">smile-4</option>
                        </>
                    }
                    {selectedMood === 'mood2' &&
                        <>
                            <option value="action5">cry-1</option>
                            <option value="action6">cry-2</option>                        </>
                    }
                </select>
            </div>

        </div>
    );
}
export default Dropdownmenu;