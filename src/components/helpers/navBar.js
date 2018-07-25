import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal, Button, Dropdown, Icon } from 'semantic-ui-react';
import { jsonForm } from '../pages/pipeline/jsonForms/locationForm';
import Styles from '../../styles/navBar';
import bars from '../../images/bars.png';
import DynamicComponent from '../helpers/DynamicForm';

export const navBar = state => (
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
    <Menu.Menu position="right">
      <Modal
        style={Styles.modal}
        size="mini"
        trigger={
          <Menu.Item style={Styles.menuItem}>
            <Button style={Styles.loginButton}>Login</Button>
          </Menu.Item>
        }
        closeIcon
      >
        <Modal.Header style={Styles.modalHeader}>Welcome Back!</Modal.Header>
        <Modal.Description>
          <DynamicComponent
            jsonForm={() => jsonForm}
            setRequest={state.login}
            form={'Login'}
            route={() => {}}
          />
        </Modal.Description>
      </Modal>
      <Modal
        style={Styles.modal}
        size="tiny"
        trigger={
          <Menu.Item style={Styles.menuItem}>
            <Button style={Styles.signupButton}>Sign Up</Button>
          </Menu.Item>
        }
        closeIcon
      >
        <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
        <Modal.Description>
          <DynamicComponent
            jsonForm={() => jsonForm}
            form={'SignUp'}
            setRequest={state.signup}
            route={() => {}}
          />
        </Modal.Description>
      </Modal>
    </Menu.Menu>
  </Menu>
);
export default navBar;
