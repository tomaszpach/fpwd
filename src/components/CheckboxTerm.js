import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxTerm = ({checked, onChange}) => {
    return (
        <Checkbox
            checked={checked}
            onChange={(e) => onChange('checkedTerms', e)}
            value="checkedTerms"
            color="primary"
        />
    )
};

export default CheckboxTerm;
