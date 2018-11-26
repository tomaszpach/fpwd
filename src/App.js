import React, {Component} from 'react';

// Material parts
import Button from '@material-ui/core/Button';

// Components
import Names from './components/Names';
import Country from './components/Country';
import Gender from "./components/Gender";
import CheckboxTerm from "./components/CheckboxTerm";
import Modal from './components/Modal';

class App extends Component {

    state = {
        firstName: '',
        lastName: '',
        country: '',
        gender: '',
        checkedTerms: false,
        modal: false
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

            case 'checkedTerms':
                this.setState({checkedTerms: !this.state.checkedTerms});
                break;

            case 'modal':
                this.setState({modal: !this.state.modal});
                break;

            default:
                break;
        }
    }

    handleClickOpen(type) {
        this.setState({modal: !this.state.modal});
        if (type === 'disagree') {
            this.setState({checkedTerms: false})
        } else if (type === 'agree') {
            this.setState({checkedTerms: true})
        }
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    // todo add loader - 1s after submit
    // todo add modal / dialogs

    render() {
        const {firstName, lastName, country, gender, checkedTerms, modal} = this.state;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Modal open={modal} onChange={(type, e) => this.handleChange(type, e)}
                       onClick={(type) => this.handleClickOpen(type)}/>
                <div className="row">
                    <Names firstName={firstName} lastName={lastName}
                           onChange={(type, e) => this.handleChange(type, e)}/>
                </div>

                <div className="row">
                    <Country country={country} onChange={(type, e) => this.handleChange(type, e)}/>
                    <Gender gender={gender} onChange={(type, e) => this.handleChange(type, e)}/>
                </div>
                <CheckboxTerm checked={checkedTerms} onChange={(type, e) => this.handleChange(type, e)}/>
                <Button onClick={() => this.handleClickOpen()}>Terms & Conditions</Button>


                {this.state.checkedTerms ? (
                    <Button type="submit" variant="contained" color="primary" style={{width: '100%'}}>
                        Register
                    </Button>
                ) : (
                    <Button variant="outlined" disabled style={{width: '100%'}}>
                        Please accept Terms & Conditions first
                    </Button>
                )}
            </form>
        );
    }
}

export default App;
