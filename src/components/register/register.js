import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import React, { useState } from 'react';
import styles from './register.module.css';

export const SignupModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    modalOpen(!setModalOpen);
  };

  return (
    <div>
      <Button onClick={toggleModal} className={styles.registerButton}>Register</Button>
      <Dialog open={modalOpen} >
        <DialogTitle>
          Get Started
        </DialogTitle>
        <DialogContent>
          <Formik
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
