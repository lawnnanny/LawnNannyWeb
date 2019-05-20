import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './requestLocationForm.module.css';

const initialValues = {
  RequestLocation: [
    {
      addressLine1: '',
      addressLine2: '',
      city: '',
      postal: '',
      state: '',
    },
  ],
};
const RequestLocationForm = () => (
  <div>
    <h1>Request Location </h1>
    <Formik
      validationSchema={Yup.object({
        RequestLocation: Yup.array().of(
          Yup.object({
            addressLine1: Yup.string().required('Required'),
            addressLine2: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            postal: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
          }),
        ),
      })}
      initialValues={initialValues}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ values, error, touched, isSubmitting }) => (
        <Form>
          <FieldArray name="RequestLocation">
            {({ push, remove }) => (
              <React.Fragment>
                {values.RequestLocation &&
                  values.RequestLocation.length > 0 &&
                  values.RequestLocation.map((friend, index) => (
                    <React.Fragment>
                      <div>
                        <Field name={`RequestLocation[${index}].addressLine1`} type="text">
                          {({ field, form }) => (
                            <input {...field} placeholder="katy perry" type="text" />
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].addressLine1`}>
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].addressLine2`} type="text">
                          {({ field, form }) => (
                            <input {...field} placeholder="katy perry" type="text" />
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].addressLine2`}>
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].city`} type="text">
                          {({ field, form }) => (
                            <input {...field} placeholder="katy perry" type="text" />
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].city`}>
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].postal`} type="text">
                          {({ field, form }) => (
                            <input {...field} placeholder="katy perry" type="text" />
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].postal`}>
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].state`} type="text">
                          {({ field, form }) => (
                            <input {...field} placeholder="katy perry" type="text" />
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].state`}>
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </React.Fragment>
                  ))}
                <button type="submit">Submit</button>
              </React.Fragment>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  </div>
);

export default RequestLocationForm;
