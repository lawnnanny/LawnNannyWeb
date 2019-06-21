import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import React from 'react';
import PropTypes from 'prop-types';
import styles from './register.module.css';

export const SignupModal = props => (
  <div>
    <Button className={styles.registerButton}>Register</Button>
    <Dialog open={props.isSignupModalOpen} >
      <DialogTitle>
        Get Started
      </DialogTitle>
    </Dialog>
  </div>
);

SignupModal.propTypes = {
  isSignupModalOpen: PropTypes.func,
};

SignupModal.defaultProps = {
  isSignupModalOpen: PropTypes.func,
};
export default SignupModal;
