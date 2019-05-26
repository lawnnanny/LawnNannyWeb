import React from 'react';
import { shallow } from 'enzyme';
import SvgIcon from '@material-ui/core/SvgIcon';
import CheckmarkIcon from '.';

describe('checkmark icon', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<CheckmarkIcon/>);

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
      expect(path.props().d).toEqual('M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z');
    });
  });
});
