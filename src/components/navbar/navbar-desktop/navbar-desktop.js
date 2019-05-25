import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';
import styles from '../navbar.module.css';
import LoginModal from '../../../containers/connected-login-modal';
import SignupModal from '../../../containers/connected-signup-modal';
import Sidebar from '../sidebar';

function HomeIcon(props) {
  return (
    <SvgIcon {...props} className={styles.homeIcon}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const NavbarDesktop = props => (
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
      {props.isLoggedIn ? (
        <div>
          <SvgIcon>
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
          </SvgIcon>
        </div>
      ) : (
        <React.Fragment>
          <LoginModal history={props.history} />
          <SignupModal history={props.history} />
        </React.Fragment>
      )}
    </div>
  </AppBar>
);

NavbarDesktop.propTypes = {
  history: PropTypes.func,
  isLoggedIn: PropTypes.func,
};

NavbarDesktop.defaultProps = {
  history: PropTypes.func,
  isLoggedIn: PropTypes.func,
};

export default NavbarDesktop;
