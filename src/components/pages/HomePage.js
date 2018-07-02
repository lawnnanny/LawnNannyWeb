import React from "react";
import PropTypes from "prop-types";
import { Menu, Modal, Input, Grid, Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Styles from '../../styles/HomePage';
import { statekeys } from '../../helpers/Common';

const HomePage = ({
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setPasswordRepeat,
  setAddress,
  setCity,
  setAddressState,
  setZipcode,
  openLoginModal,
  closeLoginModal,
  isLoginModalOpen,
  openSignupModal,
  closeSignupModal,
  isSignupModalOpen,
}) => (
  <div>
    <div style={Styles.navbarContainer}>
      <Menu secondary style={Styles.loginSignupMenu}>
        <Menu.Menu position="right">
          <Modal
            style={Styles.modal}
            size="mini"
            trigger={
              <Menu.Item style={Styles.menuItem} onClick={openLoginModal}>
                Login
              </Menu.Item>
            }
            open={isLoginModalOpen}
            onClose={closeLoginModal}
            closeIcon
          >
            <Modal.Header style={Styles.modalHeader}>
              Welcome Back!
            </Modal.Header>
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
                    <Button
                      style={Styles.modalButton}
                      size="large"
                      onClick={closeLoginModal}
                    >
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
                Sign Up
              </Menu.Item>
            }
            open={isSignupModalOpen}
            onClose={closeSignupModal}
            closeIcon
          >
            <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
            <Modal.Description>
              <Form style={Styles.signUpForm}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First Name"
                    color="white"
                    placeholder="First Name"
                    onChange={setFirstName}
                  />
                  <Form.Input
                    fluid
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={setLastName}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="someone@example.com"
                    onChange={setEmail}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Password"
                    type="password"
                    placeholder="Password"
                    onChange={setPassword}
                  />
                  <Form.Input
                    fluid
                    label="Repeat Password"
                    type="password"
                    placeholder="Repeat Password"
                    onChange={setPasswordRepeat}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Address"
                    placeholder="Address"
                    onChange={setAddress}
                  />
                  <Form.Input
                    fluid
                    label="City"
                    placeholder="City"
                    onChange={setCity}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Dropdown
                    fluid
                    label="State"
                    placeholder="State"
                    search
                    selection
                    options={statekeys}
                    onChange={setAddressState}
                  />
                  <Form.Input
                    fluid
                    label="Zipcode"
                    placeholder="Zipcode"
                    onChange={setZipcode}
                  />
                </Form.Group>
                <Form.Group style={Styles.signUpCheckbox}>
                  <Form.Checkbox label="I agree to the Terms and Conditions" />
                </Form.Group>
                <Form.Group>
                  <Form.Button
                    style={Styles.modalButton}
                    size="large"
                    onClick={closeSignupModal}
                  >
                    Submit
                  </Form.Button>
                </Form.Group>
              </Form>
            </Modal.Description>
          </Modal>
        </Menu.Menu>
      </Menu>
    </div>
    <Grid style={Styles.header} centered padded relaxed>
      <Grid.Row />
      <Grid.Row>
        <Link to="/pipeline">
          <Button style={Styles.pipelineButton} size="large">
            Make a Request
          </Button>
        </Link>
      </Grid.Row>
      <Grid.Row />
    </Grid>
  </div>
);

HomePage.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setPasswordRepeat: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setAddressState: PropTypes.func.isRequired,
  setZipcode: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  closeLoginModal: PropTypes.func.isRequired,
  isSignupModalOpen: PropTypes.bool.isRequired,
  isLoginModalOpen: PropTypes.bool.isRequired,
  openSignupModal: PropTypes.func.isRequired,
  closeSignupModal: PropTypes.func.isRequired
};

HomePage.defaultProps = {};

export default HomePage;
