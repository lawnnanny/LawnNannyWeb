import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './signupForm.module.css';

const initialValues = {
  Login: [
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  ],
};

const SignupFormComponent = props => (
  <div className={styles.formContainer}>
    <Formik
      validationSchema={Yup.object({
        Login: Yup.array().of(
          Yup.object({
            firstName: Yup.string().required('Required*'),
            lastName: Yup.string().required('Required*'),
            email: Yup.string().required('Required*'),
            password: Yup.string().required('Required*'),
            repeatPassword: Yup.string().required('Required*'),
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
                        <Field name={`Login[${index}].firstName`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.addressContainer}>
                              <InputLabel className={styles.fieldLabel}>First Name </InputLabel>
                              <Input className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`Login[${index}].firstName`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`Login[${index}].lastName`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.addressContainer}>
                              <InputLabel className={styles.fieldLabel}>Last Name </InputLabel>
                              <Input className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`Login[${index}].lastName`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
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
                        <Field name={`Login[${index}].password`} type="text">
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
                      <div>
                        <Field name={`Login[${index}].repeatPassword`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.addressContainer}>
                              <InputLabel className={styles.fieldLabel}>Repeat Password</InputLabel>
                              <Input type="password" className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`Login[${index}].repeatPassword`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </React.Fragment>
                  ))}
                <button className={styles.submitButton} type="submit">
                  Sign Up
                </button>
              </React.Fragment>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupFormComponent;
