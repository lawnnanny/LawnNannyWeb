import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Input, Grid, Button, Dropdown } from 'semantic-ui-react';
import { jsonForm } from '../pages/pipeline/jsonForms/locationForm';
import Styles from '../../styles/navBar';
import DynamicComponent from '../helpers/DynamicForm';

const navBar = ({
  setEmail,
  setPassword,
  openLoginModal,
  closeModal,
  isLoginModalOpen,
  openSignupModal,
  isSignupModalOpen,
}) => (
  <Menu borderless style={Styles.Menu}>
    <Menu.Item style={Styles.menuItem}>
      <Dropdown icon="bars" style={Styles.menuDropdown} button className="icon" />
    </Menu.Item>
    <Menu.Menu position="right">
      <Modal
        style={Styles.modal}
        size="mini"
        trigger={
          <Menu.Item style={Styles.menuItem} onClick={openLoginModal}>
            <Button style={Styles.loginButton}>Login</Button>
          </Menu.Item>
        }
        open={isLoginModalOpen}
        onClose={closeModal}
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
                  onChange={setEmail}
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
                  onChange={setPassword}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <Button style={Styles.modalButton} size="large" onClick={closeModal}>
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
          <Menu.Item style={Styles.menuItem} onClick={openSignupModal}>
            <Button style={Styles.signupButton}>Sign Up</Button>
          </Menu.Item>
        }
        open={isSignupModalOpen}
        onClose={closeModal}
        closeIcon
      >
        <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
        <Modal.Description>
          <DynamicComponent jsonForm={() => jsonForm} form={'SignUp'} />
        </Modal.Description>
      </Modal>
    </Menu.Menu>
  </Menu>
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
