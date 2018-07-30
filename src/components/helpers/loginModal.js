import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { loginJsonForm } from '../pages/pipeline/jsonForms/loginForm';
import Styles from '../../styles/helpers/loginModal';
import DynamicComponent from '../helpers/DynamicForm';

export const loginModal = props => (
  <Modal
    style={Styles.modal}
    size="mini"
    trigger={
      <Menu.Item style={Styles.menuItem}>
        <Button size={props.size} fluid={props.fluid} style={props.loginButton}>
          Login
        </Button>
      </Menu.Item>
    }
    closeIcon
  >
    <Modal.Header style={Styles.modalHeader}>Welcome Back!</Modal.Header>
    <Modal.Description>
      <DynamicComponent
        jsonForm={() => loginJsonForm}
        setRequest={props.login}
        form={'Login'}
        route={() => {}}
        styling={Styles}
      />
    </Modal.Description>
  </Modal>
);
loginModal.propTypes = {
  size: PropTypes.string,
  fluid: PropTypes.bool,
  loginButton: PropTypes.func,
  login: PropTypes.func,
};

loginModal.defaultProps = {
  size: PropTypes.string,
  fluid: PropTypes.bool,
  loginButton: PropTypes.func,
  login: PropTypes.func,
};
export default loginModal;
