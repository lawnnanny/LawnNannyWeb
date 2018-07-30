import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import Styles from '../../styles/helpers/navBar';
import LoginModal from '../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../connectedComponents/helpers/ConnectedSignupModal';

export const navBar = () => (
  <Menu borderless style={Styles.Menu}>
    <Menu.Item style={Styles.menuItem}>
      <Dropdown icon="bars" style={Styles.menuDropdown} button className="icon">
        <Dropdown.Menu style={Styles.dropDownMenu}>
          <Dropdown.Item text="Find Requests" />
          <Dropdown.Item text="Settings" />
          <Dropdown.Item text="Terms of Service" />
          <Dropdown.Item text="What is Terra" />
          <Dropdown.Item text="More Info" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    <Link to="/HomePage">
      <Menu.Item style={Styles.menuItem}>
        <Icon name="home" style={Styles.homeIcon} />
      </Menu.Item>
    </Link>
    <Menu.Menu position="right">
      <LoginModal loginButton={Styles.loginButton} />
      <SignupModal signupButton={Styles.signupButton} />
    </Menu.Menu>
  </Menu>
);
export default navBar;
