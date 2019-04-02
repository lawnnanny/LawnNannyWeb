import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { signupJsonForm } from '../pages/pipeline/jsonForms/signupForm';
import styles from '../../styles/helpers/signupModal.module.css';
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
        className={styles.modal}
        size="tiny"
        trigger={
          <Menu.Item className={styles.menuItem}>
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
        <Modal.Header className={styles.modalHeader}>Sign Up!</Modal.Header>
        <Modal.Description>
          <div>
            {this.state.registerUserError && (
              <InlineErrorComponent
                text={this.state.registerUserError}
                pointing
                className={styles.InlineError}
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
  destination: PropTypes.string,
  fluid: PropTypes.bool,
  signupButton: PropTypes.func,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};

signupModal.defaultProps = {
  size: PropTypes.string,
  destination: PropTypes.string,
  fluid: PropTypes.bool,
  signupButton: PropTypes.func,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};
export default signupModal;
