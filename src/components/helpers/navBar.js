import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Button, Sidebar, Segment, Header } from 'semantic-ui-react';
import Styles from '../../styles/helpers/navBar';
import LoginModal from '../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../connectedComponents/helpers/ConnectedSignupModal';

export default class navBar extends Component {
  state = { visible: false };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <Menu borderless style={Styles.Menu}>
        <Menu.Item style={Styles.menuItem}>
          <Icon name="bars" style={Styles.menuDropdown} onClick={this.handleButtonClick} />
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width="thin"
            >
              <Menu.Item as="a">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="gamepad" />
                Games
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="camera" />
                Channels
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Header as="h3">Application Content</Header>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Menu.Item>
        {this.props.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item style={Styles.menuItem}>
              <Button style={Styles.requestButton}>Your Requests</Button>
            </Menu.Item>
            <Menu.Item style={Styles.menuItem}>
              <Dropdown icon="user circle" style={Styles.userMenu}>
                <Dropdown.Menu style={Styles.userDropMenu}>
                  <Dropdown.Item>
                    <Button style={Styles.logoutButton} onClick={() => this.props.setLoggedIn()}>
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
              <LoginModal loginButton={Styles.loginButton} history={this.props.history} />
            </Menu.Item>{' '}
            <Menu.Item style={Styles.menuItem}>
              <SignupModal signupButton={Styles.signupButton} history={this.props.history} />
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}
