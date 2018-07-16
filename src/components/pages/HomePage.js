import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Modal,
  Input,
  Grid,
  Button,
  Form,
  Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginQuestion from '../helpers/pipelineSignupModal';

import Styles from '../../styles/HomePage';
import { statekeys } from '../../helpers/Common';

export default class HomePage extends Component {
  state = { visible: true };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  render() {
    return (
      <div>
        <div style={Styles.navbarContainer}>
          <Menu secondary style={Styles.loginSignupMenu}>
            <Menu.Menu position="right">
              <Modal
                style={Styles.modal}
                size="mini"
                trigger={
                  <Menu.Item
                    style={Styles.menuItem}
                    onClick={this.props.openLoginModal}
                  >
                    Login
                  </Menu.Item>
                }
                open={this.props.isLoginModalOpen}
                onClose={this.props.closeLoginModal}
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
                          onChange={this.props.setEmail}
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
                          onChange={this.props.setPassword}
                        />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                      <Grid.Column width={6}>
                        <Button
                          style={Styles.modalButton}
                          size="large"
                          onClick={this.props.closeLoginModal}
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
                    onClick={this.props.openSignupModal}
                  >
                    Sign Up
                  </Menu.Item>
                }
                open={this.props.isSignupModalOpen}
                onClose={this.props.closeSignupModal}
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
                        onChange={this.props.setFirstName}
                      />
                      <Form.Input
                        fluid
                        label="Last Name"
                        placeholder="Last Name"
                        onChange={this.props.setLastName}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        label="Email"
                        placeholder="someone@example.com"
                        onChange={this.props.setEmail}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        label="Password"
                        type="password"
                        placeholder="Password"
                        onChange={this.props.setPassword}
                      />
                      <Form.Input
                        fluid
                        label="Repeat Password"
                        type="password"
                        placeholder="Repeat Password"
                        onChange={this.props.setPasswordRepeat}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        label="Address"
                        placeholder="Address"
                        onChange={this.props.setAddress}
                      />
                      <Form.Input
                        fluid
                        label="City"
                        placeholder="City"
                        onChange={this.props.setCity}
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
                        onChange={this.props.setAddressState}
                      />
                      <Form.Input
                        fluid
                        label="Zipcode"
                        placeholder="Zipcode"
                        onChange={this.props.setZipcode}
                      />
                    </Form.Group>
                    <Form.Group style={Styles.signUpCheckbox}>
                      <Form.Checkbox label="I agree to the Terms and Conditions" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Button
                        style={Styles.modalButton}
                        size="large"
                        onClick={this.props.closeSignupModal}
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
          <Grid.Row>
            <LoginQuestion />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

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
  isLoginModalOpen: PropTypes.bool.isRequired,
  openSignupModal: PropTypes.func.isRequired,
  closeSignupModal: PropTypes.func.isRequired,
  isSignupModalOpen: PropTypes.bool.isRequired
};
