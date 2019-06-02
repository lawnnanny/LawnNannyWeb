import React from 'react';
import { shallow } from 'enzyme';
import DollarIcon from '@material-ui/icons/AttachMoney';
import Dollar from '.';

describe('Dollar icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Dollar />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a dollar icon', () => {
    expect(wrapper.type()).toEqual(DollarIcon);
  });
});
