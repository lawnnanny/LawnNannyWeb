import React from 'react';
import { Grid, Segment, Popup, Header } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import RequestPriceComponent from '../../../../src/components/pages/pipeline/requestPrice';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';

describe('RequestInformation', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<RequestPriceComponent typeOfRequest="Lawn Mowing" pageInProgress={3} current={3} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('is styled as a container Grid', () => {
    expect(wrapper.props().container).toBeTruthy();
  });

  it('contains three rows', () => {
    expect.assertions(4);

    const GridRows = wrapper.children();

    GridRows.forEach((row) => {
      expect(row.type()).toEqual(Grid.Row);
    });
  });

  describe('BreadcrumbRow', () => {
    let BreadcrumbRow;

    beforeEach(() => {
      BreadcrumbRow = wrapper.childAt(0);
    });

    it('is a Breadcrumb Row', () => {
      expect(BreadcrumbRow.type()).toEqual(Grid.Row);
    });

    describe('BreadcrumbSegment', () => {
      let BreadcrumbSegment;

      beforeEach(() => {
        BreadcrumbSegment = BreadcrumbRow.childAt(0);
      });

      it('is a Breadcrumb Segment', () => {
        expect(BreadcrumbSegment.type()).toEqual(Segment);
      });

      describe('BreadcrumbComponent', () => {
        let Breadcrumb;

        beforeEach(() => {
          Breadcrumb = BreadcrumbSegment.childAt(0);
        });

        it('is a breadcrumb', () => {
          expect(Breadcrumb.type()).toEqual(BreadcrumbComponent);
        });
        it('has a selection', () => {
          expect(Breadcrumb.props().selection).toEqual(3);
        });
      });
    });
  });
  describe('HeaderRow', () => {
    let HeaderRow;

    beforeEach(() => {
      HeaderRow = wrapper.childAt(1);
    });

    it('is a Row', () => {
      expect(HeaderRow.type()).toEqual(Grid.Row);
    });

    describe('Header ', () => {
      let header;

      beforeEach(() => {
        header = HeaderRow.childAt(0);
      });

      it('is a header', () => {
        expect(header.type()).toEqual(Header);
      });

      describe('popup', () => {
        let popup;
        beforeEach(() => {
          popup = header.childAt(0);
        });

        it('is a popup', () => {
          expect(popup.type()).toEqual(Popup);
        });
      });
    });
  });
  describe('PriceRow', () => {
    let PriceRow;

    beforeEach(() => {
      PriceRow = wrapper.childAt(2);
    });

    it('is a Price Row', () => {
      expect(PriceRow.type()).toEqual(Grid.Row);
    });

    describe('Price Column', () => {
      let PriceColumn;

      beforeEach(() => {
        PriceColumn = PriceRow.childAt(0);
      });

      it('is a Column', () => {
        expect(PriceColumn.type()).toEqual(Grid.Column);
      });

      describe('triangleTopRow', () => {
        let triangleTopRow;
        beforeEach(() => {
          triangleTopRow = PriceColumn.childAt(0);
        });

        it('is a row', () => {
          expect(triangleTopRow.type()).toEqual(Grid.Row);
        });
      });
    });
  });
});
