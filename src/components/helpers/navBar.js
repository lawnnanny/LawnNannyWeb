import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import Styles from '../../styles/helpers/navBar';
import LoginModal from '../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../connectedComponents/helpers/ConnectedSignupModal';

export const navBar = props => (
  <Menu borderless style={Styles.Menu}>
    <Menu.Item style={Styles.menuItem}>
      <Icon name="bars" style={Styles.menuDropdown} />
    </Menu.Item>
    {props.isLoggedIn ? (
      <Menu.Menu position="right">
        <Menu.Item style={Styles.menuItem}>
          <Button style={Styles.requestButton}>Your Requests</Button>
        </Menu.Item>
        <Menu.Item style={Styles.menuItem}>
          <Dropdown icon="user circle" style={Styles.userMenu}>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Button style={Styles.logoutButton} onClick={() => props.setLoggedIn()}>
                  logout
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
