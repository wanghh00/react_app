import React, { Component, useState } from 'react';
// import { Component } from "react";
// import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Util, { FactorNameId, KeywordAutoId, TreatmentNameId } from '../Util';

import top100Films from '../data/top100Films.json'

// export default function KeywordsGroup(notifyKeywordsGroupChange) {
// export default function KeywordsGroup(props) {
export default function KeywordsGroup({ value, setValue, notifyChange }) {
    // console.log(props);
    var id = null;
    // const box1Value = props.value;
    // const setBox1Value = props.setValue;
    // const notifyChange = props.notifyChange;

    const box1Value = value;
    const setBox1Value = setValue;
    // const notifyChange = props.notifyChange;

    // const [box1Value, setBox1Value] = useState([]);

    const handleBox1ValueChange = (event, value, reason) => {
        // Update the state when the user selects an option
        // setSelectedOption(value);

        setBox1Value(value);
        // props.setValue(value);

        // console.log(event, value);
        // notifyChange({id: {KeywordAutoId}, value: value, reason: reason});
        notifyChange({ value: value, reason: reason });
        console.log(value, reason);
    };


    const handleTreatmentNameBlur = (event) => {
        // Update the state with the new input value
        // setTreatmentName(event.target.value);
        notifyChange({ id: TreatmentNameId, value: event.target.value });
        console.log(event.target.value);
    };

    return (
        <div className='TopGroup KeywordsGroup'>
            <div>Name of Treatment:
                <span style={{ margin: '0 0.5rem 0 0' }} />
                <input id={TreatmentNameId} type='text' onBlur={handleTreatmentNameBlur} />
                {/* <input id={TreatmentNameId} type='text'/> */}
            </div>
            <div>KeyWords: <span style={{ fontSize: '.8rem' }}> tell us what film you like</span></div>
            <Autocomplete
                multiple
                // freeSolo
                id={KeywordAutoId}
                value={box1Value}  //
                onChange={handleBox1ValueChange} // 
                options={top100Films}
                getOptionLabel={(option) => option.label}
                // defaultValue={[top100Films[13]]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        // label="Multiple values"
                        placeholder="Keywords..."
                    />
                )}
            />
        </div>
    );
}
