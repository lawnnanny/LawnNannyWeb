import React from 'react';
import { Menu, Dropdown, Icon, Button, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';
import Styles from '../../styles/helpers/navBar';
import LoginModal from '../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../connectedComponents/helpers/ConnectedSignupModal';

const RequestButton = styled(Button)`
  &[style] {
    :hover {
      background: #1205ff !important;
      color: white !important;
    }
  }
`;
export const navBar = props => (
  <Menu borderless style={Styles.Menu}>
    <Menu.Item style={Styles.menuItem}>
      <Button
        icon
        onClick={() => {
          props.handleButtonClick();
        }}
        style={Styles.barsButton}
      >
        <Icon name="bars" style={Styles.menuDropdown} />
      </Button>
    </Menu.Item>
    {props.isLoggedIn ? (
      <Menu.Menu position="right">
        <Menu.Item style={Styles.menuItem}>
          <RequestButton style={Styles.requestButton}>Your Requests</RequestButton>
        </Menu.Item>
        <Menu.Item style={Styles.menuItem}>
          <Dropdown
            icon={{ name: 'user', circular: true, style: Styles.userIcon }}
            style={Styles.userMenu}
          >
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
      <Menu.Menu position="right" style={Styles.signupLoginMenu}>
        <Menu.Item style={Styles.menuItem}>
          <LoginModal loginButton={Styles.loginButton} history={props.history} />
        </Menu.Item>
        <Menu.Item style={Styles.menuItem}>
          <SignupModal signupButton={Styles.signupButton} history={props.history} />
        </Menu.Item>
      </Menu.Menu>
    )}
  </Menu>
);
export default navBar;
