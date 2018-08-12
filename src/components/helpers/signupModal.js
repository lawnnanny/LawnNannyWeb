import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import Styles from '../../styles/helpers/signupModal';
import DynamicComponent from '../helpers/DynamicForm';
import { createUser } from '../../networkRequests/userRequests';

export class signupModal extends Component {

  constructor() {
    super();
    this.state = {
      registerUserError: null,
    };
  }

  render() {
    return (
      <Modal
        style={Styles.modal}
        size="tiny"
        trigger={
          <Menu.Item style={Styles.menuItem}>
            <Button
              size={this.props.size}
              onclick={() => {}}
              fluid={this.props.fluid}
              style={this.props.signupButton}
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
            setRequest={this.props.signup}
            route={(signupDetailsJson) => {
              if (this.props.requestInProgress) {
                this.props.requestInProgress(5);
              }
              let serverResponse = createUser({
                email: signupDetailsJson.email,
                password: signupDetailsJson.password
              });
              console.log(serverResponse);
              if (this.state.registerUserError !== null) {
                this.props.history.push(this.props.destination);
              }
            }}
            styling={Styles}
          />
        </Modal.Description>
      </Modal>
    )
  }
}
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
