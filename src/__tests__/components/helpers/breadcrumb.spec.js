import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
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

  describe('Step 1', () => {
    let step1;

    beforeEach(() => {
      step1 = wrapper.childAt(0);
    });

    it('is a Step', () => {
      expect(step1.type()).toEqual(Step);
    });
  });
  describe('Step 2', () => {
    let step2;

    beforeEach(() => {
      step2 = wrapper.childAt(1);
    });

    it('is a Step', () => {
      expect(step2.type()).toEqual(Step);
    });
  });
  describe('Step 3', () => {
    let step3;

    beforeEach(() => {
      step3 = wrapper.childAt(2);
    });

    it('is a Step', () => {
      expect(step3.type()).toEqual(Step);
    });
  });
  describe('Step 4', () => {
    let step4;

    beforeEach(() => {
      step4 = wrapper.childAt(3);
    });

    it('is a Step', () => {
      expect(step4.type()).toEqual(Step);
    });
  });
  describe('Step 5', () => {
    let step5;

    beforeEach(() => {
      step5 = wrapper.childAt(4);
    });

    it('is a Step', () => {
      expect(step5.type()).toEqual(Step);
    });
  });
});
