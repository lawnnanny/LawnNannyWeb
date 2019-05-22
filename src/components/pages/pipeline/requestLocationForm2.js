import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const style = {
  margin: '1em 0em',
  fontSize: '1.5em',
  backgroundColor: 'white',
};

const styleError = {
  ...style,
  border: '1px solid tomato',
};

export const RequestLocationForm2 = () => (
  <Formik
    initialValues={{ Lawn: '' }}
    validationSchema={Yup.object().shape({
      Lawn: Yup.string().required(),
    })}
  >
    <Form>
      <Field name="Lawn" type="text">
        {({ field, form }) => (
          <input
            style={form.touched.Lawn && form.errors.Lawn ? styleError : style}
            {...field}
            type="text"
            placeholder="Lawn Details"
          />
        )}
      </Field>
      <ErrorMessage name="Lawn">{message => <p>{message}</p>}</ErrorMessage>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default RequestLocationForm2;
