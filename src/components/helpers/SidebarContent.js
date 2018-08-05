import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';
import Styles from '../../styles/helpers/SidebarContent';

export default class SidebarContent extends Component {
  constructor() {
    super();
    this.state = { request: false };
  }
  requestChange = () => this.setState({ request: !this.state.request });
  render() {
    return this.state.request ? (
      <Menu.Item>
        <Button
          style={Styles.menuButton}
          onClick={() => {
            this.requestChange();
          }}
        >
          Return to Menu
        </Button>
      </Menu.Item>
    ) : (
      <div>
        <Link to="/HomePage" style={Styles.homeItem}>
          <Menu.Item>
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Menu.Item style={Styles.buttonItem}>
          <Button
            size="huge"
            style={Styles.requestButton}
            onClick={() => {
              this.requestChange();
            }}
          >
            Show Requests
          </Button>
        </Menu.Item>
        <Link to="/HomePage" style={Styles.aboutItem}>
          <Menu.Item>
            <Icon name="info" style={Styles.aboutIcon} />
            About Terra
          </Menu.Item>
        </Link>
        <Link to="/HomePage">
          <Menu.Item style={Styles.termsItem}>Terms of Service</Menu.Item>
        </Link>
      </div>
    );
  }
}
