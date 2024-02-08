import { React, useState } from "react";
import '../css/BasicPlanSettingDropdown.css';
import { Irrigation } from './GlobalVariables';

const machines = ['トマト農園', 'イチゴ農園', '制御盤３', '制御盤４'];
const houses = ['ハウス1', 'ハウス２', 'ハウス３', 'ハウス４'];
const areas = ['エリア１', 'エリア２', 'エリア３', 'エリア４', 'エリア５', 'エリア６', 'エリア７', 'エリア８', 'エリア９', 'エリア１０'];

const SelectDropdown = ({ label, className, options, selectedValue, onChange }) => {
    return (
        <>
            <label>{label}</label>
            <select className={className} value={selectedValue} onChange={onChange}>
                {options.map(v => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </select>
        </>
    );
};

function BasicPlanSettingDropdown({ name }) {

    const [selectedValues, setSelectedValues] = useState({
        machine: '',
        house: '',
        area: ''
    });

    return (
        <section className="dropdown">

            <SelectDropdown
                label="制御盤"
                className={"machine"}
                options={machines}
                selectedValue={selectedValues.machine}
                onChange={(e) => setSelectedValues({ ...selectedValues, machine: e.target.value })}
            />

            <SelectDropdown
                label="ハウス"
                className={"house"}
                options={houses}
                selectedValue={selectedValues.house}
                onChange={(e) => setSelectedValues({ ...selectedValues, house: e.target.value })}
            />

            {name !== Irrigation &&
                <SelectDropdown
                    label="エリア"
                    className={"area"}
                    options={areas}
                    selectedValue={selectedValues.area}
                    onChange={(e) => setSelectedValues({ ...selectedValues, area: e.target.value })}
                />
            }

        </section>
    );
}

export default BasicPlanSettingDropdown;