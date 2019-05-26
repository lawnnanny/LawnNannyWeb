import React from 'react';
import { shallow } from 'enzyme';
import SvgIcon from '@material-ui/core/SvgIcon';
import HomeIcon from '.';

describe('Home icon', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<HomeIcon/>);

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
      expect(path.props().d).toEqual('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z');
    });
  });
});
