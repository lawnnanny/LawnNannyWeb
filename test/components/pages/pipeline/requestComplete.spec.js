import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import RequestCompleteComponent from '../../../../src/components/pages/pipeline/requestComplete';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';
import testDataFunctions from '../../../testDataGenerators/generateTestData';
import formPipelineJson from '../../../../src/components/pages/pipeline/jsonForms/informationForm';

describe('Request Complete', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<RequestCompleteComponent pageInProgress={5} current={5} />);

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
          expect(Breadcrumb.props().selection).toEqual(5);
        });
      });
    });
  });

  describe('complete row', () => {
    let CompleteRow;

    beforeEach(() => {
      CompleteRow = wrapper.childAt(1);
    });

    it('is a Complete Row', () => {
      expect(CompleteRow.type()).toEqual(Grid.Row);
    });
  });
});
