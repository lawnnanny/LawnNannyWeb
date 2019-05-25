import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PropTypes from 'prop-types';
import styles from './navbar-mobile.module.css';
import LoginModal from '../../../containers/connected-login-modal';
import SignupModal from '../../../containers/connected-signup-modal';

const styling = {
  labelOverride: {
    fontSize: '1em',
  },
};

export const NavbarMobile = (props) => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={styles.bottomNav}
    >
      <BottomNavigationAction
        classes={{ label: props.classes.labelOverride }}
        className={styles.homeNav}
        label="Home"
        icon={
          <SvgIcon className={styles.homeIcon}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        }
      />
      <BottomNavigationAction
        className={styles.accountNav}
        classes={{ label: props.classes.labelOverride }}
        label="Account"
        icon={
          <React.Fragment>
            {props.isLoggedIn ? (
              <SvgIcon className={styles.accountIcon}>
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
              </SvgIcon>
            ) : (
              <React.Fragment>
                <LoginModal history={props.history} />
                <SignupModal history={props.history} />
              </React.Fragment>
            )}
          </React.Fragment>
        }
      />
      <BottomNavigationAction
        className={styles.barNav}
        classes={{ label: props.classes.labelOverride }}
        label="More"
        icon={
          <SvgIcon className={styles.menuIcon}>
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </SvgIcon>
        }
      />
    </BottomNavigation>
  );
};

NavbarMobile.propTypes = {
  history: PropTypes.func,
};

NavbarMobile.defaultProps = {
  history: PropTypes.func,
};

export default withStyles(styling)(NavbarMobile);
