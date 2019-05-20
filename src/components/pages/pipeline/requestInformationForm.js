import React from 'react';
import * as Yup from 'yup';
import Input from '@material-ui/core/Input';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from './requestInformationForm.module.css';
import Debug from './Debug';

const initialValues = {
  RequestForm: [
    {
      LawnDetails: '',
    },
  ],
};

const style = {
  margin: '1em 0em',
  fontSize: '1.5em',
  backgroundColor: 'white',
};
const styleError = {
  margin: '1em 10em',
  fontSize: '1.5em',
};

const RequestInformationForm = () => (
  <div className={styles.formContainer}>
    <h1 className={styles.formHeader}>Lawn Details</h1>
    <Formik
      validationSchema={Yup.object({
        RequestForm: Yup.array().of(
          Yup.object({
            LawnDetails: Yup.string().required('Required*'),
          }),
        ),
      })}
      initialValues={initialValues}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 1));
        }, 500);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <Field name="RequestForm[0].LawnDetails" type="text">
            {({ field, form }) => (
              <Input
                style={style}
                {...field}
                fullWidth
                required
                multiline
                rows={8}
                rowsMax={24}
                type="text"
                placeholder="Lawn Details"
              />
            )}
          </Field>
          <ErrorMessage name="RequestForm[0].LawnDetails">
            {msg => <div className={styles.inputError}>{msg}</div>}
          </ErrorMessage>
          <button className={styles.submitButton} name="submit">
            Continue
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RequestInformationForm;
