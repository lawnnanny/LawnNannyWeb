import React from 'react';
import { shallow } from 'enzyme';
import CheckmarkIcon from '@material-ui/icons/Check';
import Checkmark from '.';

describe('Checkmark icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Checkmark />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a checkmark icon', () => {
    expect(wrapper.type()).toEqual(CheckmarkIcon);
  });
});
