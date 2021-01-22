import React, { Component } from 'react'



import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Success from './Success';
import Confirm from './Confirm';


export class UserForm extends Component {



    state = {
        step: 1,
        email: '',
        firstName: '',
        lastName: '',
        occupation: '',
        city: '',
        bio: '',
        age: ''

    };

    nextStep = () => {
        const step = this.state.step + 1;
        this.setState({ step });
    }
    previousStep = () => {
        const step = this.state.step - 1;
        this.setState({ step });
    }

    handleInputChange = (event,input) => {
        this.setState({[input]:event.target.value});
    }



    renderContent = () => {
        const { email, firstName, lastName, age, occupation, city, bio } = this.state;
        const values = { email, firstName, lastName, age, occupation, city, bio };
        switch (this.state.step) {
            case 1: return <FormUserDetails
                values={values} 
                nextStep={this.nextStep}
                handleInputChange={this.handleInputChange}/>
            case 2: return <FormPersonalDetails
                     values={values}
                     handleInputChange={this.handleInputChange}
                     nextStep={this.nextStep}
                     previousStep={this.previousStep} />
            case 3: return <Confirm 
                            values={values}
                            previousStep={this.previousStep}
                            nextStep={this.nextStep}
                            />
            case 4: return <Success />
            default: return "ERROR"
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default UserForm
