import React from 'react';
import { Grid, Segment, Button, Modal } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import RequestReviewComponent from '../../../../src/components/pages/pipeline/requestReview';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';
import DynamicDisplayComponent from '../../../../src/components/helpers/DynamicDisplay';

describe('RequestReview', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<RequestReviewComponent typeOfRequest="Lawn Mowing" pageInProgress={4} current={4} />);

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
          expect(Breadcrumb.props().selection).toEqual(4);
        });
      });
    });
  });

  describe('DynamicDisplay Row', () => {
    let dynamicDisplayRow;

    beforeEach(() => {
      dynamicDisplayRow = wrapper.childAt(2);
    });

    it('It is a row', () => {
      expect(dynamicDisplayRow.type()).toEqual(Grid.Row);
    });

    describe('It contains a DynamicDisplay Component', () => {
      let dynamicDisplayRowComponent;

      beforeEach(() => {
        dynamicDisplayRowComponent = dynamicDisplayRow.childAt(0);
      });

      it('is a dynamic dynamic display component', () => {
        expect(dynamicDisplayRowComponent.type()).toEqual(DynamicDisplayComponent);
      });
    });
  });
  describe('Submit Row', () => {
    let submitRow;

    beforeEach(() => {
      submitRow = wrapper.childAt(3);
    });

    it('It is a row', () => {
      expect(submitRow.type()).toEqual(Grid.Row);
    });
    describe('Submit Row Segment', () => {
      let submitRowSegment;

      beforeEach(() => {
        submitRowSegment = submitRow.childAt(0);
      });

      it('It is a segmnet', () => {
        expect(submitRowSegment.type()).toEqual(Segment);
      });
      describe('Submit Row Button', () => {
        let submitRowButton;

        beforeEach(() => {
          submitRowButton = submitRowSegment.childAt(0).childAt(0);
        });

        it('It is a submit button', () => {
          expect(submitRowButton.type()).toEqual(Button);
        });
      });
      describe('Submit Row Modal', () => {
        let submitRowModal;

        beforeEach(() => {
          submitRowModal = submitRowSegment.childAt(1);
        });
        it('is a modal', () => {
          expect(submitRowModal.type()).toEqual(Modal);
        });

        describe('modal header', () => {
          let modalHeader;

          beforeEach(() => {
            modalHeader = submitRowModal.childAt(0);
          });

          it('is a modal header', () => {
            expect(modalHeader.type()).toEqual(Modal.Header);
          });
        });
        describe('Modal content', () => {
          let modalContent;

          beforeEach(() => {
            modalContent = submitRowModal.childAt(1);
          });
          it('is modal content', () => {
            expect(modalContent.type()).toEqual(Modal.Content);
          });
        });
      });
    });
  });
});
