import React from 'react';
import Button from '@material-ui/core/Button';

const AccountPage = props => (
  <div>
    <Button onClick={props.closeLoginModal}>Login</Button>
    <h1> OR </h1>
    <Button onClick={props.closeSignupModal}>Signup</Button>
  </div>
);

export default AccountPage;
