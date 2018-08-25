import React, { Component } from 'react';
import { TransitionablePortal, Segment, Button, Form, Grid } from 'semantic-ui-react';

export class StepByStepCreator extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      steps: [],
    };
  }

  toggleOpen = () => {
    const state = this.state;
    state.open = true;
    this.setState(state);
  }

  toggleClose = () => {
    const state = this.state;
    state.open = false;
    this.setState(state);
  }

  renderSteps = () => {
    this.state.steps.map(listItem => (
      <Segment>
        stuff
      </Segment>
    ));
  }

  render() {
    const { open } = this.state;
    return (
      <TransitionablePortal
        closeOnTriggerClick
        openOnTriggerClick
        onOpen={this.toggleOpen}
        onClose={this.toggleClose}
        trigger={
          <Button
            type="button"
            content={open ? 'Close Portal' : 'Open Portal'}
            negative={open}
            positive={!open}
          />
        }
      >
        <Grid centered columns={2} style={{ position: 'fixed', width: '100%', top: '50%', zIndex: 1000 }}>
          <Grid.Column>
            <Segment>
              { this.renderSteps() }
              <Form>
                <Form.Input label="Image Upload" type="file" />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>


      </TransitionablePortal>
    );
  }
}

export default StepByStepCreator;
