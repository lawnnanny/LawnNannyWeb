import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { loginJsonForm } from '../pages/pipeline/jsonForms/loginForm';
import styles from '../../styles/helpers/loginModal.module.css';
import Styles from '../../styles/helpers/loginModal';
import DynamicComponent from '../helpers/DynamicForm';
import { loginUser } from '../../networkRequests/userRequests';
import InlineErrorComponent from './InlineError';

export class loginModal extends Component {
  constructor() {
    super();
    this.state = {
      loginUserError: null,
    };
  }

  render() {
    return (
      <Modal
        className={styles.modal}
        size="mini"
        trigger={
          <Menu.Item className={styles.menuItem}>
            <Button size={this.props.size} fluid={this.props.fluid} style={this.props.loginButton}>
              Login
            </Button>
          </Menu.Item>
        }
        closeIcon
      >
        <Modal.Header className={styles.modalHeader}>Welcome Back!</Modal.Header>
        <Modal.Description>
          <div>
            {this.state.loginUserError && (
              <InlineErrorComponent
                text={this.state.loginUserError}
                pointing
                className={styles.InlineError}
              />
            )}
          </div>
          <DynamicComponent
            jsonForm={() => loginJsonForm}
            setRequest={() => {}}
            form={'Login'}
            net
            route={(data) => {
              const serverResponse = loginUser({
                username: data.email.entry,
                password: data.password.entry,
              });
              serverResponse.then((response) => {
                if (response.success) {
                  if (this.props.requestInProgress) {
                    this.props.requestInProgress(5);
                  }
                  this.props.login(data);
                  this.props.history.push(this.props.destination);
                } else {
                  const currentState = this.state;
                  currentState.loginUserError = 'Username or Password does not match';
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
loginModal.propTypes = {
  size: PropTypes.string,
  fluid: PropTypes.bool,
  loginButton: PropTypes.func,
  login: PropTypes.func,
  requestInProgress: PropTypes.func,
  destination: PropTypes.string,
  history: PropTypes.func,
};

loginModal.defaultProps = {
  size: PropTypes.string,
  fluid: PropTypes.bool,
  loginButton: PropTypes.func,
  login: PropTypes.func,
  requestInProgress: PropTypes.func,
  destination: PropTypes.string,
  history: PropTypes.func,
};
export default loginModal;
