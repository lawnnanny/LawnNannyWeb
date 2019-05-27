import React from 'react';
import { shallow } from 'enzyme';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '.';

describe('Menu icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Menu />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a menu icon', () => {
    expect(wrapper.type()).toEqual(MenuIcon);
  });
});
