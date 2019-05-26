import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import styles from './signup-modal.module.css';
import { XMarkIcon } from '../icons';

const styling = {
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
      <div className={styles.signupDiv}>
        <Button size="large" onClick={this.props.closeSignupModal} className={styles.signupButton}>
          Sign Up
        </Button>
        <Dialog
          open={this.props.isSignupModalOpen}
          onClose={this.props.closeSignupModal}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.paperOverride }}
        >
          <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
            <h2 className={styles.headerText}> Sign Up! </h2>
          </DialogTitle>
          <DialogContent className={styles.loginContent}>
            <h3 className={styles.divider}> or </h3>
            <div className={styles.loginDiv}>
              <h2 className={styles.loginText}>Already have an account?</h2>
              <Button onClick={this.props.swapModal} className={styles.loginButton}>
                Log In
              </Button>
            </div>
          </DialogContent>
          <DialogActions className={styles.modalAction}>
            <Button onClick={this.props.closeSignupModal} className={styles.closeButton}>
              <XMarkIcon />
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
export default withStyles(styling)(signupModal);
