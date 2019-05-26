import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';
import LoginModal from '../../containers/connected-login-modal';
import SignupModal from '../../containers/connected-signup-modal';
import Sidebar from './sidebar';
import { HomeIcon } from '../icons';

export const navBar = props => (
  <AppBar position="static" className={styles.Menu}>
    <div className={styles.leftMenuDiv}>
      <Sidebar />
      <Link to="/HomePage">
        <IconButton color="inherit" aria-label="Menu">
          <HomeIcon homeIcon={styles.homeIcon} />
        </IconButton>
      </Link>
    </div>
    <div className={styles.rightMenuDiv}>
      <LoginModal history={props.history} />
      <SignupModal history={props.history} />
    </div>
  </AppBar>
);

navBar.propTypes = {
  history: PropTypes.func,
};

navBar.defaultProps = {
  history: PropTypes.func,
};

export default navBar;
