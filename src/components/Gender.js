import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const Gender = ({gender, onChange}) => {
    return (
        <div className="row">
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    value={gender}
                    onChange={(e) => onChange('gender', e)}
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                </RadioGroup>
            </FormControl>
        </div>
    )
};

export default Gender;
