import React, {Component} from 'react';

// Material parts
import Button from '@material-ui/core/Button';

// Components
import Names from './components/Names';
import Country from './components/Country';
import Gender from "./components/Gender";
import Checkbox from "./components/Checkbox";

class App extends Component {

    state = {
        firstName: '',
        lastName: '',
        country: '',
        gender: ''
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

            case 'country':
                this.setState({country: value});
                break;

            case 'gender':
                this.setState({gender: value});
                break;
        }
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        const {firstName, lastName, country, gender} = this.state;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Names firstName={firstName} lastName={lastName} onChange={(type, e) => this.handleChange(type, e)}/>
                <Country country={country} onChange={(type, e) => this.handleChange(type, e)}/>
                <Gender gender={gender} onChange={(type, e) => this.handleChange(type, e)}/>
                <Checkbox />

                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        );
    }
}

export default App;
