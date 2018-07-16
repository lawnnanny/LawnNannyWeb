import React, { Component } from 'react';
import { Modal, Button, Segment, Divider } from 'semantic-ui-react';

export const pipelineSignup = () => (
  <Modal
    trigger={
      <Button size="large" color="black">
        Make a Request
      </Button>
    }
  >
    <Modal.Header>To Make A Request Please...</Modal.Header>
    <Modal.Content>
      <Segment>
        <Button size="large" color="green" fluid>
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <Button secondary fluid size="large">
          Sign Up Now
        </Button>
      </Segment>
    </Modal.Content>
  </Modal>
);
export default pipelineSignup;
