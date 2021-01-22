import React, { Component } from 'react'

import {ThemeProvider} from '@material-ui/core/styles';
import { AppBar, TextField, Button, Toolbar,Typography,RaisedButton} from '@material-ui/core';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleInputChange } = this.props;
        return (
            <React.Fragment>
                
                    <AppBar position="static">
                        <Toolbar>
                        <Typography variant="h6">
                           Enter User Details
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        placeholder="Enter First Name"
                        label="FirstName"
                        onChange={(event)=>handleInputChange(event,'firstName')}
                        margin="normal"
                        fullWidth
                        defaultValue={values.firstName} />
                    <br />
                    <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        onChange={(event)=>handleInputChange(event,'lastName')}
                        defaultValue={values.lastName}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Email"
                        label="Email"
                        onChange={(event)=>handleInputChange(event,'email')}
                        defaultValue={values.email}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Continue</Button>
             
             </React.Fragment>
        )
    }
}

export default FormUserDetails
