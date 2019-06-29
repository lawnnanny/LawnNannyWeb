import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import React, { useState } from 'react';
import styles from './register.module.css';

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
      <Button onClick={toggleModal} className={styles.registerButton}>Register</Button>
      <Dialog open={modalOpen} >
        <DialogTitle>
          Get Started
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
          >
            {() => (
              <div>
                <Form>
                  <Field type="text" name="firstName" />
                  <ErrorMessage name="firstName" component="div" />
                  <Field type="text" name="lastName" />
                  <ErrorMessage name="lastName" component="div" />
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
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
