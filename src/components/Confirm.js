import React, { Component } from 'react'
import { AppBar, Toolbar, Typography,ListItem,ListItemText,List ,Button} from '@material-ui/core';
export class Confirm extends Component {
    render() {

        const {firstName,lastName,email,occupation,city,bio,age} = this.props.values;
        const {previousStep,nextStep}= this.props;
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Confirm Details
                       </Typography>
                    </Toolbar>
                </AppBar>

                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Occupation" secondary={occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City" secondary={city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Bio" secondary={bio} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Age" secondary={age} />
                    </ListItem>
                </List>
                <br />
                <Button
                  variant="contained"
                color="secondary"
                onClick={event=>{event.preventDefault();previousStep()}}>
                    BACK
                </Button>
                <Button
                  variant="contained"
                color="primary"
                onClick={event=>{event.preventDefault();nextStep()}}>
                    Confirm and Continue
                </Button>
            </React.Fragment>
        )
    }
}

export default Confirm
