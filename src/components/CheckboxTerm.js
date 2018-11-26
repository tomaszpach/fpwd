import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxTerm = ({checkedTerms, onChange}) => {
    return (
        <div>
            <Checkbox
                checked={checkedTerms}
                onChange={(e) => onChange('checkedTerms', e)}
                value="checkedTerms"
                color="primary"
            />
            <a href="#toggleModal">Terms & Conditions</a>
        </div>
    )
};

export default CheckboxTerm;
