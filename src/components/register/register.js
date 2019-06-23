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

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
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
            validationSchema={SignupSchema}
            render={() => (
              <div>
                <Form>
                  <Field type="firstName" name="email" />
                  <ErrorMessage name="firstName" component="div" />
                  <Field type="lastName" name="email" />
                  <ErrorMessage name="lastName" component="div" />
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="email" />
                  <ErrorMessage name="password" component="div" />
                </Form>
              </div>
            )}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignupModal;
