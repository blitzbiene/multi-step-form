import React, { Component } from 'react'
import {ThemeProvider,AppBar,Dialog} from "@material-ui/core";
export class Success extends Component {
    render() {
        return (
            <ThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          </Dialog>
        </>
      </ThemeProvider>
        );
    }
}

export default Success
