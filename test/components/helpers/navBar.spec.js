import React from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import NavBar from '../../../src/components/helpers/navBar';
import LoginModalComponent from '../../../src/connectedComponents/helpers/ConnectedLoginModal';
import SignupModalComponent from '../../../src/connectedComponents/helpers/ConnectedSignupModal';

describe('navBar', () => {
  let wrapper;

  const renderComponent = () => shallow(<NavBar />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a menu', () => {
    expect(wrapper.type()).toEqual(Menu);
  });

  describe('dropdown item', () => {
    let sidebarButton;

    beforeEach(() => {
      sidebarButton = wrapper.childAt(0);
    });

    it('is a menu item', () => {
      expect(sidebarButton.type()).toEqual(Menu.Item);
    });

    describe('button', () => {
      let button;

      beforeEach(() => {
        button = sidebarButton.childAt(0);
      });

      it('is a button', () => {
        expect(button.type()).toEqual(Button);
      });
      describe('sidebar icon', () => {
        let sidebarIcon;

        beforeEach(() => {
          sidebarIcon = button.childAt(0);
        });

        it('is an icon', () => {
          expect(sidebarIcon.type()).toEqual(Icon);
        });
      });
    });
  });
  describe('Login/signup menu', () => {
    let loginSignupContainer;

    beforeEach(() => {
      loginSignupContainer = wrapper.childAt(1);
    });

    it('is a menu subcomponent', () => {
      expect(loginSignupContainer.type()).toEqual(Menu.Menu);
    });

    it('is positioned correctly', () => {
      expect(loginSignupContainer.props().position).toEqual('right');
    });
    describe('Login modal item', () => {
      let loginModalItem;

      beforeEach(() => {
        loginModalItem = loginSignupContainer.childAt(0);
      });

      it('is a menu item', () => {
        expect(loginModalItem.type()).toEqual(Menu.Item);
      });
      describe('Login modal', () => {
        let loginModal;

        beforeEach(() => {
          loginModal = loginModalItem.childAt(0);
        });

        it('is a login component', () => {
          expect(loginModal.type()).toEqual(LoginModalComponent);
        });
      });
    });
    describe('Signup modal item', () => {
      let signupModalItem;

      beforeEach(() => {
        signupModalItem = loginSignupContainer.childAt(1);
      });

      it('is a menu item', () => {
        expect(signupModalItem.type()).toEqual(Menu.Item);
      });
      describe('Signup modal', () => {
        let signupModal;

        beforeEach(() => {
          signupModal = signupModalItem.childAt(0);
        });

        it('is a signup component', () => {
          expect(signupModal.type()).toEqual(SignupModalComponent);
        });
      });
    });
  });
});
