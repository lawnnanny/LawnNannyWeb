import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import RequestLocationComponent from '../../../../src/components/pages/pipeline/requestLocation';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';
import DynamicFormComponent from '../../../../src/components/helpers/DynamicForm';

describe('RequestInformation', () => {
  let wrapper;

  const renderComponent = () => shallow(<RequestLocationComponent typeOfRequest="Lawn Mowing" />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('is styled as a container Grid', () => {
    expect(wrapper.props().container).toBeTruthy();
  });

  it('contains two rows', () => {
    expect.assertions(2);

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
        it('has an active step', () => {
          expect(Breadcrumb.props().activeStep).toEqual(2);
        });
      });
    });
  });

  describe('FormRow', () => {
    let FormRow;

    beforeEach(() => {
      FormRow = wrapper.childAt(1);
    });

    it('is a Form Row', () => {
      expect(FormRow.type()).toEqual(Grid.Row);
    });

    describe('FormSegment', () => {
      let FormSegment;

      beforeEach(() => {
        FormSegment = FormRow.childAt(0);
      });

      it('is a Form Segment', () => {
        expect(FormSegment.type()).toEqual(Segment);
      });

      describe('form', () => {
        let form;
        beforeEach(() => {
          form = FormSegment.childAt(0);
        });

        it('is a Form', () => {
          expect(form.type()).toEqual(DynamicFormComponent);
        });
      });
    });
  });
});
