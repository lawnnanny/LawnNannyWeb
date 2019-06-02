import React from 'react';
import { shallow } from 'enzyme';
import HomeIcon from '@material-ui/icons/Home';
import Home from '.';

describe('Home icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Home />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a home icon', () => {
    expect(wrapper.type()).toEqual(HomeIcon);
  });
});
