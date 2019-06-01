import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import styles from './signup-form.module.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignupFormComponent = (props) => {
  const [showPassword, togglePassword] = useState(false);
  const [password, setPassword] = useState('hello');
  return (
    <div className={styles.formContainer}>
      <Formik
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required*'),
          lastName: Yup.string().required('Required*'),
          email: Yup.string()
            .email('Not a valid email address')
            .required('Required*'),
          password: Yup.string().required('Required*'),
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
          <Form className={styles.form}>
            <div>
              <Field name="firstName" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      First Name{' '}
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      className={styles.input}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="firstName">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <Field name="lastName" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      Last Name{' '}
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      className={styles.input}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="lastName">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <Field name="email" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      Email{' '}
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      className={styles.input}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="email">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <Field name="password" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      Password
                    </InputLabel>
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      className={styles.input}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={() => togglePassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="password">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <button className={styles.submitButton} type="submit">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignupFormComponent;
