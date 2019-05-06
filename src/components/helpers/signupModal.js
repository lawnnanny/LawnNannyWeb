import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import Styles from '../../styles/helpers/signupModal';
import DynamicComponent from '../helpers/DynamicForm';
import { createUser } from '../../networkRequests/userRequests';

const styles = {
  paperOverride: {
    width: '25em',
    height: '40em',
    marginTop: '5em',
    margin: '0em',
  },
};

class signupModal extends Component {
  constructor() {
    super();
    this.state = {
      registerUserError: null,
      open: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={Styles.signupDiv}>
        <Button size="large" onClick={this.props.closeSignupModal} style={Styles.signupButton}>
          Sign Up
        </Button>
        <Dialog
          open={this.props.isSignupModalOpen}
          onClose={this.props.closeSignupModal}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.paperOverride }}
        >
          <DialogTitle id="form-dialog-title" style={Styles.modalHeader}>
            <h2 style={Styles.headerText}> Sign Up! </h2>
          </DialogTitle>
          <DialogContent style={Styles.loginContent}>
            <DynamicComponent
              jsonForm={() => signupJsonForm}
              form={'SignUp'}
              setRequest={() => {}}
              route={(signupDetailsJson) => {
                if (this.props.requestInProgress) {
                  this.props.requestInProgress(5);
                }
                const serverResponse = createUser({
                  email: signupDetailsJson.email.entry,
                  password: signupDetailsJson.password.entry,
                });
                serverResponse.then((data) => {
                  if (this.state.registerUserError !== null && data.success) {
                    this.props.history.push(this.props.destination);
                  }
                  if (!data.success) {
                    const currentState = this.state;
                    let message = '';
                    if (data.message.name === 'DupplicateError') {
                      message = 'Account with that username or email already exists!';
                    }
                    currentState.registerUserError = message;
                    this.setState(currentState);
                  }
                });
              }}
              styling={Styles}
            />
            <h3 style={Styles.divider}> or </h3>
            <Button style={Styles.facebookButton}>
              <SvgIcon style={Styles.facebookIcon}>
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </SvgIcon>
              <div style={Styles.facebookTextDiv}>
                <h2 style={Styles.facebookText}>Continue With Facebook</h2>
              </div>
            </Button>
            <Button style={Styles.googleButton}>
              <SvgIcon style={Styles.googleIcon}>
                <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
              </SvgIcon>
              <div style={Styles.googleTextDiv}>
                <h2 style={Styles.googleText}>Continue With Google</h2>
              </div>
            </Button>
            <div style={Styles.loginDiv}>
              <h2 style={Styles.loginText}>Already have an account?</h2>
              <Button onClick={this.props.swapModal} style={Styles.loginButton}>
                Log In
              </Button>
            </div>
          </DialogContent>
          <DialogActions style={Styles.modalAction}>
            <Button onClick={this.props.closeSignupModal} style={Styles.closeButton}>
              <SvgIcon>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </SvgIcon>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
signupModal.propTypes = {
  destination: PropTypes.string,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};

signupModal.defaultProps = {
  size: PropTypes.string,
  destination: PropTypes.string,
  fluid: PropTypes.bool,
  signupButton: PropTypes.func,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};
export default withStyles(styles)(signupModal);
