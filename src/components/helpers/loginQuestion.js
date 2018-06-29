import React, { Component } from "react";
import { Modal, Button, Segment, Divider } from "semantic-ui-react";
import Styles from "../../styles/loginQuestion";

export default class loginQuestion extends Component {
  constructor() {
    super();
    this.state = { in: false };
  }
  toggleEnterState = () => {
    this.setState({ in: true });
  };

  render() {
    return (
      <Modal
        size="tiny"
        trigger={
          <Button size="large" color="black">
            Make a Request
          </Button>
        }
      >
        <Modal.Header style={Styles.header}>
          To Make A Request Please...
        </Modal.Header>
        <Modal.Content>
          <Segment style={Styles.segment}>
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
  }
}
