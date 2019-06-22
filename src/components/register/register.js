import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Formik, Form } from 'formik';

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
                  <InputLabel />
                  <Input />
                  <InputLabel />
                  <Input />
                  <InputLabel />
                  <Input />
                  <InputLabel />
                  <Input />
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
