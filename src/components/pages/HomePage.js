import React from 'react';
import { Menu, Modal, Input, Grid, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Styles from '../../styles/HomePage';
import { statekeys } from '../../helpers/Common';

export const HomePage = props => (
  <div>
    <div style={Styles.navbarContainer}>
      <Menu secondary style={Styles.loginSignupMenu}>
        <Menu.Menu position="right">
          <Modal
            style={Styles.modal}
            size="mini"
            trigger={
              <Menu.Item style={Styles.menuItem} onClick={props.openLoginModal}>
                Login
              </Menu.Item>
            }
            open={props.isLoginModalOpen}
            onClose={props.closeLoginModal}
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
                    <Button
                      style={Styles.modalButton}
                      size="large"
                      onClick={props.closeLoginModal}
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
              <Menu.Item
                style={Styles.menuItem}
                onClick={props.openSignupModal}
              >
                Sign Up
              </Menu.Item>
            }
            open={props.isSignupModalOpen}
            onClose={props.closeSignupModal}
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
                    onChange={props.setFirstName}
                  />
                  <Form.Input
                    fluid
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={props.setLastName}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="someone@example.com"
                    onChange={props.setEmail}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Password"
                    type="password"
                    placeholder="Password"
                    onChange={props.setPassword}
                  />
                  <Form.Input
                    fluid
                    label="Repeat Password"
                    type="password"
                    placeholder="Repeat Password"
                    onChange={props.setPasswordRepeat}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Address"
                    placeholder="Address"
                    onChange={props.setAddress}
                  />
                  <Form.Input
                    fluid
                    label="City"
                    placeholder="City"
                    onChange={props.setCity}
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
                    onChange={props.setAddressState}
                  />
                  <Form.Input
                    fluid
                    label="Zipcode"
                    placeholder="Zipcode"
                    onChange={props.setZipcode}
                  />
                </Form.Group>
                <Form.Group style={Styles.signUpCheckbox}>
                  <Form.Checkbox label="I agree to the Terms and Conditions" />
                </Form.Group>
                <Form.Group>
                  <Form.Button
                    style={Styles.modalButton}
                    size="large"
                    onClick={props.closeSignupModal}
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
        <Link to="/requestPipeline">
          <Button style={Styles.pipelineButton} size="large">
            Make a Request
          </Button>
        </Link>
      </Grid.Row>
      <Grid.Row />
    </Grid>
  </div>
);

export default HomePage;
