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
          <Dropdown.Item text="Home" onClick={() => props.history.push('/HomePage')} />
          <Dropdown.Item text="Settings" />
          <Dropdown.Item text="Terms of Service" />
          <Dropdown.Item text="What is Terra" />
          <Dropdown.Item text="More Info" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    {props.isLoggedIn ? (
      <Menu.Menu position="right">
        <Menu.Item style={Styles.menuItem}>
          <Button style={Styles.requestButton}>Your Requests</Button>
        </Menu.Item>
        <Menu.Item style={Styles.menuItem}>
          <Dropdown icon="user circle" style={Styles.userMenu}>
            <Dropdown.Menu style={Styles.userDropMenu}>
              <Dropdown.Item>
                <Button style={Styles.logoutButton} onClick={() => props.setLoggedIn()}>
                  Logout
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    ) : (
      <Menu.Menu position="right">
        <Menu.Item style={Styles.menuItem}>
          <LoginModal loginButton={Styles.loginButton} history={props.history} />
        </Menu.Item>{' '}
        <Menu.Item style={Styles.menuItem}>
          <SignupModal signupButton={Styles.signupButton} history={props.history} />
        </Menu.Item>
      </Menu.Menu>
    )}
  </Menu>
);
export default navBar;
