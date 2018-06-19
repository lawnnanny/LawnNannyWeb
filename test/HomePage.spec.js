import React from "react";
import HomePage from "../src/components/pages/HomePage";
import { shallow } from "enzyme";
import chance from "chance";
import { Menu, Modal, Grid, Input, Button, Form } from "semantic-ui-react";

describe("Home Page", () => {
  let wrapper, chance;

  const renderComponent = (props = {}) =>
    shallow(
      <HomePage
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
          props.isLoginModalOpen === undefined
            ? chance.bool()
            : props.isLoginModalOpen
        }
        openSignupModal={props.openSignupModal || jest.fn()}
        closeSignupModal={props.closeSignupModal || jest.fn()}
        isSignupModalOpen={
          props.isSignupModalOpen === undefined
            ? chance.bool()
            : props.isSignupModalOpen
        }
      />
    );

  beforeEach(() => {
    chance = Chance();
    wrapper = renderComponent().childAt(0);
  });

  it("is wrapped in a div", () => {
    expect(wrapper.type()).toEqual("div");
  });

  describe("Navbar", () => {
    let navbar;

    beforeEach(() => {
      navbar = wrapper.childAt(0);
    });

    it("is a menu", () => {
      expect(navbar.type()).toEqual(Menu);
    });

    it("is styled as a secondary menu", () => {
      expect(navbar.props().secondary).toBeTruthy();
    });

    describe("Login/Signup button container", () => {
      let loginSignupButtonContainer;

      beforeEach(() => {
        loginSignupButtonContainer = navbar.childAt(0);
      });

      it("is a menu subcomponent", () => {
        expect(loginSignupButtonContainer.type()).toEqual(Menu.Menu);
      });

      it("is positioned correctly", () => {
        expect(loginSignupButtonContainer.props().position).toEqual("right");
      });

      describe("Login Modal", () => {
        let loginModal;

        beforeEach(() => {
          loginModal = loginSignupButtonContainer.childAt(0);
        });

        it("is a modal", () => {
          expect(loginModal.type()).toEqual(Modal);
        });

        it("is a mini modal", () => {
          expect(loginModal.props().size).toEqual("mini");
        });

        it("closes the model when closed", () => {
          const mockCloseLoginModal = jest.fn();

          wrapper = renderComponent({
            closeLoginModal: mockCloseLoginModal
          }).childAt(0);
          navbar = wrapper.childAt(0);
          loginSignupButtonContainer = navbar.childAt(0);
          loginModal = loginSignupButtonContainer.childAt(0);

          const loginModalOnCloseHandler = loginModal.props().onClose;

          loginModalOnCloseHandler();

          expect(mockCloseLoginModal).toHaveBeenCalledTimes(1);
        });

        it("displays a close modal button", () => {
          expect(loginModal.props().closeIcon).toBeTruthy();
        });

        it("is open depending on what the open prop is", () => {
          const fakeIsLoginModalOpen = chance.bool();

          wrapper = renderComponent({
            isLoginModalOpen: fakeIsLoginModalOpen
          }).childAt(0);
          navbar = wrapper.childAt(0);
          loginSignupButtonContainer = navbar.childAt(0);
          loginModal = loginSignupButtonContainer.childAt(0);

          expect(loginModal.props().open).toEqual(fakeIsLoginModalOpen);
        });
        describe("Login Modal trigger", () => {
          let loginModalTrigger;

          beforeEach(() => {
            loginModalTrigger = shallow(loginModal.props().trigger);
          });

          it("is a menu item", () => {
            const expectedType = shallow(
              <Menu.Item onClick={jest.fn()} />
            ).type();

            expect(loginModalTrigger.type()).toEqual(expectedType);
          });

          it("opens the modal when clicked", () => {
            const mockOpenLoginModal = jest.fn();

            wrapper = renderComponent({
              openLoginModal: mockOpenLoginModal
            }).childAt(0);
            navbar = wrapper.childAt(0);
            loginSignupButtonContainer = navbar.childAt(0);
            loginModal = loginSignupButtonContainer.childAt(0);
            loginModalTrigger = shallow(loginModal.props().trigger);

            const loginModalTriggerOnClickHandler = loginModalTrigger.props()
              .onClick;

            loginModalTriggerOnClickHandler();

            expect(mockOpenLoginModal).toHaveBeenCalledTimes(1);
          });

          it("displays the correct word", () => {
            const loginModalTriggerText = loginModalTrigger.childAt(0);

            expect(loginModalTriggerText.text()).toEqual("Login");
          });
        });

        describe("Login Modal Header", () => {
          let loginModalHeader;

          beforeEach(() => {
            loginModalHeader = loginModal.childAt(0);
          });

          it("is a modal header", () => {
            expect(loginModalHeader.type()).toEqual(Modal.Header);
          });

          it("displays the correct text", () => {
            const loginModalHeaderText = loginModalHeader.childAt(0);

            expect(loginModalHeaderText.text()).toEqual("Welcome Back!");
          });
        });

        describe("Login Modal Description", () => {
          let loginModalDescription;

          beforeEach(() => {
            loginModalDescription = loginModal.childAt(1);
          });

          it("is a modal description", () => {
            expect(loginModalDescription.type()).toEqual(Modal.Description);
          });

          describe("Login Modal Description Grid", () => {
            let loginModalDescriptionGrid;

            beforeEach(() => {
              loginModalDescriptionGrid = loginModalDescription.childAt(0);
            });

            it("is a grid", () => {
              expect(loginModalDescriptionGrid.type()).toEqual(Grid);
            });

            it("contains three rows", () => {
              expect.assertions(3);

              const loginModalDescriptionGridRows = loginModalDescriptionGrid.children();

              loginModalDescriptionGridRows.forEach(row => {
                expect(row.type()).toEqual(Grid.Row);
              });
            });
            it("contains a row for the login button that is centered", () => {
              const loginButtonRow = loginModalDescriptionGrid.childAt(2);

              expect(loginButtonRow.props().centered).toBeTruthy();
            });

            it("contains a row for the login button that has a column with a width of 6", () => {
              const loginButtonRow = loginModalDescriptionGrid.childAt(2);
              const loginButtonColumn = loginButtonRow.childAt(0);

              expect(loginButtonColumn.props().width).toEqual(6);
            });

            describe("Email Input", () => {
              let emailInput;

              beforeEach(() => {
                const emailInputRow = loginModalDescriptionGrid.childAt(0);
                const emailInputColumn = emailInputRow.childAt(0);

                emailInput = emailInputColumn.childAt(0);
              });

              it("is an input", () => {
                expect(emailInput.type()).toEqual(Input);
              });

              it("has a fluid width", () => {
                expect(emailInput.props().fluid).toBeTruthy();
              });

              it("has a user icon", () => {
                expect(emailInput.props().icon).toEqual("user");
              });

              it("positions the icon on the left side", () => {
                expect(emailInput.props().iconPosition).toEqual("left");
              });

              it("displays the correct placeholder text", () => {
                expect(emailInput.props().placeholder).toEqual(
                  "someone@example.com"
                );
              });

              it("sets the email when the value changes", () => {
                const mockSetEmail = jest.fn();

                wrapper = renderComponent({ setEmail: mockSetEmail }).childAt(
                  0
                );
                navbar = wrapper.childAt(0);
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

            describe("Password Input", () => {
              let passwordInput;

              beforeEach(() => {
                const passwordInputRow = loginModalDescriptionGrid.childAt(1);
                const passwordInputColumn = passwordInputRow.childAt(0);

                passwordInput = passwordInputColumn.childAt(0);
              });

              it("is an input", () => {
                expect(passwordInput.type()).toEqual(Input);
              });

              it("has a fluid width", () => {
                expect(passwordInput.props().fluid).toBeTruthy();
              });

              it("has a user icon", () => {
                expect(passwordInput.props().icon).toEqual("lock");
              });

              it("is a type input", () => {
                expect(passwordInput.props().type).toEqual("password");
              });

              it("positions the icon on the left side", () => {
                expect(passwordInput.props().iconPosition).toEqual("left");
              });

              it("displays the correct placeholder text", () => {
                expect(passwordInput.props().placeholder).toEqual("Password");
              });
              it("sets the password when the value changes", () => {
                const mockSetPassword = jest.fn();

                wrapper = renderComponent({
                  setPassword: mockSetPassword
                }).childAt(0);
                navbar = wrapper.childAt(0);
                loginSignupButtonContainer = navbar.childAt(0);
                loginModal = loginSignupButtonContainer.childAt(0);
                loginModalDescription = loginModal.childAt(1);
                loginModalDescriptionGrid = loginModalDescription.childAt(0);

                const passwordInputRow = loginModalDescriptionGrid.childAt(1);
                const passwordInputColumn = passwordInputRow.childAt(0);

                passwordInput = passwordInputColumn.childAt(0);

                const passwordInputOnChangeHandler = passwordInput.props()
                  .onChange;

                passwordInputOnChangeHandler();

                expect(mockSetPassword).toHaveBeenCalledTimes(1);
              });
            });

            describe("Login Button", () => {
              let loginButton;

              beforeEach(() => {
                const loginButtonRow = loginModalDescriptionGrid.childAt(2);
                const loginButtonColumn = loginButtonRow.childAt(0);

                loginButton = loginButtonColumn.childAt(0);
              });

              it("is a button", () => {
                expect(loginButton.type()).toEqual(Button);
              });

              it("is a large size", () => {
                expect(loginButton.props().size).toEqual("large");
              });

              it("closes the login modal when clicked", () => {
                const mockCloseLoginModal = jest.fn();

                wrapper = renderComponent({
                  closeLoginModal: mockCloseLoginModal
                }).childAt(0);
                navbar = wrapper.childAt(0);
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

      describe("Signup Modal", () => {
        let signupModal;

        beforeEach(() => {
          signupModal = loginSignupButtonContainer.childAt(1);
        });

        it("is a modal", () => {
          expect(signupModal.type()).toEqual(Modal);
        });

        it("is a tiny modal", () => {
          expect(signupModal.props().size).toEqual("tiny");
        });
        it("is open depending on the value of the open prop", () => {
          const fakeIsSignupModalOpen = chance.bool();

          wrapper = renderComponent({
            isSignupModalOpen: fakeIsSignupModalOpen
          }).childAt(0);
          navbar = wrapper.childAt(0);
          loginSignupButtonContainer = navbar.childAt(0);
          signupModal = loginSignupButtonContainer.childAt(1);

          expect(signupModal.props().open).toEqual(fakeIsSignupModalOpen);
        });

        it("closes the modal when closed", () => {
          const mockCloseSignupModal = jest.fn();

          wrapper = renderComponent({
            closeSignupModal: mockCloseSignupModal
          }).childAt(0);
          navbar = wrapper.childAt(0);
          loginSignupButtonContainer = navbar.childAt(0);
          signupModal = loginSignupButtonContainer.childAt(1);

          const signupModalOnCloseHandler = signupModal.props().onClose;

          signupModalOnCloseHandler();

          expect(mockCloseSignupModal).toHaveBeenCalledTimes(1);
        });

        it("displays a close icon", () => {
          expect(signupModal.props().closeIcon).toBeTruthy();
        });

        describe("Signup Modal trigger", () => {
          let signupModalTrigger;

          beforeEach(() => {
            signupModalTrigger = shallow(signupModal.props().trigger);
          });

          it("is a menu item", () => {
            const expectedType = shallow(
              <Menu.Item onClick={jest.fn()} />
            ).type();

            expect(signupModalTrigger.type()).toEqual(expectedType);
          });

          it("opens the modal when clicked", () => {
            const mockOpenSignupModal = jest.fn();

            wrapper = renderComponent({
              openSignupModal: mockOpenSignupModal
            }).childAt(0);
            navbar = wrapper.childAt(0);
            loginSignupButtonContainer = navbar.childAt(0);
            signupModal = loginSignupButtonContainer.childAt(1);
            signupModalTrigger = shallow(signupModal.props().trigger);

            const signupModalTriggerOnClickHandler = signupModalTrigger.props()
              .onClick;

            signupModalTriggerOnClickHandler();

            expect(mockOpenSignupModal).toHaveBeenCalledTimes(1);
          });

          it("displays the correct word", () => {
            const signupModalTriggerText = signupModalTrigger.childAt(0);

            expect(signupModalTriggerText.text()).toEqual("Sign Up");
          });
        });

        describe("Signup Modal Header", () => {
          let signupModalHeader;

          beforeEach(() => {
            signupModalHeader = signupModal.childAt(0);
          });

          it("is a modal header", () => {
            expect(signupModalHeader.type()).toEqual(Modal.Header);
          });

          it("displays the correct message", () => {
            const signupModalHeaderText = signupModalHeader.childAt(0);

            expect(signupModalHeaderText.text()).toEqual("Sign Up!");
          });
        });

        describe("Signup Modal Description", () => {
          let signupModalDescription;

          beforeEach(() => {
            signupModalDescription = signupModal.childAt(1);
          });

          it("is a modal description", () => {
            expect(signupModalDescription.type()).toEqual(Modal.Description);
          });

          describe("Signup Modal Form", () => {
            let signupModalForm;

            beforeEach(() => {
              signupModalForm = signupModalDescription.childAt(0);
            });

            it("is a form", () => {
              expect(signupModalForm.type()).toEqual(Form);
            });

            describe("Form Group - Name", () => {
              let nameFormGroup;

              beforeEach(() => {
                nameFormGroup = signupModalForm.childAt(0);
              });
              it("is a form group", () => {
                expect(nameFormGroup.type()).toEqual(Form.Group);
              });

              it("has fields of equal widths", () => {
                expect(nameFormGroup.props().widths).toEqual("equal");
              });

              describe("First Name Input", () => {
                let firstNameInput;

                beforeEach(() => {
                  firstNameInput = nameFormGroup.childAt(0);
                });

                it("is a form input", () => {
                  expect(firstNameInput.type()).toEqual(Form.Input);
                });

                it("has a fluid width", () => {
                  expect(firstNameInput.props().fluid).toBeTruthy();
                });

                it("is labelled correctly", () => {
                  expect(firstNameInput.props().label).toEqual("First Name");
                });

                it("is the correct color", () => {
                  expect(firstNameInput.props().color).toEqual("white");
                });

                it("has the correct placeholder text", () => {
                  expect(firstNameInput.props().placeholder).toEqual(
                    "First Name"
                  );
                });

                it("updates the first name when the input is changed", () => {
                  const mockSetFirstName = jest.fn();

                  wrapper = renderComponent({
                    setFirstName: mockSetFirstName
                  }).childAt(0);
                  navbar = wrapper.childAt(0);
                  loginSignupButtonContainer = navbar.childAt(0);
                  signupModal = loginSignupButtonContainer.childAt(1);
                  signupModalDescription = signupModal.childAt(1);
                  signupModalForm = signupModalDescription.childAt(0);
                  nameFormGroup = signupModalForm.childAt(0);
                  firstNameInput = nameFormGroup.childAt(0);

                  const firstNameInputOnChangeHandler = firstNameInput.props()
                    .onChange;

                  firstNameInputOnChangeHandler();

                  expect(mockSetFirstName).toHaveBeenCalledTimes(1);
                });
              });
            });
          });
        });
      });
    });
  });
});
