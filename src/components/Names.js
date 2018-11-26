import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";

const Names = ({firstName, lastName, onChange}) => {
    return (
        <div id="first-last" className="row">
            <TextField
                id="standard-textarea"
                label="First name"
                multiline
                margin="normal"
                value={firstName}
                onChange={(e) => onChange('firstName', e)}
                style={{marginRight: 15}}

            />
            <TextField
                id="standard-textarea"
                label="Last name"
                multiline
                margin="normal"
                value={lastName}
                onChange={(e) => onChange('lastName', e)}
            />
        </div>
    )
};

export default Names;
