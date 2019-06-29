import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Chance from 'chance';
import * as _ from 'lodash';

import Signup from './';

const chance = Chance.Chance();

const registar = shallow(<Signup />);

const childAt = element => child => element.childAt(child);

describe('signup component', () => {
  it('Should be a div', () => {
    expect(registar.type()).toEqual('div');
  });

  describe('signup button', () => {
    const button = registar.childAt(0);

    it('Should be a button', () => {
      expect(button.type()).toEqual(Button);
    });

    it('Should say Registar', () => {
      expect(button.childAt(0).text()).toEqual('Register');
    });
  });
  describe('Dialog', () => {
    const dialog = registar.childAt(1);
    it('Should be a dialog', () => expect(dialog.type()).toEqual(Dialog));
    describe('Dialog title', () => {
      const dialogTitle = dialog.childAt(0);
      it('Should be the correct type', () => {
        expect(dialogTitle.type()).toEqual(DialogTitle);
      });

      it('Should have a title', () => {
        const textArea = dialogTitle.childAt(0);
        expect(textArea.text()).toEqual('Get Started');
      });
    });
    describe('Dialog Content', () => {
      const dialogContent = dialog.childAt(1);

      it('Should be the correct type', () => {
        expect(dialogContent.type()).toEqual(DialogContent);
      });

      describe('Formik form', () => {
        const formikForm = dialogContent.childAt(0);

        it('Should be the correct type', () => {
          expect(formikForm.type()).toEqual(Formik);
        });

        describe('Initial values', () => {
          it('Should have the correct intial values', () => {
            const initialValues = formikForm.props().initialValues;
            expect(initialValues).toEqual(
              {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
              });
          });
        });

        describe('Validation Schema', () => {
          const validationSchema = formikForm.props().validationSchema;
          const validMinFirstName = chance.string({ length: 2 });
          const validMaxFirstName = chance.string({ length: 30 });
          const validMinLastName = chance.string({ length: 2 });
          const validMaxLastName = chance.string({ length: 30 });
          const invalidSmallFirstName = chance.string({ length: 1 });
          const invalidLargeFirstName = chance.string({ length: 31 });
          const invalidSmallLastName = chance.string({ length: 1 });
          const invalidLargeLastName = chance.string({ length: 31 });
          const passwordTooShort = chance.string({ length: 7 });
          const passwordLongEnough = chance.string({ length: 8 });

          const validResponse = {
            firstName: chance.bool() ? validMaxFirstName : validMinFirstName,
            lastName: chance.bool() ? validMaxLastName : validMinLastName,
            email: chance.email(),
            password: passwordLongEnough,
          };

          const invalidLongResponse = {
            firstName: invalidLargeFirstName,
            lastName: invalidLargeLastName,
            email: chance.string(),
            password: passwordTooShort,
          };

          const invalidShortResponse = {
            firstName: invalidSmallFirstName,
            lastName: invalidSmallLastName,
            email: chance.string(),
            password: passwordTooShort,
          };

          it('Should exist', () => {
            expect(validationSchema).toBeTruthy();
          });

          it('Should validate a valid request', async () => {
            const result = await validationSchema.isValid(validResponse);
            expect(result).toEqual(true);
          });

          it('Should not validate if the first name is too long', async (done) => {
            validationSchema.validateAt('firstName', invalidLongResponse)
              .catch((error) => {
                expect(error.message).toEqual('First name is too long!');
                done();
              });
          });

          it('Should not validate if the last name is too long', async (done) => {
            validationSchema.validateAt('lastName', invalidLongResponse)
              .catch((error) => {
                expect(error.message).toEqual('Last name is too long!');
                done();
              });
          });

          it('Should not validate if the first name is too short', async (done) => {
            validationSchema.validateAt('firstName', invalidShortResponse)
              .catch((error) => {
                expect(error.message).toEqual('First name is too short!');
                done();
              });
          });

          it('Should not validate if the last name is too short', async (done) => {
            validationSchema.validateAt('lastName', invalidShortResponse)
              .catch((error) => {
                expect(error.message).toEqual('Last name is too short!');
                done();
              });
          });

          it('Should not validate object without required first name', async () => {
            const filteredObject = _.omit(validResponse, ['firstName']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });

          it('Should not validate object without required last name', async () => {
            const filteredObject = _.omit(validResponse, ['lastName']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });

          it('Should not validate object without required email', async () => {
            const filteredObject = _.omit(validResponse, ['email']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });

          it('Should not validate object without required password', async () => {
            const filteredObject = _.omit(validResponse, ['password']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });
        });

        describe('form', () => {
          const renderedForm = formikForm.dive().childAt(0).childAt(0);

          it('Should be the correct type', () => {
            expect(renderedForm.type()).toEqual(Form);
          });

          const childAtForm = childAt(renderedForm);

          describe('first name input label', () => {
            const firstNameLabel = childAtForm(0);

            it('Should be the correct type', () => {
              expect(firstNameLabel.type()).toEqual(Field);
            });
          });

          describe('first name input', () => {
            const firstNameInput = childAtForm(1);
            it('Should be the correct type', () => {
              expect(firstNameInput.type()).toEqual(ErrorMessage);
            });
          });

          describe('last name input label', () => {
            const lastNameLabel = childAtForm(2);
            it('Should be the correct type', () => {
              expect(lastNameLabel.type()).toEqual(Field);
            });
          });

          describe('last name input', () => {
            const lastNameInput = childAtForm(3);
            it('Should be the correct type', () => {
              expect(lastNameInput.type()).toEqual(ErrorMessage);
            });
          });

          describe('email input label', () => {
            const emailLabel = childAtForm(4);
            it('Should be the correct type', () => {
              expect(emailLabel.type()).toEqual(Field);
            });
          });

          describe('email input', () => {
            const emailInput = childAtForm(5);
            it('Should be the correct type', () => {
              expect(emailInput.type()).toEqual(ErrorMessage);
            });
          });

          describe('password input label', () => {
            const passwordLabel = childAtForm(6);
            it('Should be the correct type', () => {
              expect(passwordLabel.type()).toEqual(Field);
            });
          });

          describe('password input', () => {
            const passwordInput = childAtForm(7);
            it('Should be the correct type', () => {
              expect(passwordInput.type()).toEqual(ErrorMessage);
            });
          });
        });
      });
    });
  });
});
