import * as Chance from 'chance';
import React from 'react';
import { shallow } from 'enzyme';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { FormController } from './FormController';

const chance = Chance.Chance();

const testFieldName = 'testFieldName';
const testError = 'testError';
const testTouched = 'testTouched';
const touched = { [testFieldName]: testTouched };
const errors = { [testFieldName]: testError };

const generateRandomFormProp = () => {
  if (chance.bool) {
    return { touched, errors };
  }
  return {};
};

const generateRandomFieldmProp = () => testFieldName;

const fieldName = generateRandomFieldmProp();

const formControllerWithOrWithoutError = shallow(<FormController
  form={generateRandomFormProp()}
  field={{
    name: testFieldName,
  }}
/>);

const formControllerWithError = shallow(<FormController
  form={{
    touched,
    errors,
  }}
  field={{
    name: testFieldName,
  }}
/>);

const formControllerWithNoErrors = shallow(<FormController
  form={{}}
  field={{}}
/>);

describe('FormController', () => {
  it('Should be the right type', () => {
    expect(formControllerWithOrWithoutError.type()).toEqual('div');
  });

  describe('FormControl', () => {
    const formControl = formControllerWithOrWithoutError.childAt(0);
    const formControlWithError = formControllerWithError.childAt(0);
    const formControlWithNoError = formControllerWithNoErrors.childAt(0);
    it('Should be the right type', () => {
      expect(formControl.type()).toEqual(FormControl);
    });

    describe('InputLabel', () => {
      const inputLabel = formControl.childAt(0);
      const labelWithOrWithoutError = formControl.childAt(0);
      it('Should be the correct type', () => {
        expect(inputLabel.type()).toEqual(InputLabel);
      });

      it('Should have the fieldName', () => {
        expect(labelWithOrWithoutError.childAt(0).debug()).toEqual(fieldName);
      });
    });

    describe('Input', () => {
      const inputWithError = formControlWithError.childAt(1);
      const inputWithOrWithoutError = formControl.childAt(1);
      const inputWithoutError = formControlWithNoError.childAt(1);
      it('Should be the correct type', () => {
        expect(inputWithOrWithoutError.type()).toEqual(Input);
      });

      it('The error prop should be true', () => {
        expect(inputWithError.props().error).toEqual(true);
      });

      it('The error prop should be false', () => {
        expect(inputWithoutError.props().error).toEqual(false);
      });
    });
  });
});
