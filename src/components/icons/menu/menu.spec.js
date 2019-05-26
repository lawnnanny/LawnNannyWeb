import React from 'react';
import { shallow } from 'enzyme';
import SvgIcon from '@material-ui/core/SvgIcon';
import MenuIcon  from '.';

describe('Menu icon', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<MenuIcon/>);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is an SvgIcon', () => {
    expect(wrapper.type()).toEqual(SvgIcon);
  });
  describe('path', () => {
    let path;

    beforeEach(() => {
      path = wrapper.childAt(0);
    });

    it('is a path', () => {
      expect(path.type()).toEqual('path');
    });

    it('has correct d value', () => {
      expect(path.props().d).toEqual('M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z');
    });
  });
});
