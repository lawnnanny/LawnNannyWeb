import React from 'react';
import { Grid } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';
import Step from '../../../../src/components/helpers/breadcrumbStep';

describe('RequestInformation', () => {
  let wrapper;

  const renderComponent = () => shallow(<BreadcrumbComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  describe(' Row', () => {
    let row;

    beforeEach(() => {
      row = wrapper.childAt(0);
    });

    it('is a row', () => {
      expect(row.type()).toEqual(Grid.Row);
    });
    describe('Step 1', () => {
      let step1;

      beforeEach(() => {
        step1 = row.childAt(0);
      });

      it('is a Step', () => {
        expect(step1.type()).toEqual(Step);
      });
    });
    describe('Step 2', () => {
      let step2;

      beforeEach(() => {
        step2 = row.childAt(1);
      });

      it('is a Step', () => {
        expect(step2.type()).toEqual(Step);
      });
    });
    describe('Step 3', () => {
      let step3;

      beforeEach(() => {
        step3 = row.childAt(2);
      });

      it('is a Step', () => {
        expect(step3.type()).toEqual(Step);
      });
    });
    describe('Step 4', () => {
      let step4;

      beforeEach(() => {
        step4 = row.childAt(3);
      });

      it('is a Step', () => {
        expect(step4.type()).toEqual(Step);
      });
    });
    describe('Step 5', () => {
      let step5;

      beforeEach(() => {
        step5 = row.childAt(4);
      });

      it('is a Step', () => {
        expect(step5.type()).toEqual(Step);
      });
    });
  });
});
