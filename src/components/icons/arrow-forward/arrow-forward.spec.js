import React from 'react';
import { shallow } from 'enzyme';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForward from '.';

describe('Arrow Forward icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<ArrowForward />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is an arrow forward icon', () => {
    expect(wrapper.type()).toEqual(ArrowForwardIcon);
  });
});
