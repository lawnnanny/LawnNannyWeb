import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Styles from '../../styles/helpers/SidebarContent';

export const SidebarContent = () => (
  <div>
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
  </div>
);
export default SidebarContent;
