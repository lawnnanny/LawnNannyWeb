import React from 'react';
import { Grid, Segment, Header, Button, Image, Input, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import RequestPriceComponent from '../../../../src/components/pages/pipeline/requestPrice';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';
import Clicker from '../../../../src/components/helpers/Clicker';

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

  it('contains four rows', () => {
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
    describe('Input', () => {
      let priceInput;
      beforeEach(() => {
        priceInput = PriceRow.childAt(0);
      });

      it('is an input', () => {
        expect(priceInput.type()).toEqual(Input);
      });
      describe('Icon', () => {
        let priceIcon;
        beforeEach(() => {
          priceIcon = priceInput.childAt(0);
        });

        it('is an icon', () => {
          expect(priceIcon.type()).toEqual(Icon);
        });
      });
      describe('label', () => {
        let label;

        beforeEach(() => {
          label = priceInput.childAt(2);
        });

        it('is an icon', () => {
          expect(label.type()).toEqual(Label);
        });
        describe('Clicker', () => {
          let clicker;

          beforeEach(() => {
            clicker = label.childAt(0);
          });

          it('is an clicker', () => {
            expect(clicker.type()).toEqual(Clicker);
          });
        });
      });
    });
  });
  describe('buttonRow', () => {
    let buttonRow;
    beforeEach(() => {
      buttonRow = wrapper.childAt(3);
    });

    it('is a row', () => {
      expect(buttonRow.type()).toEqual(Grid.Row);
    });
    describe('buttonLink', () => {
      let buttonLink;
      beforeEach(() => {
        buttonLink = buttonRow.childAt(0);
      });

      it('is a Link', () => {
        expect(buttonLink.type()).toEqual(Link);
      });
      describe('buttonComplete', () => {
        let buttonComplete;
        beforeEach(() => {
          buttonComplete = buttonLink.childAt(0).childAt(0);
        });

        it('is a button', () => {
          expect(buttonComplete.type()).toEqual(Button);
        });
      });
    });
  });
});
