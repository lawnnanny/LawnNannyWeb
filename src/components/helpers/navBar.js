import React from 'react';
import { Menu, Modal, Button, Dropdown } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { jsonForm } from '../pages/pipeline/jsonForms/locationForm';
import Styles from '../../styles/navBar';
import DynamicComponent from '../helpers/DynamicForm';

export const navBar = state => (
  <Menu borderless style={Styles.Menu}>
    <Menu.Item style={Styles.menuItem}>
      <Dropdown icon="bars" style={Styles.menuDropdown} button className="icon" />
    </Menu.Item>
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
