import React from 'react';
import { Menu, Modal, Button, Dropdown } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import NavBar from '../../../src/components/helpers/navBar';

import DynamicComponent from '../../../src/components/helpers/DynamicForm';

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

    describe('Login Modal', () => {
      let loginModal;

      beforeEach(() => {
        loginModal = loginSignupContainer.childAt(0);
      });

      it('is a modal', () => {
        expect(loginModal.type()).toEqual(Modal);
      });

      it('is a mini modal', () => {
        expect(loginModal.props().size).toEqual('mini');
      });

      it('displays a close modal button', () => {
        expect(loginModal.props().closeIcon).toBeTruthy();
      });

      describe('Login Modal trigger', () => {
        let loginModalTrigger;

        beforeEach(() => {
          loginModalTrigger = shallow(loginModal.props().trigger);
        });

        it('is a menu item', () => {
          const expectedType = shallow(<Menu.Item />).type();

          expect(loginModalTrigger.type()).toEqual(expectedType);
        });
        describe('Login Modal Button', () => {
          let loginModalButton;
          beforeEach(() => {
            loginModalButton = loginModalTrigger.childAt(0);
          });

          it('is a modal button', () => {
            expect(loginModalButton.type()).toEqual(Button);
          });
          it('it displays the correct text', () => {
            const buttonText = loginModalButton.childAt(0);
            expect(buttonText.text()).toEqual('Login');
          });
        });
      });

      describe('Login Modal Header', () => {
        let loginModalHeader;

        beforeEach(() => {
          loginModalHeader = loginModal.childAt(0);
        });

        it('is a modal header', () => {
          expect(loginModalHeader.type()).toEqual(Modal.Header);
        });

        it('displays the correct text', () => {
          const loginModalHeaderText = loginModalHeader.childAt(0);

          expect(loginModalHeaderText.text()).toEqual('Welcome Back!');
        });
      });

      describe('Login Modal Description', () => {
        let loginModalDescription;

        beforeEach(() => {
          loginModalDescription = loginModal.childAt(1);
        });

        it('is a modal description', () => {
          expect(loginModalDescription.type()).toEqual(Modal.Description);
        });

        describe('Dynamic Form Description', () => {
          let loginDescriptionForm;

          beforeEach(() => {
            loginDescriptionForm = loginModalDescription.childAt(0);
          });

          it('is a dynamic component', () => {
            expect(loginDescriptionForm.type()).toEqual(DynamicComponent);
          });
        });
      });
    });

    describe('Signup Modal', () => {
      let signupModal;

      beforeEach(() => {
        signupModal = loginSignupContainer.childAt(1);
      });

      it('is a modal', () => {
        expect(signupModal.type()).toEqual(Modal);
      });

      it('is a tiny modal', () => {
        expect(signupModal.props().size).toEqual('tiny');
      });

      it('displays a close icon', () => {
        expect(signupModal.props().closeIcon).toBeTruthy();
      });

      describe('Signup Modal trigger', () => {
        let signupModalTrigger;

        beforeEach(() => {
          signupModalTrigger = shallow(signupModal.props().trigger);
        });

        it('is a menu item', () => {
          const expectedType = shallow(<Menu.Item />).type();

          expect(signupModalTrigger.type()).toEqual(expectedType);
        });
        describe('signup Modal Button', () => {
          let signupModalButton;
          beforeEach(() => {
            signupModalButton = signupModalTrigger.childAt(0);
          });

          it('is a modal button', () => {
            expect(signupModalButton.type()).toEqual(Button);
          });
          it('it displays the correct text', () => {
            const buttonText = signupModalButton.childAt(0);
            expect(buttonText.text()).toEqual('Sign Up');
          });
        });
      });

      describe('Signup Modal Header', () => {
        let signupModalHeader;

        beforeEach(() => {
          signupModalHeader = signupModal.childAt(0);
        });

        it('is a modal header', () => {
          expect(signupModalHeader.type()).toEqual(Modal.Header);
        });

        it('displays the correct message', () => {
          const signupModalHeaderText = signupModalHeader.childAt(0);

          expect(signupModalHeaderText.text()).toEqual('Sign Up!');
        });
      });

      describe('Signup Modal Description', () => {
        let signupModalDescription;

        beforeEach(() => {
          signupModalDescription = signupModal.childAt(1);
        });

        it('is a modal description', () => {
          expect(signupModalDescription.type()).toEqual(Modal.Description);
        });

        describe('Signup Modal Form', () => {
          let signupModalForm;

          beforeEach(() => {
            signupModalForm = signupModalDescription.childAt(0);
          });

          it('is a dynamic form', () => {
            expect(signupModalForm.type()).toEqual(DynamicComponent);
          });
        });
      });
    });
  });
});
