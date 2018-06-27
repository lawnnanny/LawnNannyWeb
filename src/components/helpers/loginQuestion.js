import React from "react";
import {Modal,Button,Segment,Divider} from "semantic-ui-react";

const loginQuestion = () => (
  <Modal
    trigger={
      <Button size="large" color='black'>Make a Request</Button>
    }
  >
    <Modal.Header>
      To make a request please...
    </Modal.Header>
<Modal.Content>
    <Segment padded>
        <Button size='large' color='green' fluid>
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <Button secondary fluid size='large'>
          Sign Up Now
        </Button>
      </Segment>
      </Modal.Content>
    </Modal>
)
export default loginQuestion
