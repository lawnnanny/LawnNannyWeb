import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Input, Grid, Button } from 'semantic-ui-react';
import { jsonForm } from '../pages/pipeline/jsonForms/locationForm';
import Styles from '../../styles/navBar';
import DynamicComponent from '../helpers/DynamicForm';

const navBar = (state, props) => (
  <div style={Styles.navbarContainer}>
    <Menu secondary style={Styles.loginSignupMenu}>
      <Menu.Menu position="right">
        <Modal
          style={Styles.modal}
          size="mini"
          trigger={
            <Menu.Item style={Styles.menuItem} onClick={props.openLoginModal}>
              <Button style={Styles.loginButton}>Login</Button>
            </Menu.Item>
          }
          open={props.isLoginModalOpen}
          onClose={props.closeModal}
          closeIcon
        >
          <Modal.Header style={Styles.modalHeader}>Welcome Back!</Modal.Header>
          <Modal.Description>
            <Grid style={Styles.loginGrid}>
              <Grid.Row>
                <Grid.Column>
                  <Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="someone@example.com"
                    onChange={props.setEmail}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Input
                    fluid
                    icon="lock"
                    type="password"
                    iconPosition="left"
                    placeholder="Password"
                    onChange={props.setPassword}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <Button style={Styles.modalButton} size="large" onClick={props.closeModal}>
                    Login
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal>
        <Modal
          style={Styles.modal}
          size="tiny"
          trigger={
            <Menu.Item style={Styles.menuItem} onClick={props.openSignupModal}>
              <Button style={Styles.signupButton}>Sign Up</Button>
            </Menu.Item>
          }
          open={props.isSignupModalOpen}
          onClose={props.closeModal}
          closeIcon
        >
          <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
          <Modal.Description>
            <DynamicComponent
              jsonForm={() => jsonForm}
              setRequest={state.setSignUp}
              form={'SignUp'}
            />
          </Modal.Description>
        </Modal>
      </Menu.Menu>
    </Menu>
  </div>
);
navBar.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isSignupModalOpen: PropTypes.bool.isRequired,
  isLoginModalOpen: PropTypes.bool.isRequired,
  openSignupModal: PropTypes.func.isRequired,
};
export default navBar;
