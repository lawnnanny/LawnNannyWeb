import React from 'react';
import { Redirect } from 'react-router';

const AccountPage = (props) => {
  if (!props.isLoggedIn) {
    return <Redirect to="/HomePage" />;
  }
  return (
    <div>
      <h1> No Account Yet </h1>
    </div>
  );
};
export default AccountPage;
