import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import Styles from '../../styles/helpers/signupModal';
import DynamicComponent from '../helpers/DynamicForm';
import { createUser } from '../../networkRequests/userRequests';

export const signupModal = props => (
  <Modal
    style={Styles.modal}
    size="tiny"
    trigger={
      <Menu.Item style={Styles.menuItem}>
        <Button
          size={props.size}
          onclick={() => {}}
          fluid={props.fluid}
          style={props.signupButton}
        >
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
        route={() => {
<<<<<<< HEAD
          console.log(props);
=======
          if (props.requestInProgress) {
            props.requestInProgress(5);
          }
          props.history.push(props.destination);
>>>>>>> 63d3d4c92bb6808fea22292432988665b6992428
        }}
        styling={Styles}
      />
    </Modal.Description>
  </Modal>);
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
