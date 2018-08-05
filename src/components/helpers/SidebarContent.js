import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';
import Styles from '../../styles/helpers/SidebarContent';

export const SidebarContent = () => (
  <div>
    <Link to="/HomePage" style={Styles.homeItem}>
      <Menu.Item>
        <Icon name="home" />
        Home
      </Menu.Item>
    </Link>
    <Menu.Item style={Styles.buttonItem}>
      <Button size="huge" style={Styles.requestButton}>
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
export default SidebarContent;
