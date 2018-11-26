import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";

const Names = ({firstName, lastName, onChange}) => {
    return (
        <div className="names">
            <TextField
                id="standard-textarea"
                label="First name"
                multiline
                margin="normal"
                value={firstName}
                onChange={(e) => onChange('firstName', e)}
                style={{marginRight: 8, width: 'calc(50% - 16px)'}}

            />
            <TextField
                id="standard-textarea"
                label="Last name"
                multiline
                margin="normal"
                value={lastName}
                onChange={(e) => onChange('lastName', e)}
                style={{marginLeft: 8, width: 'calc(50% - 16px)'}}
            />
        </div>
    )
};

export default Names;
