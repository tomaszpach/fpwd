import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const Gender = ({gender, onChange}) => {
    return (
        <FormControl component="fieldset" style={{marginLeft: 8, width: 'calc(50% - 16px)'}}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
                aria-label="Gender"
                name="gender1"
                value={gender}
                onChange={(e) => onChange('gender', e)}
                style={{flexDirection: 'row'}}
            >
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            </RadioGroup>
        </FormControl>
    )
};

export default Gender;
