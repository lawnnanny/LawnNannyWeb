import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Icon, Button, Sidebar } from 'semantic-ui-react';
import Styles from '../../styles/helpers/SidebarContent';

const MyItem = styled(Menu.Item)`
  &&& {
    :hover {
      background: #20ad1d;
      color: white !important;
    }
  }
`;
export const SidebarContent = props => (
  <Sidebar
    style={Styles.sidebar}
    as={Menu}
    animation="overlay"
    inverted
    vertical
    visible={props.visible}
  >
        <Menu.Item style={Styles.topItem}>
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
        <Link to="/HomePage" style={Styles.homeLink}>
          <MyItem style={Styles.homeItem}>
            <Icon name="home" />
            Home
          </MyItem>
        </Link>
        <Link to="/HomePage" style={Styles.homeLink}>
          <MyItem style={Styles.homeItem}>
            Nearby Requests
          </MyItem>
        </Link>
        <Link to="/HomePage" style={Styles.aboutLink}>
          <MyItem style={Styles.homeItem}>
            <Icon name="info" style={Styles.aboutIcon} />
            About Terra
          </MyItem>
        </Link>
        <Link to="/HomePage">
          <MyItem style={Styles.termsItem}>Terms of Service</MyItem>
        </Link>
      </Sidebar>
    );
export default SidebarContent;
