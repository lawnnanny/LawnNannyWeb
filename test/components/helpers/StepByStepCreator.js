import React from 'react';
import { shallow } from 'enzyme';
import { TransitionablePortal } from 'semantic-ui-react';

import StepByStepCreatorComponent from '../../../src/components/helpers/StepByStepCreator';

describe('Step By Step Creator', () => {
  let wrapper;

  const renderComponent = () => shallow(<StepByStepCreatorComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a TransitionablePortal', () => {
    expect(wrapper.type()).toEqual(TransitionablePortal);
  });
});
