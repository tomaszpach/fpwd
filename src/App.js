import React, {Component} from 'react';

// Material parts
import Button from '@material-ui/core/Button';

// Components
import Names from './components/Names';

class App extends Component {

    state = {
        firstName: '',
        lastName: ''
    };

    handleChange(type, e) {
        const value = e.target.value;

        switch (type) {
            case 'firstName':
                this.setState({firstName: value});
                break;

            case 'lastName':
                this.setState({lastName: value});
                break;
        }
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    render() {

        const {firstName, lastName} = this.state;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Names firstName={firstName} lastName={lastName} onChange={(type, e) => this.handleChange(type, e)}/>

                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        );
    }
}

export default App;
