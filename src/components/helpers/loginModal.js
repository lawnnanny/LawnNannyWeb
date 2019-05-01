import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loginJsonForm } from '../pages/pipeline/jsonForms/loginForm';
import Styles from '../../styles/helpers/loginModal';
import DynamicComponent from '../helpers/DynamicForm';
import { loginUser } from '../../networkRequests/userRequests';
import InlineErrorComponent from './InlineError';

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
    return (
      <div style={Styles.loginDiv}>
        <Button size="large" onClick={this.handleClickOpen} style={Styles.loginButton}>
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={Styles.modalHeader}>
            Welcome Back!
          </DialogTitle>
          <DialogContent>
            <div>
              {this.state.loginUserError && (
                <InlineErrorComponent
                  text={this.state.loginUserError}
                  pointing
                  style={Styles.InlineError}
                />
              )}
            </div>
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
export default loginModal;
