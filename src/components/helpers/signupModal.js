import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import styles from '../../styles/helpers/signupModal.module.css';
import SignupForm from './signupForm';

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
      <div className={styles.signupDiv}>
        <Button size="large" onClick={this.props.closeSignupModal} className={styles.signupButton}>
          Sign Up
        </Button>
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.props.isSignupModalOpen}
          onClose={this.props.closeSignupModal}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.paperOverride }}
        >
          <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
            <h2 className={styles.headerText}> Sign Up </h2>
          </DialogTitle>
          <DialogContent className={styles.loginContent}>
            <SignupForm />
          </DialogContent>
          <DialogActions className={styles.modalAction}>
            <div className={styles.loginDiv}>
              <h2 className={styles.loginText}>Already have an account?</h2>
              <Button onClick={this.props.swapModal} className={styles.loginButton}>
                Log In
              </Button>
            </div>
            <Button onClick={this.props.closeSignupModal} className={styles.closeButton}>
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
  classes: PropTypes.func,
  swapModal: PropTypes.func,
  isSignupModalOpen: PropTypes.func,
  closeSignupModal: PropTypes.func,
};

signupModal.defaultProps = {
  classes: PropTypes.func,
  swapModal: PropTypes.func,
  isSignupModalOpen: PropTypes.func,
  closeSignupModal: PropTypes.func,
};
export default withMobileDialog()(signupModal);
