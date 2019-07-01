import * as Chance from 'chance';
import React from 'react';
import { shallow } from 'enzyme';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { FormController } from './FormController';

const chance = Chance.Chance();

const testLabelName = 'testLabelName';
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

const generateRandomLabelmProp = () => testLabelName;

const labelName = generateRandomLabelmProp();

const formControllerWithOrWithoutError = shallow(
  <FormController
    label="testLabelName"
    form={generateRandomFormProp()}
    field={{
      name: testFieldName,
    }}
  />,
);

const formControllerWithError = shallow(
  <FormController
    type="password"
    label="testLabelName"
    form={{
      touched,
      errors,
    }}
    field={{
      name: testFieldName,
    }}
  />,
);

const formControllerWithNoErrors = shallow(<FormController form={{}} field={{}} />);

describe('FormControl', () => {
  const formControl = formControllerWithOrWithoutError;
  const formControlWithError = formControllerWithError;
  const formControlWithNoError = formControllerWithNoErrors;
  it('Should be the right type', () => {
    expect(formControl.type()).toEqual(FormControl);
  });

  describe('InputLabel', () => {
    const inputLabel = formControl.childAt(0);
    const labelWithOrWithoutError = formControl.childAt(0);
    it('Should be the correct type', () => {
      expect(inputLabel.type()).toEqual(InputLabel);
    });

    it('Should have the label', () => {
      expect(labelWithOrWithoutError.childAt(0).debug()).toEqual(labelName);
    });
  });

  describe('Input', () => {
    const inputWithError = formControlWithError.childAt(1);
    const inputWithOrWithoutError = formControl.childAt(1);
    const inputWithoutError = formControlWithNoError.childAt(1);
    it('Should be the correct type', () => {
      expect(inputWithOrWithoutError.type()).toEqual(Input);
    });

    it('The type prop should be a password', () => {
      expect(inputWithError.props().type).toEqual('password');
    });

    it('The error prop should be true', () => {
      expect(inputWithError.props().error).toEqual(true);
    });

    it('The error prop should be false', () => {
      expect(inputWithoutError.props().error).toEqual(false);
    });
  });
});
