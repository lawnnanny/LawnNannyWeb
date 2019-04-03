import React from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import NavBar from '../../../../src/features/navigationBar/navBar';
import LoginModalComponent from '../../../../src/ConnectedFeatures/ConnectedNavBar/ConnectedLoginModal';
import SignupModalComponent from '../../../../src/ConnectedFeatures/ConnectedNavBar/ConnectedSignupModal';

describe('navBar', () => {
  let wrapper;

  const renderComponent = () => shallow(<NavBar isLoggedIn={false} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a menu', () => {
    expect(wrapper.type()).toEqual(Menu);
  });

  describe('dropdown item', () => {
    let dropdownItem;

    beforeEach(() => {
      dropdownItem = wrapper.childAt(0);
    });

    it('is a menu item', () => {
      expect(dropdownItem.type()).toEqual(Menu.Item);
    });

    describe('dropdown', () => {
      let dropdown;

      beforeEach(() => {
        dropdown = dropdownItem.childAt(0);
      });

      it('is a dropdown', () => {
        expect(dropdown.type()).toEqual(Dropdown);
      });
      describe('dropdown menu', () => {
        let dropdownMenu;

        beforeEach(() => {
          dropdownMenu = dropdown.childAt(0);
        });

        it('is a dropdown menu', () => {
          expect(dropdownMenu.type()).toEqual(Dropdown.Menu);
        });
      });
    });
  });
  describe('home link', () => {
    let homeLink;

    beforeEach(() => {
      homeLink = wrapper.childAt(1);
    });

    it('is a home link', () => {
      expect(homeLink.type()).toEqual(Link);
    });
    describe('home menu', () => {
      let homeMenu;

      beforeEach(() => {
        homeMenu = homeLink.childAt(0);
      });

      it('is a home menu', () => {
        expect(homeMenu.type()).toEqual(Menu.Item);
      });
      describe('home icon', () => {
        let homeIcon;

        beforeEach(() => {
          homeIcon = homeMenu.childAt(0);
        });

        it('is a home icon', () => {
          expect(homeIcon.type()).toEqual(Icon);
        });
      });
    });
  });
  describe('Login/signup menu', () => {
    let loginSignupContainer;

    beforeEach(() => {
      loginSignupContainer = wrapper.childAt(2);
    });

    it('is a menu subcomponent', () => {
      expect(loginSignupContainer.type()).toEqual(Menu.Menu);
    });

    it('is positioned correctly', () => {
      expect(loginSignupContainer.props().position).toEqual('right');
    });
    describe('Login modal', () => {
      let loginModal;

      beforeEach(() => {
        loginModal = loginSignupContainer.childAt(0);
      });

      it('is a login component', () => {
        expect(loginModal.type()).toEqual(LoginModalComponent);
      });
    });
    describe('Signup modal', () => {
      let signupModal;

      beforeEach(() => {
        signupModal = loginSignupContainer.childAt(1);
      });

      it('is a signup component', () => {
        expect(signupModal.type()).toEqual(SignupModalComponent);
      });
    });
  });
});
