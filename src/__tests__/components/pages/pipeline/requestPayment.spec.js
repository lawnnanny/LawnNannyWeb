import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import RequestPriceComponent from '../../../../../src/components/pages/pipeline/requestPrice';
import BreadcrumbComponent from '../../../../../src/components/helpers/breadcrumb';

describe('RequestPayment', () => {
  let wrapper;
  const styles = () => ({
    lightTooltip: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 11,
    },
  });
  const Template = withStyles(styles)(RequestPriceComponent);

  const renderComponent = () =>
    shallow(<Template typeOfRequest="Lawn Mowing" pageInProgress={3} current={3} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('contains four rows', () => {
    expect.assertions(4);

    const GridRows = wrapper.children();

    GridRows.forEach((row) => {
      expect(row.type()).toEqual(Grid);
    });
  });

  describe('BreadcrumbRow', () => {
    let BreadcrumbRow;

    beforeEach(() => {
      BreadcrumbRow = wrapper.childAt(0);
    });

    it('is a Breadcrumb Row', () => {
      expect(BreadcrumbRow.type()).toEqual(Grid);
    });

    describe('BreadcrumbComponent', () => {
      let Breadcrumb;

      beforeEach(() => {
        Breadcrumb = BreadcrumbRow.childAt(0);
      });

      it('is a breadcrumb', () => {
        expect(Breadcrumb.type()).toEqual(BreadcrumbComponent);
      });
      it('has a selection', () => {
        expect(Breadcrumb.props().selection).toEqual(3);
      });
    });
  });

  describe('HeaderRow', () => {
    let HeaderRow;

    beforeEach(() => {
      HeaderRow = wrapper.childAt(1);
    });

    it('is a Row', () => {
      expect(HeaderRow.type()).toEqual(Grid);
    });

    describe('Tooltip ', () => {
      let popup;

      beforeEach(() => {
        popup = HeaderRow.childAt(0);
      });

      it('is a tooltip', () => {
        expect(popup.type()).toEqual(Tooltip);
      });
      describe('Badge ', () => {
        let badge;

        beforeEach(() => {
          badge = popup.childAt(0);
        });

        it('is a badge', () => {
          expect(badge.type()).toEqual(Badge);
        });
        describe('Header ', () => {
          let header;

          beforeEach(() => {
            header = badge.childAt(0);
          });

          it('is a header', () => {
            expect(header.type()).toEqual('h1');
          });
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
      expect(PriceRow.type()).toEqual(Grid);
    });
    describe('Form control', () => {
      let formControl;
      beforeEach(() => {
        formControl = PriceRow.childAt(0);
      });

      it('is a form Control', () => {
        expect(formControl.type()).toEqual(FormControl);
      });

      describe('Input', () => {
        let priceInput;
        beforeEach(() => {
          priceInput = formControl.childAt(0);
        });

        it('is an input', () => {
          expect(priceInput.type()).toEqual(Input);
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
      expect(buttonRow.type()).toEqual(Grid);
    });
    describe('buttonLink', () => {
      let buttonLink;
      beforeEach(() => {
        buttonLink = buttonRow.childAt(0);
      });

      it('is a Link', () => {
        expect(buttonLink.type()).toEqual(Link);
      });
    });
  });
});
