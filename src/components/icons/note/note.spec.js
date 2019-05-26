import React from 'react';
import { shallow } from 'enzyme';
import SvgIcon from '@material-ui/core/SvgIcon';
import NoteIcon from '.';

describe('Note icon', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<NoteIcon/>);

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
      expect(path.props().d).toEqual('M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z');
    });
  });
});
