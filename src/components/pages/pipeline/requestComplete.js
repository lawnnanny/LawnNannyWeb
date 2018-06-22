import React from "react";
import { Container, Header, Button, Modal, Image } from "semantic-ui-react";
import dab from "../../../images/pipeline/dab.jfif";

export const comments = () => (
  <Container>
    <Header> Request Complete! </Header>
    <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Follow Your Request</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={dab} />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            Weve found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </Container>
);

export default comments;
