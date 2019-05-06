import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loginJsonForm } from '../pages/pipeline/jsonForms/loginForm';
import Styles from '../../styles/helpers/loginModal';
import DynamicComponent from '../helpers/DynamicForm';
import { loginUser } from '../../networkRequests/userRequests';

const styles = {
  paperOverride: {
    width: '25em',
    height: '40em',
    marginTop: '5em',
    margin: '0em',
  },
};

export class loginModal extends Component {
  constructor() {
    super();
    this.state = {
      loginUserError: null,
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={Styles.loginDiv}>
        <Button size="large" onClick={this.handleClickOpen} style={Styles.loginButton}>
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.paperOverride }}
        >
          <DialogTitle id="form-dialog-title" style={Styles.modalHeader}>
            <h2 style={Styles.headerText}> Welcome back! </h2>
          </DialogTitle>
          <DialogContent style={Styles.loginContent}>
            <DynamicComponent
              jsonForm={() => loginJsonForm}
              setRequest={() => {}}
              form={'Login'}
              net
              route={(data) => {
                const serverResponse = loginUser({
                  username: data.email.entry,
                  password: data.password.entry,
                });
                serverResponse.then((response) => {
                  if (response.success) {
                    if (this.props.requestInProgress) {
                      this.props.requestInProgress(5);
                    }
                    this.props.login(data);
                    this.props.history.push(this.props.destination);
                  } else {
                    const currentState = this.state;
                    currentState.loginUserError = 'Username or Password does not match';
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
            <div style={Styles.signupDiv}>
              <h2 style={Styles.signupText}>Dont have an account?</h2>
              <Button style={Styles.signupButton}>Sign Up</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
loginModal.propTypes = {
  login: PropTypes.func,
  requestInProgress: PropTypes.func,
  destination: PropTypes.string,
  history: PropTypes.func,
};

loginModal.defaultProps = {
  size: PropTypes.string,
  fluid: PropTypes.bool,
  loginButton: PropTypes.func,
  login: PropTypes.func,
  requestInProgress: PropTypes.func,
  destination: PropTypes.string,
  history: PropTypes.func,
};
export default withStyles(styles)(loginModal);
