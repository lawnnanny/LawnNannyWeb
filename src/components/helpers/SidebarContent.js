import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';
import Styles from '../../styles/helpers/SidebarContent';

export const SidebarContent = props => (
  <div>
    <Link to="/HomePage">
      <Menu.Item>
        <Icon name="home" />
        Home
      </Menu.Item>
    </Link>
    <Menu.Item>
      <Button size="huge" style={Styles.requestButton}>
        Show Requests
      </Button>
    </Menu.Item>
  </div>
);
export default SidebarContent;
