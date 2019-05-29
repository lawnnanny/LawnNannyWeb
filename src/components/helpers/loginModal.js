import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import styles from '../../styles/helpers/loginModal.module.css';
import LoginForm from './loginForm';

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
          fullScreen={this.props.fullScreen}
          open={this.props.isLoginModalOpen}
          onClose={this.props.closeLoginModal}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.paperOverride }}
          className={styles.Dialog}
        >
          <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
            <h2 className={styles.headerText}> Lawn Nanny </h2>
          </DialogTitle>
          <DialogContent className={styles.loginContent}>
            <LoginForm />
            <div className={styles.signupDiv}>
              <h2 className={styles.signupText}>Dont have an account?</h2>
              <Button onClick={this.props.swapModal} className={styles.signupButton}>
                Sign Up
              </Button>
            </div>
          </DialogContent>
          <DialogActions className={styles.modalAction}>
            <Button onClick={this.props.closeLoginModal} className={styles.closeButton}>
              <SvgIcon className={styles.closeIcon}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </SvgIcon>
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
export default withMobileDialog()(loginModal);
