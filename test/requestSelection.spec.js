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
import RequestSelectionComponent from "../src/components/pages/pipeline/requestSelection";
import BreadcrumbComponent from "../src/components/helpers/breadcrumb";
import RequestOptionComponent from "../src/components/helpers/RequestOption";

describe("RequestSelection", () => {
  let wrapper;

  const renderComponent = () => shallow(<RequestSelectionComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it("is wrapped in a Grid Container", () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it("is styled as a container Grid", () => {
    expect(wrapper.props().container).toBeTruthy();
  });

  it("contains five rows", () => {
    expect.assertions(6);

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
          expect(Breadcrumb.props().activeStep).toEqual(0);
        });
      });
    });
  });

  describe("HeaderRow", () => {
    let HeaderRow;

    beforeEach(() => {
      HeaderRow = wrapper.childAt(1);
    });

    it("is a Header Row", () => {
      expect(HeaderRow.type()).toEqual(Grid.Row);
    });

    describe("HeaderSegment", () => {
      let HeaderSegment;

      beforeEach(() => {
        HeaderSegment = HeaderRow.childAt(0);
      });

      it("is a Header Segment", () => {
        expect(HeaderSegment.type()).toEqual(Segment);
      });

      describe("Header", () => {
        let header;

        beforeEach(() => {
          header = HeaderSegment.childAt(0);
        });

        it("is a Header", () => {
          expect(header.type()).toEqual(Header);
        });

        it("is a Header", () => {
          expect(header.props().as).toEqual("h2");
        });

        describe("SubHeader", () => {
          let subHeader;

          beforeEach(() => {
            subHeader = header.childAt(0);
          });

          it("is a SubHeader", () => {
            expect(subHeader.type()).toEqual(Header.SubHeader);
          });
        });
      });
    });
  });
  describe("LawnMowingRow", () => {
    let LawnMowingRow;

    beforeEach(() => {
      LawnMowingRow = wrapper.childAt(2);
    });

    it("is a LawnMowing Row", () => {
      expect(LawnMowingRow.type()).toEqual(Grid.Row);
    });

    describe("LawnMowingSegment", () => {
      let LawnMowingSegment;

      beforeEach(() => {
        LawnMowingSegment = LawnMowingRow.childAt(0);
      });

      it("is a LawnMowing Segment", () => {
        expect(LawnMowingSegment.type()).toEqual(Segment);
      });

      describe("LawnMowingComponent", () => {
        let LawnMowingComponent;

        beforeEach(() => {
          LawnMowingComponent = LawnMowingSegment.childAt(0);
        });

        it("is a LawnMowing", () => {
          expect(LawnMowingComponent.type()).toEqual(RequestOptionComponent);
        });
        it("has the correct title", () => {
          expect(LawnMowingComponent.props().title).toEqual("Lawn Mowing");
        });
        it("has an imageURL", () => {
          expect(LawnMowingComponent.props().imageURL).toBeTruthy();
        });
      });
    });
  });

  describe("RakingRow", () => {
    let RakingRow;

    beforeEach(() => {
      RakingRow = wrapper.childAt(3);
    });

    it("is a Raking Row", () => {
      expect(RakingRow.type()).toEqual(Grid.Row);
    });

    describe("RakingSegment", () => {
      let RakingSegment;

      beforeEach(() => {
        RakingSegment = RakingRow.childAt(0);
      });

      it("is a Raking Segment", () => {
        expect(RakingSegment.type()).toEqual(Segment);
      });

      describe("RakingComponent", () => {
        let RakingComponent;

        beforeEach(() => {
          RakingComponent = RakingSegment.childAt(0);
        });

        it("is a Raking Component", () => {
          expect(RakingComponent.type()).toEqual(RequestOptionComponent);
        });
        it("has the correct title", () => {
          expect(RakingComponent.props().title).toEqual("Leaf Raking");
        });
        it("has an imageURL", () => {
          expect(RakingComponent.props().imageURL).toBeTruthy();
        });
      });
    });
  });

  describe("snowClearingRow", () => {
    let snowClearingRow;

    beforeEach(() => {
      snowClearingRow = wrapper.childAt(4);
    });

    it("is a snowClearing Row", () => {
      expect(snowClearingRow.type()).toEqual(Grid.Row);
    });

    describe("snowClearingSegment", () => {
      let snowClearingSegment;

      beforeEach(() => {
        snowClearingSegment = snowClearingRow.childAt(0);
      });

      it("is a snowClearing Segment", () => {
        expect(snowClearingSegment.type()).toEqual(Segment);
      });

      describe("snowClearingComponent", () => {
        let snowClearingComponent;

        beforeEach(() => {
          snowClearingComponent = snowClearingSegment.childAt(0);
        });

        it("is a snowClearing", () => {
          expect(snowClearingComponent.type()).toEqual(RequestOptionComponent);
        });
        it("has the correct title", () => {
          expect(snowClearingComponent.props().title).toEqual("Snow Clearing");
        });
        it("has an imageURL", () => {
          expect(snowClearingComponent.props().imageURL).toBeTruthy();
        });
      });
    });
  });

  describe("CustomRow", () => {
    let CustomRow;

    beforeEach(() => {
      CustomRow = wrapper.childAt(5);
    });

    it("is a Custom Row", () => {
      expect(CustomRow.type()).toEqual(Grid.Row);
    });

    describe("CustomSegment", () => {
      let CustomSegment;

      beforeEach(() => {
        CustomSegment = CustomRow.childAt(0);
      });

      it("is a Custom Segment", () => {
        expect(CustomSegment.type()).toEqual(Segment);
      });

      describe("CustomComponent", () => {
        let CustomComponent;

        beforeEach(() => {
          CustomComponent = CustomSegment.childAt(0);
        });

        it("is a Custom", () => {
          expect(CustomComponent.type()).toEqual(RequestOptionComponent);
        });
        it("has the correct title", () => {
          expect(CustomComponent.props().title).toEqual("Custom Request");
        });
        it("has an imageURL", () => {
          expect(CustomComponent.props().imageURL).toBeTruthy();
        });
      });
    });
  });
});
