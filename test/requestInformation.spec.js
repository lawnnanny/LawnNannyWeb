import React from "react";
import {
  Menu,
  Modal,
  Grid,
  Input,
  Button,
  Form,
  Segment,
  Header
} from "semantic-ui-react";
import { shallow } from "enzyme";
import Chance from "chance";
import RequestInformationComponent from "../src/components/pages/pipeline/requestInformation";
import BreadcrumbComponent from "../src/components/helpers/breadcrumb";
import DynamicFormComponent from "../src/components/helpers/DynamicForm";

describe("RequestInformation", () => {
  let wrapper;

  const renderComponent = () => shallow(<RequestInformationComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it("is wrapped in a Grid Container", () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it("is styled as a container Grid", () => {
    expect(wrapper.props().container).toBeTruthy();
  });

  it("contains three rows", () => {
    expect.assertions(3);

    const GridRows = wrapper.children();

    GridRows.forEach(row => {
      expect(row.type()).toEqual(Grid.Row);
    });
  });

  describe("BreadcrumbRow", () => {
    let BreadcrumbRow;

    beforeEach(() => {
      BreadcrumbRow = wrapper.childAt(0);
    });

    it("is a Breadcrumb Row", () => {
      expect(BreadcrumbRow.type()).toEqual(Grid.Row);
    });

    describe("BreadcrumbSegment", () => {
      let BreadcrumbSegment;

      beforeEach(() => {
        BreadcrumbSegment = BreadcrumbRow.childAt(0);
      });

      it("is a Breadcrumb Segment", () => {
        expect(BreadcrumbSegment.type()).toEqual(Segment);
      });

      describe("BreadcrumbComponent", () => {
        let Breadcrumb;

        beforeEach(() => {
          Breadcrumb = BreadcrumbSegment.childAt(0);
        });

        it("is a breadcrumb", () => {
          expect(Breadcrumb.type()).toEqual(BreadcrumbComponent);
        });
        it("has an active step", () => {
          expect(Breadcrumb.props().activeStep).toEqual(1);
        });
      });
    });
  });

  describe("FormRow", () => {
    let FormRow;

    beforeEach(() => {
      FormRow = wrapper.childAt(1);
    });

    it("is a Form Row", () => {
      expect(FormRow.type()).toEqual(Grid.Row);
    });

    describe("FormSegment", () => {
      let FormSegment;

      beforeEach(() => {
        FormSegment = FormRow.childAt(0);
      });

      it("is a Form Segment", () => {
        expect(FormSegment.type()).toEqual(Segment);
      });

      describe("Form", () => {
        let Form;

        beforeEach(() => {
          Form = FormSegment.childAt(0);
        });

        it("is a Form", () => {
          expect(Form.type()).toEqual(DynamicFormComponent);
        });
      });
    });
  });
  describe("LawnMowinRow", () => {
    let ButtonRow;

    beforeEach(() => {
      ButtonRow = wrapper.childAt(2);
    });

    it("is a Button Row", () => {
      expect(ButtonRow.type()).toEqual(Grid.Row);
    });

    describe("ButtonSegment", () => {
      let ButtonSegment;

      beforeEach(() => {
        ButtonSegment = ButtonRow.childAt(0);
      });

      it("is a Button Segment", () => {
        expect(ButtonSegment.type()).toEqual(Segment);
      });

      describe("button", () => {
        let button;

        beforeEach(() => {
          button = ButtonSegment.childAt(0);
        });

        it("is a Button", () => {
          expect(button.type()).toEqual(Button);
        });
      });
    });
  });
});
