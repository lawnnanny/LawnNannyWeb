import React from 'react';
import { Segment } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import DynamicDisplayComponent from '../../../src/components/helpers/DynamicDisplay';

describe('DynamicDisplay', () => {
  let wrapper;

  const renderComponent = () => shallow(<DynamicDisplayComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  })

  it('is wrapped in a segment', () => {
    expect(wrapper.type()).toEqual(Segment);
  })
});
