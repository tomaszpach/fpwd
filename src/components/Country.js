import React from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const Country = ({country, onChange}) => {
    return (
        <FormControl style={{marginRight: 8, width: 'calc(50% - 16px)'}}>
            <InputLabel htmlFor="country-simple">Country</InputLabel>
            <Select
                value={country}
                onChange={(e) => onChange('country', e)}
                inputProps={{
                    name: 'country',
                    id: 'country-simple',
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="al">Albania</MenuItem>
                <MenuItem value="by">Białoruś</MenuItem>
                <MenuItem value="fi">Finlandia</MenuItem>
                <MenuItem value="lu">Luksemburg</MenuItem>
                <MenuItem value="pl">Poland</MenuItem>
                <MenuItem value="ru">Rosja</MenuItem>
                <MenuItem value="uk">Wielka Brytania</MenuItem>
            </Select>
        </FormControl>
    )
};

export default Country;
