import { shallow } from "enzyme";
import { Menu, Modal, Grid } from "semantic-ui-react";
import chance from "chance";
import React from "react";
import HomePage from "../src/components/pages/HomePage";

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
        isLoginModalOpen={props.isLoginModalOpen || chance.bool()}
        openSignupModal={props.openSignupModal || jest.fn()}
        closeSignupModal={props.closeSignupModal || jest.fn()}
        isSignupModalOpen={props.isSignupModalOpen || chance.bool()}
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
              const loginModalDescriptionGridRows = loginModalDescriptionGrid.children();

              loginModalDescriptionGridRows.forEach(row => {
                expect(row.type()).toEqual(Grid.Row);
              });
            });

            it("contains a row for the login button that is centered", () => {
              const loginButtonRow = loginModalDescriptionGrid.childAt(2);

              expect(loginButtonRow.props().centered).toBeTruthy();
            });
          });
        });
      });
    });
  });
});
