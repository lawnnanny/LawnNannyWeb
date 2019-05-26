import React from 'react';
import { shallow } from 'enzyme';
import SvgIcon from '@material-ui/core/SvgIcon';
import RightArrowIcon from '.';

describe('RightArrow icon', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<RightArrowIcon/>);

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
  });
});
