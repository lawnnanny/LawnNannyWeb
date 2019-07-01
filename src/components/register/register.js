import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import * as Yup from 'yup';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormController } from '../FormControler/FormController';
import styles from './register.module.css';
import { LawnnannyapiBridge } from '../../lawnnanny-back-end-adapter-bridges/LawnnannyApiBridge';

export const SignupModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    modalOpen(!setModalOpen);
  };

  const firstNameIsTooShortMessage = 'First name is too short!';
  const firstNameISTooLongMessage = 'First name is too long!';
  const lastNameIsTooShortMessage = 'Last name is too short!';
  const lastNameISTooLongMessage = 'Last name is too long!';
  const passwordIsTooShortMessage = 'Password is too short!';

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, firstNameIsTooShortMessage)
      .max(30, firstNameISTooLongMessage)
      .required('Required'),
    lastName: Yup.string()
      .min(2, lastNameIsTooShortMessage)
      .max(30, lastNameISTooLongMessage)
      .required('Required'),
    email: Yup.string()
      .email()
      .required('Required'),
    password: Yup.string()
      .min(8, passwordIsTooShortMessage)
      .required(),
  });

  return (
    <div>
      <Button onClick={toggleModal} className={styles.registerButton}>
        Register
      </Button>
      <Dialog open={modalOpen}>
        <DialogTitle>Get Started</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await LawnnannyapiBridge.registerUser(values);
              return setSubmitting(false);
            }}
          >
            {() => (
              <div>
                <Form>
                  <Field
                    name="firstName"
                    render={({ field, form }) => (
                      <div>
                        <FormController
                          type="text"
                          label="first name"
                          id="firstNameFormController"
                          form={form}
                          field={field}
                        />
                      </div>
                    )}
                  />
                  <ErrorMessage name="firstName" component="div" />
                  <Field
                    name="lastName"
                    render={({ field, form }) => (
                      <div>
                        <FormController
                          type="text"
                          label="last name"
                          id="lastNameFormController"
                          form={form}
                          field={field}
                        />
                      </div>
                    )}
                  />
                  <ErrorMessage name="lastName" component="div" />
                  <Field
                    name="email"
                    render={({ field, form }) => (
                      <div>
                        <FormController
                          type="email"
                          label="email"
                          id="emailFormController"
                          form={form}
                          field={field}
                        />
                      </div>
                    )}
                  />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    name="password"
                    render={({ field, form }) => (
                      <div>
                        <FormController
                          type="password"
                          label="password"
                          id="passwordFormController"
                          form={form}
                          field={field}
                        />
                      </div>
                    )}
                  />
                  <ErrorMessage name="password" component="div" />
                </Form>
              </div>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignupModal;
