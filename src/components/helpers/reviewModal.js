import React from 'react';
import { Modal, Button, Segment, Divider, Input } from 'semantic-ui-react';
import Styles from '../../styles/reviewModal';

export const reviewModal = () => (
  <Modal
    style={Styles.modal}
    size="small"
    trigger={
      <Button size="large" style={Styles.modalButton}>
        Submit Request
      </Button>
    }
  >
    <Modal.Header>To Make A Request Please...</Modal.Header>
    <Modal.Content>
      <Segment style={Styles.segment}>
        <Input
          style={Styles.Input}
          placeholder="Your Email"
          action={
            <Button size="large" style={Styles.signUpButton}>
              Sign Up Now{' '}
            </Button>
          }
          actionPosition="right"
        />
        <Divider horizontal>Or</Divider>
        <Button fluid size="large" style={Styles.loginButton}>
          Log In
        </Button>
      </Segment>
    </Modal.Content>
  </Modal>
);
export default reviewModal;
