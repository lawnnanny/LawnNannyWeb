import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';
import styles from '../../styles/helpers/navBar.module.css';
import LoginModal from '../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../connectedComponents/helpers/ConnectedSignupModal';
import Sidebar from './sidebar';

function HomeIcon(props) {
  return (
    <SvgIcon {...props} className={styles.homeIcon}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const navBar = props => (
  <AppBar position="static" className={styles.Menu}>
    <div className={styles.leftMenuDiv}>
      <Sidebar />
      <Link to="/HomePage">
        <IconButton color="inherit" aria-label="Menu">
          <HomeIcon />
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
