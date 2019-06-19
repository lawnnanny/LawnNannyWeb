import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

export const SignupModal = props => (
  <div>
    <Button>Register</Button>
    <Dialog open={props.isSignupModalOpen} />
  </div>
);

SignupModal.propTypes = {
  isSignupModalOpen: PropTypes.func,
};

SignupModal.defaultProps = {
  isSignupModalOpen: PropTypes.func,
};
export default SignupModal;
