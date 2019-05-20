import React from 'react';
import Input from '@material-ui/core/Input';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './requestInformationForm.module.css';

const initialValues = {
  RequestForm: [
    {
      LawnDetails: '',
    },
  ],
};
const RequestInformationForm = () => (
  <div>
    <h1>Lawn Details</h1>
    <Formik
      validationSchema={Yup.object({
        RequestForm: Yup.array().of(
          Yup.object({
            LawnDetails: Yup.string().required('Lawn Details are Required'),
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
      {({ values, error, touched, isSubmitting }) => (
        <Form>
          <Field name="RequestForm[0].LawnDetails" type="text">
            {({ field, form }) => (
              <Input
                {...field}
                multiline
                rows={4}
                rowsMax={15}
                type="text"
                placeholder="some text"
              />
            )}
          </Field>
          <ErrorMessage name="RequestForm[0].LawnDetails">
            {msg => <div className="field-error">{msg}</div>}
          </ErrorMessage>
          <button name="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RequestInformationForm;
