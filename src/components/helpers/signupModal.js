import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import Styles from '../../styles/helpers/navBar';
import DynamicComponent from '../helpers/DynamicForm';

export const signupModal = props => (
  <Modal
    style={Styles.modal}
    size="tiny"
    trigger={
      <Menu.Item style={Styles.menuItem}>
        <Button size={props.size} fluid={props.fluid} style={props.signupButton}>
          Sign Up
        </Button>
      </Menu.Item>
    }
    closeIcon
  >
    <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
    <Modal.Description>
      <DynamicComponent
        jsonForm={() => signupJsonForm}
        form={'SignUp'}
        setRequest={props.signup}
        route={() => {}}
      />
    </Modal.Description>
  </Modal>
);
export default signupModal;
