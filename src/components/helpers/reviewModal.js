import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import LoginModal from '../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../connectedComponents/helpers/ConnectedSignupModal';
import Styles from '../../styles/reviewModal';

const MyButton = styled(Button)`
  &&& {
    :active {
      background-color: #197307 !important;
      transform: translateY(4px) !important;
    }
  }
`;

export class reviewModal extends Component {
  constructor() {
    super();
    this.state = {
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
      <div style={Styles.reviewModal}>
        <MyButton style={Styles.modalButton} onClick={this.handleClickOpen}>
          Submit Request
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={Styles.modalHeader}>
            To Make A Request Please...
          </DialogTitle>
          <DialogContent />
          <DialogActions>
            <SignupModal
              onClick={this.handleClose}
              size="big"
              fluid
              signupButton={Styles.signupButton}
              history={this.props.history}
              destination="/pipeline/requestReview"
              requestInProgress={this.props.requestInProgress}
            />
            <h1> OR </h1>
            <LoginModal
              onClick={this.handleClose}
              size="big"
              fluid
              loginButton={Styles.loginButton}
              history={this.props.history}
              destination="/pipeline/requestReview"
              requestInProgress={this.props.requestInProgress}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

reviewModal.propTypes = {
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};

reviewModal.defaultProps = {
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};
export default reviewModal;
