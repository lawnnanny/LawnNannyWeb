import React, { Component } from 'react';
import { TransitionablePortal } from 'semantic-ui-react';

export class StepBystepCreator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <TransitionablePortal>
        stuff
      </TransitionablePortal>
    );
  }
}

export default StepBystepCreator;
