import React from "react";
import {
  Button,
  Form,
  TextArea,
  Segment,
  Header,
  Modal,
  Image,
  Divider
} from "semantic-ui-react";
import dab from "../../../images/pipeline/dab.jfif";

export const comments = () => (
  <Segment padded>
    <Header as="h2">Please provide additional information to help us</Header>
    <Form>
      <TextArea
        autoHeight
        placeholder="Try adding multiple lines"
        style={{ minHeight: 100 }}
      />
    </Form>
    <Segment.Group>
      <Modal
        trigger={
          <Button positive fluid>
            Submit Request
          </Button>
        }
      >
        <Modal.Header>Follow Your Request</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={dab} />
          <Modal.Description>
            <Segment padded>
              <Button primary fluid>
                Login/SignUp
              </Button>
              <Divider horizontal>Or</Divider>
              <Button secondary fluid>
                Continue as Guest
              </Button>
            </Segment>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Segment.Group>
  </Segment>
);

export default comments;
