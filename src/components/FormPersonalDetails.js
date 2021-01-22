import React, { Component } from 'react'
import {AppBar,Button,TextField,Toolbar,Typography} from '@material-ui/core'
export class FormPersonalDetails extends Component {
    render() {

        const {values,handleInputChange,nextStep,previousStep} = this.props;
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                      <Typography variant="h6">
                         Enter Personal Details
                      </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                defaultValue={values.occupation}
                label="Occupation"
                placeholder="Enter Occupation"
                onChange={(event)=>handleInputChange(event,'occupation')}
                margin="normal"
                fullWidth
                />
                <br/>
                <TextField
                defaultValue={values.bio}
                label="Bio"
                placeholder="About You"
                onChange={(event)=>handleInputChange(event,'bio')}
                margin="normal"
                fullWidth
                />
                <br/>
                <TextField
                defaultValue={values.city}
                label="City"
                placeholder="Enter Your City"
                onChange={(event)=>handleInputChange(event,'city')}
                margin="normal"
                fullWidth
                />
                <br/>
                <TextField
                defaultValue={values.age}
                label="Age"
                placeholder="How old are you?"
                onChange={(event)=>handleInputChange(event,'age')}
                margin="normal"
                fullWidth
                />
                <br/>
                <Button
                 color="secondary"
                 variant="contained"
                 onClick = {(event)=>{event.preventDefault();previousStep();}}
                >Back</Button>
                <Button
                 variant="contained"
                 color="primary"
                 onClick = {(event)=>{event.preventDefault();nextStep();}}
                >Continue
                </Button>
            </React.Fragment>
        )
    }
}

export default FormPersonalDetails
