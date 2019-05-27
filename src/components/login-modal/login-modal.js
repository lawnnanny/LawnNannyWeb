import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './login-modal.module.css';
import { CloseIcon } from '../icons';

const styling = {
  paperOverride: {
    width: '25em',
    height: '40em',
    marginTop: '5em',
    margin: '0em',
  },
};

class loginModal extends Component {
  constructor() {
    super();
    this.state = {
      loginUserError: null,
      open: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={styles.loginDiv}>
        <Button size="large" onClick={this.props.closeLoginModal} className={styles.loginButton}>
          Login
        </Button>
        <Dialog
          open={this.props.isLoginModalOpen}
          onClose={this.props.closeLoginModal}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.paperOverride }}
        >
          <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
            <h2 className={styles.headerText}> Welcome back! </h2>
          </DialogTitle>
          <DialogContent className={styles.loginContent}>
            <h3 className={styles.divider}> or </h3>
            <div className={styles.signupDiv}>
              <h2 className={styles.signupText}>Dont have an account?</h2>
              <Button onClick={this.props.swapModal} className={styles.signupButton}>
                Sign Up
              </Button>
            </div>
          </DialogContent>
          <DialogActions className={styles.modalAction}>
            <Button onClick={this.props.closeLoginModal} className={styles.closeButton}>
              <CloseIcon />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
loginModal.propTypes = {
  swapModal: PropTypes.func,
  isLoginModalOpen: PropTypes.func,
  classes: PropTypes.func,
  closeLoginModal: PropTypes.func,
};

loginModal.defaultProps = {
  swapModal: PropTypes.func,
  isLoginModalOpen: PropTypes.func,
  classes: PropTypes.func,
  closeLoginModal: PropTypes.func,
};
export default withStyles(styling)(loginModal);
