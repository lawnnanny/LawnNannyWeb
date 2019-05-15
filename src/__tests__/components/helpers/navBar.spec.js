import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import NavBar from '../../../../src/components/helpers/navBar';
import Sidebar from '../../../../src/components/helpers/sidebar';
import LoginModalComponent from '../../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModalComponent from '../../../connectedComponents/helpers/ConnectedSignupModal';

describe('navBar', () => {
  let wrapper;

  const renderComponent = () => shallow(<NavBar isLoggedIn={false} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is an app bar', () => {
    expect(wrapper.type()).toEqual(AppBar);
  });

  describe('lefthand div', () => {
    let leftDiv;

    beforeEach(() => {
      leftDiv = wrapper.childAt(0);
    });

    it('is a div', () => {
      expect(leftDiv.type()).toEqual('div');
    });
    describe('sidebar', () => {
      let sidebar;

      beforeEach(() => {
        sidebar = leftDiv.childAt(0);
      });

      it('is a sidebar', () => {
        expect(sidebar.type()).toEqual(Sidebar);
      });
    });
    describe('link', () => {
      let link;

      beforeEach(() => {
        link = leftDiv.childAt(1);
      });

      it('is a link', () => {
        expect(link.type()).toEqual(Link);
      });
      describe('home button', () => {
        let homeButton;

        beforeEach(() => {
          homeButton = link.childAt(0);
        });

        it('is a icon button', () => {
          expect(homeButton.type()).toEqual(IconButton);
        });
      });
    });
  });
  describe('righthand div', () => {
    let rightDiv;

    beforeEach(() => {
      rightDiv = wrapper.childAt(1);
    });

    it('is a div', () => {
      expect(rightDiv.type()).toEqual('div');
    });
    describe('loginModal', () => {
      let loginModal;

      beforeEach(() => {
        loginModal = rightDiv.childAt(0);
      });

      it('is a login modal', () => {
        expect(loginModal.type()).toEqual(LoginModalComponent);
      });
    });
    describe('signupModal', () => {
      let signupModal;

      beforeEach(() => {
        signupModal = rightDiv.childAt(1);
      });

      it('is a signup modal', () => {
        expect(signupModal.type()).toEqual(SignupModalComponent);
      });
    });
  });
});
