import { shallow } from "enzyme";
import { Menu, Modal, Grid } from "semantic-ui-react";
import chance from "chance";
import React from "react";
import pipelineSignup from "../src/components/helpers/pipelineSignupModal";

describe("pipelineSignupModal", () => {
  let wrapper, chance;

  const renderComponent = (props = {}) =>
    shallow(
      <pipelineSignup/>
    );

  beforeEach(() => {
    chance = Chance();
    wrapper = renderComponent();
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
