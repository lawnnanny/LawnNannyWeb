import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styles from '../../styles/navigationBar/navBar.module.css';
import Styles from '../../styles/navigationBar/navBar';
import LoginModal from '../../ConnectedFeatures/ConnectedNavBar/ConnectedLoginModal';
import SignupModal from '../../ConnectedFeatures/ConnectedNavBar/ConnectedSignupModal';

export const navBar = props => (
  <Menu borderless className={styles.Menu}>
    <Menu.Item className={styles.menuItem}>
      <Dropdown icon="bars" className={styles.menuDropdown} button>
        <Dropdown.Menu className={styles.dropDownMenu}>
          <Dropdown.Item text="Find Requests" />
          <Dropdown.Item text="Settings" />
          <Dropdown.Item text="Terms of Service" />
          <Dropdown.Item text="What is Terra" />
          <Dropdown.Item text="More Info" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    <Link to="/HomePage">
      <Menu.Item className={styles.menuItem}>
        <Icon name="home" className={styles.homeIcon} />
      </Menu.Item>
    </Link>
    {props.isLoggedIn ? (
      <Menu.Menu position="right">
        <Icon name="user" className={styles.userIcon} />
        <Button onClick={props.setLoggedIn} className={styles.logoutButton}>
          Logout
        </Button>
      </Menu.Menu>
    ) : (
      <Menu.Menu position="right">
        <LoginModal loginButton={Styles.loginButton} history={props.history} />
        <SignupModal signupButton={Styles.signupButton} history={props.history} />
      </Menu.Menu>
    )}
  </Menu>
);

navBar.propTypes = {
  setLoggedIn: PropTypes.func,
  history: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

navBar.defaultProps = {
  setLoggedIn: PropTypes.func,
  history: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

export default navBar;