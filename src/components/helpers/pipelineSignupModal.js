import React, { Component } from 'react';
import { Modal, Button, Segment, Divider } from 'semantic-ui-react';
import Styles from '../../styles/pipelineSignupModal';

export const pipelineSignup = () => (
  <Modal
    size="small"
    trigger={
      <Button size="large" color="black">
        Make a Request
      </Button>
    }
  >
    <Modal.Header>To Make A Request Please...</Modal.Header>
    <Modal.Content>
      <Segment style={Styles.segment}>
        <Button positive size="large" fluid style={Styles.loginButton}>
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <Button secondary fluid size="large" style={Styles.signupButton}>
          Sign Up Now
        </Button>
      </Segment>
    </Modal.Content>
  </Modal>
);
export default pipelineSignup;
