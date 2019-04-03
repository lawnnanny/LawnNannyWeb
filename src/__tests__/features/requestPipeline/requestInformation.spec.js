import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import RequestInformationComponent from '../../../..//src/features/requestPipeline/requestInformation';
import BreadcrumbComponent from '../../../..//src/features/requestPipeline/breadcrumb/breadcrumb';
import DynamicFormComponent from '../../../../src/features/dynamicForm/DynamicForm';
import testDataFunctions from '../../../testDataGenerators/generateTestData';
import formPipelineJson from '../../../../src/features/dynamicForm/jsonForms/informationForm';

describe('RequestInformation', () => {
  let wrapper;

  const testReduxState = testDataFunctions.generateTestStateJson(formPipelineJson);

  const reduxTestState = {
    requests: testReduxState,
  };

  const renderComponent = () =>
    shallow(
      <RequestInformationComponent
        requests={reduxTestState}
        typeOfRequest="Lawn Mowing"
        pageInProgress={1}
      />,
    );

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
        it('has a selection', () => {
          expect(Breadcrumb.props().selection).toEqual(1);
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

      describe('Form', () => {
        let form;

        beforeEach(() => {
          form = FormSegment.childAt(0);
        });

        it('is a Form', () => {
          expect(form.type()).toEqual(DynamicFormComponent);
        });
        it('has a json', () => {
          expect(form.props().jsonForm).toBeTruthy();
        });
        it('has a form', () => {
          expect(form.props().form).toBeTruthy();
        });
        it('has a route', () => {
          expect(form.props().route).toBeTruthy();
        });
      });
    });
  });
});
