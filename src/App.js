import React, {Component} from 'react';
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

    render() {

        const {firstName, lastName} = this.state;

        return (
            <form>
                <Names firstName={firstName} lastName={lastName} onChange={(type, e) => this.handleChange(type, e)}/>
            </form>
        );
    }
}

export default App;
