import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import styles from './loginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginFormComponent = props => (
  <div className={styles.formContainer}>
    <Formik
      validationSchema={Yup.object({
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
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
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
            <Field name="password" type="password">
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
                    startAdornment={
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    }
                    error={form.touched[field.name] && form.errors[field.name]}
                    type="password"
                    className={styles.input}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="password">
              {msg => <div className={styles.inputError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <button className={styles.submitButton} type="submit">
            Log In
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginFormComponent;
