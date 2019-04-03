import React from 'react';
import { Modal, Button, Segment, Divider, Input } from 'semantic-ui-react';
import styles from '../../../styles/requestPipeline/requestReview/modalReview.module.css';

export const reviewModal = () => (
  <Modal
    className={styles.modal}
    size="small"
    trigger={
      <Button size="large" className={styles.modalButton}>
        Submit Request
      </Button>
    }
  >
    <Modal.Header>To Make A Request Please...</Modal.Header>
    <Modal.Content>
      <Segment className={styles.segment}>
        <Input
          className={styles.Input}
          placeholder="Your Email"
          action={
            <Button size="large" className={styles.signUpButton}>
              Sign Up Now{' '}
            </Button>
          }
          actionPosition="right"
        />
        <Divider horizontal>Or</Divider>
        <Button fluid size="large" className={styles.loginButton}>
          Log In
        </Button>
      </Segment>
    </Modal.Content>
  </Modal>
);
export default reviewModal;
