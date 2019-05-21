import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './loginForm.module.css';

const initialValues = {
  Login: [
    {
      email: '',
      password: '',
    },
  ],
};

const LoginFormComponent = props => (
  <div className={styles.formContainer}>
    <Formik
      validationSchema={Yup.object({
        Login: Yup.array().of(
          Yup.object({
            email: Yup.string().required('Required*'),
            password: Yup.string().required('Required*'),
          }),
        ),
      })}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, error, touched, isSubmitting }) => (
        <Form>
          <FieldArray name="Login">
            {({ push, remove }) => (
              <React.Fragment>
                {values.Login &&
                  values.Login.length > 0 &&
                  values.Login.map((friend, index) => (
                    <React.Fragment>
                      <div>
                        <Field name={`Login[${index}].email`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.addressContainer}>
                              <InputLabel className={styles.fieldLabel}>Email </InputLabel>
                              <Input className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`Login[${index}].email`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`Login[${index}].password`} type="password">
                          {({ field, form }) => (
                            <FormControl className={styles.addressContainer}>
                              <InputLabel className={styles.fieldLabel}>Password</InputLabel>
                              <Input type="password" className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`Login[${index}].password`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </React.Fragment>
                  ))}
                <button className={styles.submitButton} type="submit">
                  Continue
                </button>
              </React.Fragment>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginFormComponent;
