import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import Styles from '../../styles/helpers/navBar';
import LoginModal from '../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../connectedComponents/helpers/ConnectedSignupModal';

export const navBar = props => (
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
    {props.isLoggedIn ? (
      <Menu.Menu position="right">
        <Dropdown icon="user" style={Styles.userMenu} button className="icon">
          <Dropdown.Menu style={Styles.dropDownMenu}>
            <Dropdown.Item style={Styles.logoutItem}>
              <Button onClick={props.setLoggedIn} style={Styles.logoutButton}>
                Logout
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button style={Styles.requestButton}>Your Requests</Button>
      </Menu.Menu>
    ) : (
      <Menu.Menu position="right">
        <LoginModal loginButton={Styles.loginButton} history={props.history} />
        <SignupModal signupButton={Styles.signupButton} history={props.history} />
      </Menu.Menu>
    )}
  </Menu>
);
export default navBar;
