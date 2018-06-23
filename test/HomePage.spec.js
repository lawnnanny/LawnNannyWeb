import React from 'react';
import { Menu, Modal, Grid, Input, Button, Form } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import Chance from 'chance';
import { HomePage } from '../src/components/pages/HomePage';
import * as Common from '../src/helpers/Common';

describe('Home Page', () => {
  let wrapper;
  let chance;

  const renderComponent = (props = {}) => shallow(<HomePage
    setEmail={props.setEmail || jest.fn()}
    setPassword={props.setPassword || jest.fn()}
    setFirstName={props.setFirstName || jest.fn()}
    setLastName={props.setLastName || jest.fn()}
    setPasswordRepeat={props.setPasswordRepeat || jest.fn()}
    setAddress={props.setAddress || jest.fn()}
    setCity={props.setCity || jest.fn()}
    setAddressState={props.setAddressState || jest.fn()}
    setZipcode={props.setZipcode || jest.fn()}
    openLoginModal={props.openLoginModal || jest.fn()}
    closeLoginModal={props.closeLoginModal || jest.fn()}
    isLoginModalOpen={
      props.isLoginModalOpen === undefined ? chance.bool() : props.isLoginModalOpen
    }
    openSignupModal={props.openSignupModal || jest.fn()}
    closeSignupModal={props.closeSignupModal || jest.fn()}
    isSignupModalOpen={
      props.isSignupModalOpen === undefined ? chance.bool() : props.isSignupModalOpen
    }
  />);

  beforeEach(() => {
    chance = Chance();
    wrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  describe('Navbar wrapper', () => {
    let navbarWrapper;

    beforeEach(() => {
      navbarWrapper = wrapper.childAt(0);
    });

    it('is a div', () => {
      expect(navbarWrapper.type()).toEqual('div');
    });

    describe('Navbar', () => {
      let navbar;

      beforeEach(() => {
        navbar = navbarWrapper.childAt(0);
      });

      it('is a menu', () => {
        expect(navbar.type()).toEqual(Menu);
      });

      it('is styled as a secondary menu', () => {
        expect(navbar.props().secondary).toBeTruthy();
      });

      describe('Login/Signup button container', () => {
        let loginSignupButtonContainer;

        beforeEach(() => {
          loginSignupButtonContainer = navbar.childAt(0);
        });

        it('is a menu subcomponent', () => {
          expect(loginSignupButtonContainer.type()).toEqual(Menu.Menu);
        });

        it('is positioned correctly', () => {
          expect(loginSignupButtonContainer.props().position).toEqual('right');
        });

        describe('Login Modal', () => {
          let loginModal;

          beforeEach(() => {
            loginModal = loginSignupButtonContainer.childAt(0);
          });

          it('is a modal', () => {
            expect(loginModal.type()).toEqual(Modal);
          });

          it('is a mini modal', () => {
            expect(loginModal.props().size).toEqual('mini');
          });

          it('closes the model when closed', () => {
            const mockCloseLoginModal = jest.fn();

            wrapper = renderComponent({ closeLoginModal: mockCloseLoginModal });
            navbarWrapper = wrapper.childAt(0);
            navbar = navbarWrapper.childAt(0);
            loginSignupButtonContainer = navbar.childAt(0);
            loginModal = loginSignupButtonContainer.childAt(0);

            const loginModalOnCloseHandler = loginModal.props().onClose;

            loginModalOnCloseHandler();

            expect(mockCloseLoginModal).toHaveBeenCalledTimes(1);
          });

          it('displays a close modal button', () => {
            expect(loginModal.props().closeIcon).toBeTruthy();
          });

          it('is open depending on what the open prop is', () => {
            const fakeIsLoginModalOpen = chance.bool();

            wrapper = renderComponent({ isLoginModalOpen: fakeIsLoginModalOpen });
            navbarWrapper = wrapper.childAt(0);
            navbar = navbarWrapper.childAt(0);
            loginSignupButtonContainer = navbar.childAt(0);
            loginModal = loginSignupButtonContainer.childAt(0);

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
              navbarWrapper = wrapper.childAt(0);
              navbar = navbarWrapper.childAt(0);
              loginSignupButtonContainer = navbar.childAt(0);
              loginModal = loginSignupButtonContainer.childAt(0);
              loginModalTrigger = shallow(loginModal.props().trigger);

              const loginModalTriggerOnClickHandler = loginModalTrigger.props().onClick;

              loginModalTriggerOnClickHandler();

              expect(mockOpenLoginModal).toHaveBeenCalledTimes(1);
            });

            it('displays the correct word', () => {
              const loginModalTriggerText = loginModalTrigger.childAt(0);

              expect(loginModalTriggerText.text()).toEqual('Login');
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
                  navbarWrapper = wrapper.childAt(0);
                  navbar = navbarWrapper.childAt(0);
                  loginSignupButtonContainer = navbar.childAt(0);
                  loginModal = loginSignupButtonContainer.childAt(0);
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
                  navbarWrapper = wrapper.childAt(0);
                  navbar = navbarWrapper.childAt(0);
                  loginSignupButtonContainer = navbar.childAt(0);
                  loginModal = loginSignupButtonContainer.childAt(0);
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
                  const mockCloseLoginModal = jest.fn();

                  wrapper = renderComponent({ closeLoginModal: mockCloseLoginModal });
                  navbarWrapper = wrapper.childAt(0);
                  navbar = navbarWrapper.childAt(0);
                  loginSignupButtonContainer = navbar.childAt(0);
                  loginModal = loginSignupButtonContainer.childAt(0);
                  loginModalDescription = loginModal.childAt(1);
                  loginModalDescriptionGrid = loginModalDescription.childAt(0);

                  const loginButtonRow = loginModalDescriptionGrid.childAt(2);
                  const loginButtonColumn = loginButtonRow.childAt(0);

                  loginButton = loginButtonColumn.childAt(0);

                  const loginButtonOnClickHandler = loginButton.props().onClick;

                  loginButtonOnClickHandler();

                  expect(mockCloseLoginModal).toHaveBeenCalledTimes(1);
                });
              });
            });
          });
        });

        describe('Signup Modal', () => {
          let signupModal;

          beforeEach(() => {
            signupModal = loginSignupButtonContainer.childAt(1);
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
            navbarWrapper = wrapper.childAt(0);
            navbar = navbarWrapper.childAt(0);
            loginSignupButtonContainer = navbar.childAt(0);
            signupModal = loginSignupButtonContainer.childAt(1);

            expect(signupModal.props().open).toEqual(fakeIsSignupModalOpen);
          });

          it('closes the modal when closed', () => {
            const mockCloseSignupModal = jest.fn();

            wrapper = renderComponent({ closeSignupModal: mockCloseSignupModal });
            navbarWrapper = wrapper.childAt(0);
            navbar = navbarWrapper.childAt(0);
            loginSignupButtonContainer = navbar.childAt(0);
            signupModal = loginSignupButtonContainer.childAt(1);

            const signupModalOnCloseHandler = signupModal.props().onClose;

            signupModalOnCloseHandler();

            expect(mockCloseSignupModal).toHaveBeenCalledTimes(1);
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
              navbarWrapper = wrapper.childAt(0);
              navbar = navbarWrapper.childAt(0);
              loginSignupButtonContainer = navbar.childAt(0);
              signupModal = loginSignupButtonContainer.childAt(1);
              signupModalTrigger = shallow(signupModal.props().trigger);

              const signupModalTriggerOnClickHandler = signupModalTrigger.props().onClick;

              signupModalTriggerOnClickHandler();

              expect(mockOpenSignupModal).toHaveBeenCalledTimes(1);
            });

            it('displays the correct word', () => {
              const signupModalTriggerText = signupModalTrigger.childAt(0);

              expect(signupModalTriggerText.text()).toEqual('Sign Up');
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

              it('is a form', () => {
                expect(signupModalForm.type()).toEqual(Form);
              });

              describe('Form Group - Name', () => {
                let nameFormGroup;

                beforeEach(() => {
                  nameFormGroup = signupModalForm.childAt(0);
                });

                it('is a form group', () => {
                  expect(nameFormGroup.type()).toEqual(Form.Group);
                });

                it('has fields of equal widths', () => {
                  expect(nameFormGroup.props().widths).toEqual('equal');
                });

                describe('First Name Input', () => {
                  let firstNameInput;

                  beforeEach(() => {
                    firstNameInput = nameFormGroup.childAt(0);
                  });

                  it('is a form input', () => {
                    expect(firstNameInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(firstNameInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(firstNameInput.props().label).toEqual('First Name');
                  });

                  it('has the correct placeholder text', () => {
                    expect(firstNameInput.props().placeholder).toEqual('First Name');
                  });

                  it('updates the first name when the input is changed', () => {
                    const mockSetFirstName = jest.fn();

                    wrapper = renderComponent({ setFirstName: mockSetFirstName });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    nameFormGroup = signupModalForm.childAt(0);
                    firstNameInput = nameFormGroup.childAt(0);

                    const firstNameInputOnChangeHandler = firstNameInput.props().onChange;

                    firstNameInputOnChangeHandler();

                    expect(mockSetFirstName).toHaveBeenCalledTimes(1);
                  });
                });

                describe('Last Name Input', () => {
                  let lastNameInput;

                  beforeEach(() => {
                    lastNameInput = nameFormGroup.childAt(1);
                  });

                  it('is a form input', () => {
                    expect(lastNameInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(lastNameInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(lastNameInput.props().label).toEqual('Last Name');
                  });

                  it('has the correct placeholder text', () => {
                    expect(lastNameInput.props().placeholder).toEqual('Last Name');
                  });

                  it('updates the last name when the input is changed', () => {
                    const mockSetLastName = jest.fn();

                    wrapper = renderComponent({ setLastName: mockSetLastName });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    nameFormGroup = signupModalForm.childAt(0);
                    lastNameInput = nameFormGroup.childAt(1);

                    const lastNameInputOnChangeHandler = lastNameInput.props().onChange;

                    lastNameInputOnChangeHandler();

                    expect(mockSetLastName).toHaveBeenCalledTimes(1);
                  });
                });
              });

              describe('Form Group - Email', () => {
                let emailFormGroup;

                beforeEach(() => {
                  emailFormGroup = signupModalForm.childAt(1);
                });

                it('is a form group', () => {
                  expect(emailFormGroup.type()).toEqual(Form.Group);
                });

                it('has fields of equal widths', () => {
                  expect(emailFormGroup.props().widths).toEqual('equal');
                });

                describe('Email Input', () => {
                  let emailInput;

                  beforeEach(() => {
                    emailInput = emailFormGroup.childAt(0);
                  });

                  it('is a form input', () => {
                    expect(emailInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(emailInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(emailInput.props().label).toEqual('Email');
                  });

                  it('has the correct placeholder text', () => {
                    expect(emailInput.props().placeholder).toEqual('someone@example.com');
                  });

                  it('updates the email when the input is changed', () => {
                    const mockSetEmail = jest.fn();

                    wrapper = renderComponent({ setEmail: mockSetEmail });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    emailFormGroup = signupModalForm.childAt(1);
                    emailInput = emailFormGroup.childAt(0);

                    const emailInputOnChangeHandler = emailInput.props().onChange;

                    emailInputOnChangeHandler();

                    expect(mockSetEmail).toHaveBeenCalledTimes(1);
                  });
                });
              });

              describe('Form Group - Password', () => {
                let passwordFormGroup;

                beforeEach(() => {
                  passwordFormGroup = signupModalForm.childAt(2);
                });

                it('is a form group', () => {
                  expect(passwordFormGroup.type()).toEqual(Form.Group);
                });

                it('has fields of equal widths', () => {
                  expect(passwordFormGroup.props().widths).toEqual('equal');
                });

                describe('Password Input', () => {
                  let passwordInput;

                  beforeEach(() => {
                    passwordInput = passwordFormGroup.childAt(0);
                  });

                  it('is a form input', () => {
                    expect(passwordInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(passwordInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(passwordInput.props().label).toEqual('Password');
                  });

                  it('has type set to password', () => {
                    expect(passwordInput.props().type).toEqual('password');
                  });

                  it('has the correct placeholder text', () => {
                    expect(passwordInput.props().placeholder).toEqual('Password');
                  });

                  it('updates the password when the input is changed', () => {
                    const mockSetPassword = jest.fn();

                    wrapper = renderComponent({ setPassword: mockSetPassword });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    passwordFormGroup = signupModalForm.childAt(2);
                    passwordInput = passwordFormGroup.childAt(0);

                    const passwordInputOnChangeHandler = passwordInput.props().onChange;

                    passwordInputOnChangeHandler();

                    expect(mockSetPassword).toHaveBeenCalledTimes(1);
                  });
                });

                describe('Password Repeat Input', () => {
                  let passwordRepeatInput;

                  beforeEach(() => {
                    passwordRepeatInput = passwordFormGroup.childAt(1);
                  });

                  it('is a form input', () => {
                    expect(passwordRepeatInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(passwordRepeatInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(passwordRepeatInput.props().label).toEqual('Repeat Password');
                  });

                  it('has type set to password', () => {
                    expect(passwordRepeatInput.props().type).toEqual('password');
                  });

                  it('has the correct placeholder text', () => {
                    expect(passwordRepeatInput.props().placeholder).toEqual('Repeat Password');
                  });

                  it('updates the repeated password when the input is changed', () => {
                    const mockSetPasswordRepeat = jest.fn();

                    wrapper = renderComponent({ setPasswordRepeat: mockSetPasswordRepeat });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    passwordFormGroup = signupModalForm.childAt(2);
                    passwordRepeatInput = passwordFormGroup.childAt(1);

                    const passwordRepeatInputOnChangeHandler = passwordRepeatInput.props().onChange;

                    passwordRepeatInputOnChangeHandler();

                    expect(mockSetPasswordRepeat).toHaveBeenCalledTimes(1);
                  });
                });
              });

              describe('Form Group - Address & City', () => {
                let firstAddressFormGroup;

                beforeEach(() => {
                  firstAddressFormGroup = signupModalForm.childAt(3);
                });

                it('is a form group', () => {
                  expect(firstAddressFormGroup.type()).toEqual(Form.Group);
                });

                it('has fields of equal widths', () => {
                  expect(firstAddressFormGroup.props().widths).toEqual('equal');
                });

                describe('Address Input', () => {
                  let addressInput;

                  beforeEach(() => {
                    addressInput = firstAddressFormGroup.childAt(0);
                  });

                  it('is a form input', () => {
                    expect(addressInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(addressInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(addressInput.props().label).toEqual('Address');
                  });

                  it('has the correct placeholder text', () => {
                    expect(addressInput.props().placeholder).toEqual('Address');
                  });

                  it('updates the address when the input is changed', () => {
                    const mockSetAddress = jest.fn();

                    wrapper = renderComponent({ setAddress: mockSetAddress });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    firstAddressFormGroup = signupModalForm.childAt(3);
                    addressInput = firstAddressFormGroup.childAt(0);

                    const addressInputOnChangeHandler = addressInput.props().onChange;

                    addressInputOnChangeHandler();

                    expect(mockSetAddress).toHaveBeenCalledTimes(1);
                  });
                });

                describe('City Input', () => {
                  let cityInput;

                  beforeEach(() => {
                    cityInput = firstAddressFormGroup.childAt(1);
                  });

                  it('is a form input', () => {
                    expect(cityInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(cityInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(cityInput.props().label).toEqual('City');
                  });

                  it('has the correct placeholder text', () => {
                    expect(cityInput.props().placeholder).toEqual('City');
                  });

                  it('updates the city when the input is changed', () => {
                    const mockSetCity = jest.fn();

                    wrapper = renderComponent({ setCity: mockSetCity });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    firstAddressFormGroup = signupModalForm.childAt(3);
                    cityInput = firstAddressFormGroup.childAt(1);

                    const cityInputOnChangeHandler = cityInput.props().onChange;

                    cityInputOnChangeHandler();

                    expect(mockSetCity).toHaveBeenCalledTimes(1);
                  });
                });
              });

              describe('Form Group - State & Zipcode', () => {
                let secondAddressFormGroup;

                beforeEach(() => {
                  secondAddressFormGroup = signupModalForm.childAt(4);
                });

                it('is a form group', () => {
                  expect(secondAddressFormGroup.type()).toEqual(Form.Group);
                });

                it('has fields of equal widths', () => {
                  expect(secondAddressFormGroup.props().widths).toEqual('equal');
                });

                describe('State Dropdown', () => {
                  let stateDropdown;

                  beforeEach(() => {
                    stateDropdown = secondAddressFormGroup.childAt(0);
                  });

                  it('is a form dropdown', () => {
                    expect(stateDropdown.type()).toEqual(Form.Dropdown);
                  });

                  it('has a fluid width', () => {
                    expect(stateDropdown.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(stateDropdown.props().label).toEqual('State');
                  });

                  it('has the correct placeholder text', () => {
                    expect(stateDropdown.props().placeholder).toEqual('State');
                  });

                  it('is searchable', () => {
                    expect(stateDropdown.props().search).toBeTruthy();
                  });

                  it('is formatted to look like a form input', () => {
                    expect(stateDropdown.props().selection).toBeTruthy();
                  });

                  it('has the correct options', () => {
                    const fakeOptions = chance.n(() => ({
                      text: chance.string(),
                      key: chance.string(),
                      value: chance.string(),
                    }), chance.natural({ min: 2, max: 10 }));

                    Common.statekeys = fakeOptions;

                    wrapper = renderComponent();
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    secondAddressFormGroup = signupModalForm.childAt(4);
                    stateDropdown = secondAddressFormGroup.childAt(0);

                    expect(stateDropdown.props().options).toEqual(fakeOptions);
                  });

                  it('updates the state when the value changes', () => {
                    const mockSetAddressState = jest.fn();

                    wrapper = renderComponent({ setAddressState: mockSetAddressState });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    secondAddressFormGroup = signupModalForm.childAt(4);
                    stateDropdown = secondAddressFormGroup.childAt(0);

                    const stateDropdownOnChangeHandler = stateDropdown.props().onChange;

                    stateDropdownOnChangeHandler();

                    expect(mockSetAddressState).toHaveBeenCalledTimes(1);
                  });
                });

                describe('Zipcode Input', () => {
                  let zipcodeInput;

                  beforeEach(() => {
                    zipcodeInput = secondAddressFormGroup.childAt(1);
                  });

                  it('is a form input', () => {
                    expect(zipcodeInput.type()).toEqual(Form.Input);
                  });

                  it('has a fluid width', () => {
                    expect(zipcodeInput.props().fluid).toBeTruthy();
                  });

                  it('is labeled correctly', () => {
                    expect(zipcodeInput.props().label).toEqual('Zipcode');
                  });

                  it('has the correct placeholder text', () => {
                    expect(zipcodeInput.props().placeholder).toEqual('Zipcode');
                  });

                  it('updates the zipcode when the input is changed', () => {
                    const mockSetZipcode = jest.fn();

                    wrapper = renderComponent({ setZipcode: mockSetZipcode });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    secondAddressFormGroup = signupModalForm.childAt(4);
                    zipcodeInput = secondAddressFormGroup.childAt(1);

                    const zipcodeInputOnChangeHandler = zipcodeInput.props().onChange;

                    zipcodeInputOnChangeHandler();

                    expect(mockSetZipcode).toHaveBeenCalledTimes(1);
                  });
                });
              });

              describe('Form Group - Terms and Conditions', () => {
                let termsAndConditionsFormGroup;

                beforeEach(() => {
                  termsAndConditionsFormGroup = signupModalForm.childAt(5);
                });

                it('is a form group', () => {
                  expect(termsAndConditionsFormGroup.type()).toEqual(Form.Group);
                });

                describe('Terms and Conditions Checkbox', () => {
                  let termsAndConditionsCheckbox;

                  beforeEach(() => {
                    termsAndConditionsCheckbox = termsAndConditionsFormGroup.childAt(0);
                  });

                  it('is a form checkbox', () => {
                    expect(termsAndConditionsCheckbox.type()).toEqual(Form.Checkbox);
                  });

                  it('has the correct label', () => {
                    expect(termsAndConditionsCheckbox.props().label)
                      .toEqual('I agree to the Terms and Conditions');
                  });
                });
              });

              describe('Form Group - Submit', () => {
                let submitFormGroup;

                beforeEach(() => {
                  submitFormGroup = signupModalForm.childAt(6);
                });

                it('is a form group', () => {
                  expect(submitFormGroup.type()).toEqual(Form.Group);
                });

                describe('Submit Button', () => {
                  let submitButton;

                  beforeEach(() => {
                    submitButton = submitFormGroup.childAt(0);
                  });

                  it('is a form button', () => {
                    expect(submitButton.type()).toEqual(Form.Button);
                  });

                  it('is a large button', () => {
                    expect(submitButton.props().size).toEqual('large');
                  });

                  it('closes the modal when clicked', () => {
                    const mockCloseSignupModal = jest.fn();

                    wrapper = renderComponent({ closeSignupModal: mockCloseSignupModal });
                    navbarWrapper = wrapper.childAt(0);
                    navbar = navbarWrapper.childAt(0);
                    loginSignupButtonContainer = navbar.childAt(0);
                    signupModal = loginSignupButtonContainer.childAt(1);
                    signupModalDescription = signupModal.childAt(1);
                    signupModalForm = signupModalDescription.childAt(0);
                    submitFormGroup = signupModalForm.childAt(6);
                    submitButton = submitFormGroup.childAt(0);

                    const submitButtonOnClickHandler = submitButton.props().onClick;

                    submitButtonOnClickHandler();

                    expect(mockCloseSignupModal).toHaveBeenCalledTimes(1);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
