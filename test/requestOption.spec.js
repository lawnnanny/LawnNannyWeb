import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Modal,
  Grid,
  Input,
  Button,
  Form,
  Segment,
  Header,
  Image
} from "semantic-ui-react";
import { shallow } from "enzyme";
import RequestOptionComponent from "../src/components/helpers/RequestOption";

describe("requestOption", () => {
  let wrapper;

  const renderComponent = () => shallow(<RequestOptionComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it("is wrapped in a Link", () => {
    expect(wrapper.type()).toEqual(Link);
  });

  it("is the correct link", () => {
    expect(wrapper.props().to).toEqual("/pipeline/requestInformation");
  });

  describe("button", () => {
    let button;

    beforeEach(() => {
      button = wrapper.childAt(0);
    });

    it("is a button", () => {
      expect(button.type()).toEqual(Button);
    });

    it("is styled as a fluid button", () => {
      expect(button.props().fluid).toBeTruthy();
    });

    describe("header", () => {
      let header;

      beforeEach(() => {
        header = button.childAt(0);
      });

      it("is a header", () => {
        expect(header.type()).toEqual(Header);
      });

      describe("image", () => {
        let image;

        beforeEach(() => {
          image = header.childAt(0);
        });

        it("is a image", () => {
          expect(image.type()).toEqual(Image);
        });
        it("is styled as a circular image", () => {
          expect(image.props().circular).toBeTruthy();
        });
        it("has a size", () => {
          expect(image.props().size).toEqual("massive");
        });
      });
    });
  });
});
