import React from 'react';
import * as Yup from 'yup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import styles from './requestInformationForm.module.css';
import Debug from './Debug';

const initialValues = {
  RequestForm: [
    {
      LawnDetails: '',
    },
  ],
};

const RequestInformationForm = props => (
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
      onSubmit={() => {
        props.route();
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <Field name="RequestForm[0].LawnDetails" type="text">
            {({ field, form }) => (
              <FormControl
                className={
                  getIn(form.touched, field.name) && getIn(form.errors, field.name)
                    ? styles.fieldContainerError
                    : styles.fieldContainer
                }
              >
                <InputLabel
                  className={
                    getIn(form.touched, field.name) && getIn(form.errors, field.name)
                      ? styles.fieldLabelError
                      : styles.fieldLabel
                  }
                >
                  Lawn Details
                </InputLabel>
                <Input
                  className={styles.input}
                  error={getIn(form.touched, field.name) && getIn(form.errors, field.name)}
                  {...field}
                  fullWidth
                  multiline
                  rows={8}
                  rowsMax={24}
                  type="text"
                />
              </FormControl>
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
