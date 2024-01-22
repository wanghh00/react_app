import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

import { PlacementsId } from "../Util";


export default function PlacementAutoBox({ value, setValue, notifyChange }) {

    const handleValueChange = (event, value, reason) => {
        setValue(value);

        // console.log(event, value);
        // notifyChange({id: {KeywordAutoId}, value: value, reason: reason});
        // notifyChange({ value: value, reason: reason });
        console.log(value, reason);
    };

    // const genColor = (channel) => {
    //     switch (channel) {
    //         case 'mWeb':
    //             return 'green';
    //         case 'dWeb':
    //             return 'red';
    //         default:
    //             return 'black';
    //     }
    // }

    const renderTags = (value, getTagProps) => {
        // let color = 'black';
        // switch ()
        const genColor = (channel) => {
            switch (channel) {
                case 'mWeb':
                    return 'blue';
                case 'dWeb':
                    return 'red';
                default:
                    return 'black';
            }
        }

        return value.map((option, index) => (
            // let color = 'black';

            <Chip
                label={option.id}
                // style={{ backgroundColor: option.value, color: 'white' }}
                style={{ color: genColor(option.channel) }}
                {...getTagProps({ index })}
            />
        ))
    };

    return (
        <Autocomplete
            multiple
            freeSolo
            id={PlacementsId}
            value={value}  //
            onChange={handleValueChange} // 
            options={placements}
            getOptionLabel={(option) => option.name}
            renderTags={renderTags}
            // defaultValue={[top100Films[13]]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    // label="Multiple values"
                    placeholder="Placements..."
                />
            )}
        />

    );
}


const placements = [
    { name: '100111: mWeb VI Page ABF1', id: 100111, channel: 'mWeb', page: 'VI' },
    { name: '100112: mWeb VI Page ABF2', id: 100112, channel: 'mWeb', page: 'VI' },
    { name: '100113: mWeb VI Page ABF3', id: 100113, channel: 'mWeb', page: 'VI' },
    { name: '100114: dWeb VI Page ABF1', id: 100114, channel: 'dWeb', page: 'VI' },
    { name: '100115: dWeb VI Page ABF2', id: 100115, channel: 'dWeb', page: 'VI' },
    { name: '100116: dWeb VI Page ABF3', id: 100116, channel: 'dWeb', page: 'VI' },
]
