import React from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const Country = ({country, onChange}) => {
    return (
        <div className="row">
            <FormControl style={{minWidth: 120}}>
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
                    <MenuItem value="pl">Poland</MenuItem>
                    <MenuItem value="uk">United Kingdom</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default Country;
