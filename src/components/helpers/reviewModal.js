import React from 'react';
import { Modal, Button, Segment, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import Styles from '../../styles/helpers/reviewModal';
import LoginModal from '../helpers/loginModal';
import SignupModal from '../helpers/signupModal';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;

export const pipelineSignup = () => (
  <Modal
    style={Styles.modal}
    size="small"
    trigger={
      <ButtonDiv>
        <Button size="big" floated="right" style={Styles.modalButton}>
          Submit Request
        </Button>
      </ButtonDiv>
    }
  >
    <Modal.Header style={Styles.header}>To Make A Request Please...</Modal.Header>
    <Modal.Content style={Styles.content}>
      <Segment style={Styles.segment}>
        <SignupModal size="big" fluid signupButton={Styles.signupButton} />
        <Divider horizontal style={Styles.divider}>
          Or
        </Divider>
        <LoginModal size="big" fluid loginButton={Styles.loginButton} />
      </Segment>
    </Modal.Content>
  </Modal>
);
export default pipelineSignup;
