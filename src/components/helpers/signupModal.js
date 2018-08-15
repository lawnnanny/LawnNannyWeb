import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import Styles from '../../styles/helpers/signupModal';
import DynamicComponent from '../helpers/DynamicForm';
import { createUser } from '../../networkRequests/userRequests';
import InlineErrorComponent from './InlineError';

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
          <div>
            {this.state.registerUserError && (
              <InlineErrorComponent
                text={this.state.registerUserError}
                pointing
                style={Styles.InlineError}
              />
            )}
          </div>
          <DynamicComponent
            jsonForm={() => signupJsonForm}
            form={'SignUp'}
            setRequest={() => {}}
            route={(signupDetailsJson) => {
              if (this.props.requestInProgress) {
                this.props.requestInProgress(5);
              }
              const serverResponse = createUser({
                email: signupDetailsJson.email.entry,
                password: signupDetailsJson.password.entry,
              });
              serverResponse.then((data) => {
                console.log(data);
                if (this.state.registerUserError !== null && data.success) {
                  this.props.history.push(this.props.destination);
                }
                if (!data.success) {
                  const currentState = this.state;
                  let message = '';
                  if (data.message.name === 'DupplicateError') {
                    message = 'Account with that username or email already exists!';
                  }
                  currentState.registerUserError = message;
                  this.setState(currentState);
                }
              });
            }}
            styling={Styles}
          />
        </Modal.Description>
      </Modal>
    );
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
