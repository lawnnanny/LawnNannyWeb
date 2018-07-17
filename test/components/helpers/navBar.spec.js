import React from 'react';
import { Menu, Modal, Grid, Input, Button, Form, Dropdown } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import Chance from 'chance';
import NavBar from '../../../src/components/helpers/navBar';
import * as Common from '../../../src/helpers/Common';
import DynamicComponent from '../../../src/components/helpers/DynamicForm';

describe('navBar', () => {
  let wrapper;
  let chance;

  const renderComponent = (props = {}) =>
    shallow(
      <NavBar
        setEmail={props.setEmail || jest.fn()}
        setPassword={props.setPassword || jest.fn()}
        openLoginModal={props.openLoginModal || jest.fn()}
        closeModal={props.closeModal || jest.fn()}
        isLoginModalOpen={
          props.isLoginModalOpen === undefined ? chance.bool() : props.isLoginModalOpen
        }
        openSignupModal={props.openSignupModal || jest.fn()}
        isSignupModalOpen={
          props.isSignupModalOpen === undefined ? chance.bool() : props.isSignupModalOpen
        }
      />,
    );

  beforeEach(() => {
    chance = Chance();
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

      it('is open depending on what the open prop is', () => {
        const fakeIsLoginModalOpen = chance.bool();

        wrapper = renderComponent({ isLoginModalOpen: fakeIsLoginModalOpen });
        loginSignupContainer = wrapper.childAt(1);
        loginModal = loginSignupContainer.childAt(0);

        expect(loginModal.props().open).toEqual(fakeIsLoginModalOpen);
      });

      describe('Login Modal trigger', () => {
        let loginModalTrigger;

        beforeEach(() => {
          loginModalTrigger = shallow(loginModal.props().trigger);
        });

        it('is a menu item', () => {
          const expectedType = shallow(<Menu.Item onClick={jest.fn()} />).type();

          expect(loginModalTrigger.type()).toEqual(expectedType);
        });

        it('opens the modal when clicked', () => {
          const mockOpenLoginModal = jest.fn();

          wrapper = renderComponent({ openLoginModal: mockOpenLoginModal });
          loginSignupContainer = wrapper.childAt(1);
          loginModal = loginSignupContainer.childAt(0);
          loginModalTrigger = shallow(loginModal.props().trigger);

          const loginModalTriggerOnClickHandler = loginModalTrigger.props().onClick;

          loginModalTriggerOnClickHandler();

          expect(mockOpenLoginModal).toHaveBeenCalledTimes(1);
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

        describe('Login Modal Description Grid', () => {
          let loginModalDescriptionGrid;

          beforeEach(() => {
            loginModalDescriptionGrid = loginModalDescription.childAt(0);
          });

          it('is a grid', () => {
            expect(loginModalDescriptionGrid.type()).toEqual(Grid);
          });

          it('contains three rows', () => {
            expect.assertions(3);

            const loginModalDescriptionGridRows = loginModalDescriptionGrid.children();

            loginModalDescriptionGridRows.forEach((row) => {
              expect(row.type()).toEqual(Grid.Row);
            });
          });

          it('contains a column inside of each row', () => {
            expect.assertions(3);

            const loginModalDescriptionGridRows = loginModalDescriptionGrid.children();

            loginModalDescriptionGridRows.forEach((row) => {
              const column = row.childAt(0);

              expect(column.type()).toEqual(Grid.Column);
            });
          });

          it('contains a row for the login button that is centered', () => {
            const loginButtonRow = loginModalDescriptionGrid.childAt(2);

            expect(loginButtonRow.props().centered).toBeTruthy();
          });

          it('contains a row for the login button that has a column with a width of 6', () => {
            const loginButtonRow = loginModalDescriptionGrid.childAt(2);
            const loginButtonColumn = loginButtonRow.childAt(0);

            expect(loginButtonColumn.props().width).toEqual(6);
          });

          describe('Email Input', () => {
            let emailInput;

            beforeEach(() => {
              const emailInputRow = loginModalDescriptionGrid.childAt(0);
              const emailInputColumn = emailInputRow.childAt(0);

              emailInput = emailInputColumn.childAt(0);
            });

            it('is an input', () => {
              expect(emailInput.type()).toEqual(Input);
            });

            it('has a fluid width', () => {
              expect(emailInput.props().fluid).toBeTruthy();
            });

            it('has a user icon', () => {
              expect(emailInput.props().icon).toEqual('user');
            });

            it('positions the icon on the left side', () => {
              expect(emailInput.props().iconPosition).toEqual('left');
            });

            it('displays the correct placeholder text', () => {
              expect(emailInput.props().placeholder).toEqual('someone@example.com');
            });

            it('sets the email when the value changes', () => {
              const mockSetEmail = jest.fn();

              wrapper = renderComponent({ setEmail: mockSetEmail });

              loginSignupContainer = wrapper.childAt(1);
              loginModal = loginSignupContainer.childAt(0);
              loginModalDescription = loginModal.childAt(1);
              loginModalDescriptionGrid = loginModalDescription.childAt(0);

              const emailInputRow = loginModalDescriptionGrid.childAt(0);
              const emailInputColumn = emailInputRow.childAt(0);

              emailInput = emailInputColumn.childAt(0);

              const emailInputOnChangeHandler = emailInput.props().onChange;

              emailInputOnChangeHandler();

              expect(mockSetEmail).toHaveBeenCalledTimes(1);
            });
          });

          describe('Password Input', () => {
            let passwordInput;

            beforeEach(() => {
              const passwordInputRow = loginModalDescriptionGrid.childAt(1);
              const passwordInputColumn = passwordInputRow.childAt(0);

              passwordInput = passwordInputColumn.childAt(0);
            });

            it('is an input', () => {
              expect(passwordInput.type()).toEqual(Input);
            });

            it('has a fluid width', () => {
              expect(passwordInput.props().fluid).toBeTruthy();
            });

            it('has a user icon', () => {
              expect(passwordInput.props().icon).toEqual('lock');
            });

            it('is a type input', () => {
              expect(passwordInput.props().type).toEqual('password');
            });

            it('positions the icon on the left side', () => {
              expect(passwordInput.props().iconPosition).toEqual('left');
            });

            it('displays the correct placeholder text', () => {
              expect(passwordInput.props().placeholder).toEqual('Password');
            });

            it('sets the password when the value changes', () => {
              const mockSetPassword = jest.fn();

              wrapper = renderComponent({ setPassword: mockSetPassword });

              loginSignupContainer = wrapper.childAt(1);
              loginModal = loginSignupContainer.childAt(0);
              loginModalDescription = loginModal.childAt(1);
              loginModalDescriptionGrid = loginModalDescription.childAt(0);

              const passwordInputRow = loginModalDescriptionGrid.childAt(1);
              const passwordInputColumn = passwordInputRow.childAt(0);

              passwordInput = passwordInputColumn.childAt(0);

              const passwordInputOnChangeHandler = passwordInput.props().onChange;

              passwordInputOnChangeHandler();

              expect(mockSetPassword).toHaveBeenCalledTimes(1);
            });
          });

          describe('Login Button', () => {
            let loginButton;

            beforeEach(() => {
              const loginButtonRow = loginModalDescriptionGrid.childAt(2);
              const loginButtonColumn = loginButtonRow.childAt(0);

              loginButton = loginButtonColumn.childAt(0);
            });

            it('is a button', () => {
              expect(loginButton.type()).toEqual(Button);
            });
            it('is a large size', () => {
              expect(loginButton.props().size).toEqual('large');
            });

            it('closes the login modal when clicked', () => {
              const mockCloseModal = jest.fn();

              wrapper = renderComponent({ closeModal: mockCloseModal });

              loginSignupContainer = wrapper.childAt(1);
              loginModal = loginSignupContainer.childAt(0);
              loginModalDescription = loginModal.childAt(1);
              loginModalDescriptionGrid = loginModalDescription.childAt(0);

              const loginButtonRow = loginModalDescriptionGrid.childAt(2);
              const loginButtonColumn = loginButtonRow.childAt(0);

              loginButton = loginButtonColumn.childAt(0);

              const loginButtonOnClickHandler = loginButton.props().onClick;

              loginButtonOnClickHandler();

              expect(mockCloseModal).toHaveBeenCalledTimes(1);
            });
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

      it('is open depending on the value of the open prop', () => {
        const fakeIsSignupModalOpen = chance.bool();

        wrapper = renderComponent({ isSignupModalOpen: fakeIsSignupModalOpen });
        loginSignupContainer = wrapper.childAt(1);
        signupModal = loginSignupContainer.childAt(1);

        expect(signupModal.props().open).toEqual(fakeIsSignupModalOpen);
      });

      it('closes the modal when closed', () => {
        const mockCloseModal = jest.fn();

        wrapper = renderComponent({ closeModal: mockCloseModal });

        loginSignupContainer = wrapper.childAt(1);
        signupModal = loginSignupContainer.childAt(1);

        const signupModalOnCloseHandler = signupModal.props().onClose;

        signupModalOnCloseHandler();

        expect(mockCloseModal).toHaveBeenCalledTimes(1);
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
          const expectedType = shallow(<Menu.Item onClick={jest.fn()} />).type();

          expect(signupModalTrigger.type()).toEqual(expectedType);
        });

        it('opens the modal when clicked', () => {
          const mockOpenSignupModal = jest.fn();

          wrapper = renderComponent({ openSignupModal: mockOpenSignupModal });

          loginSignupContainer = wrapper.childAt(1);
          signupModal = loginSignupContainer.childAt(1);
          signupModalTrigger = shallow(signupModal.props().trigger);

          const signupModalTriggerOnClickHandler = signupModalTrigger.props().onClick;

          signupModalTriggerOnClickHandler();

          expect(mockOpenSignupModal).toHaveBeenCalledTimes(1);
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
