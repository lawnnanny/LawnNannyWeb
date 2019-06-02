import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { ArrowForwardIcon } from '../../../../components/icons';
import RequestOptionComponent from './';

describe('requestOption', () => {
  let wrapper;

  const renderComponent = () => shallow(<RequestOptionComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Link', () => {
    expect(wrapper.type()).toEqual(Link);
  });

  it('is the correct link', () => {
    expect(wrapper.props().to).toEqual('/pipeline/requestInformation');
  });

  describe('button', () => {
    let button;

    beforeEach(() => {
      button = wrapper.childAt(0);
    });

    it('is a button', () => {
      expect(button.type()).toEqual(Button);
    });

    describe('avatar', () => {
      let avatar;

      beforeEach(() => {
        avatar = button.childAt(0);
      });

      it('is a avatar', () => {
        expect(avatar.type()).toEqual(Avatar);
      });
    });
    describe('header', () => {
      let header;

      beforeEach(() => {
        header = button.childAt(1);
      });

      it('is a header', () => {
        expect(header.type()).toEqual('h2');
      });
    });
    describe('arrow right icon', () => {
      let arrowIcon;

      beforeEach(() => {
        arrowIcon = button.childAt(2);
      });

      it('is icon', () => {
        expect(arrowIcon.type()).toEqual(ArrowForwardIcon);
      });
    });
  });
});
