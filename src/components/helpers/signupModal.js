import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import Styles from '../../styles/helpers/signupModal';
import DynamicComponent from '../helpers/DynamicForm';
import { createUser } from '../../networkRequests/userRequests';

const SignupButton = styled(Button)`
  &[style] {
    :hover {
      background: white !important;
      color: #20ad1d !important;
      border: 1px solid #20ad1d !important;
    }
  }
`;

export const signupModal = props => (
  <Modal
    style={Styles.modal}
    size="tiny"
    trigger={
      <Menu.Item style={Styles.menuItem}>
        <SignupButton
          size={props.size}
          onclick={() => {}}
          fluid={props.fluid}
          style={props.signupButton}
        >
          Sign Up
        </SignupButton>
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
        route={() => {
          if (props.requestInProgress) {
            props.requestInProgress(5);
          }
          props.history.push(props.destination);
        }}
        styling={Styles}
      />
    </Modal.Description>
  </Modal>
);
signupModal.propTypes = {
  size: PropTypes.string,
  fluid: PropTypes.bool,
  signupButton: PropTypes.func,
  signup: PropTypes.func,
};

signupModal.defaultProps = {
  size: PropTypes.string,
  fluid: PropTypes.bool,
  signupButton: PropTypes.func,
  signup: PropTypes.func,
};
export default signupModal;
