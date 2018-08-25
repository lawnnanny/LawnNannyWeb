import React, { Component } from 'react';
import { TransitionablePortal, Segment, Button } from 'semantic-ui-react';

export class StepBystepCreator extends Component {
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
      (
        <Segment>
            stuff
        </Segment>
      )
    ));
  }

  render() {
    return (
      <TransitionablePortal
        closeOnTriggerClick
        openOnTriggerClick
        onOpen={this.toggleOpen}
        onClose={this.toggleClose}
        trigger={
          <Button
            content={open ? 'Close Portal' : 'Open Portal'}
            negative={open}
            positive={!open}
          />
        }
      >
        <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
          stuff
        </Segment>
      </TransitionablePortal>
    );
  }
}

export default StepBystepCreator;
