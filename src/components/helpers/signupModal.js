import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import Styles from '../../styles/helpers/signupModal';
import DynamicComponent from '../helpers/DynamicForm';
import { createUser } from '../../networkRequests/userRequests';

class signupModal extends Component {
  constructor() {
    super();
    this.state = {
      registerUserError: null,
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
      <div style={Styles.signupDiv}>
        <Button size="large" onClick={this.props.closeSignupModal} style={Styles.signupButton}>
          Sign Up
        </Button>
        <Dialog
          open={this.props.isSignupModalOpen}
          onClose={this.props.closeSignupModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={Styles.modalHeader}>
            Sign Up!
          </DialogTitle>
          <DialogContent>
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
          </DialogContent>
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
export default signupModal;
