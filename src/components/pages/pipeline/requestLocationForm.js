import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

const style = {
  margin: '1em 0em',
  width: '50%',
};

const RequestLocationForm = () => (
  <div className={styles.formContainer}>
    <h1 className={styles.formHeader}>Request Location</h1>
    <Formik
      validationSchema={Yup.object({
        RequestLocation: Yup.array().of(
          Yup.object({
            addressLine1: Yup.string().required('Required*'),
            addressLine2: Yup.string(),
            city: Yup.string().required('Required*'),
            postal: Yup.string().required('Required*'),
            state: Yup.string().required('Required*'),
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
                            <FormControl className={styles.addressContainer}>
                              <InputLabel className={styles.fieldLabel}>Street Address </InputLabel>
                              <Input className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].addressLine1`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].addressLine2`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.addressContainer}>
                              <InputLabel className={styles.fieldLabel}>
                                Street Address 2
                              </InputLabel>
                              <Input className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].city`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.fieldContainer}>
                              <InputLabel className={styles.fieldLabel}>City</InputLabel>
                              <Input className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].city`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].postal`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.fieldContainer}>
                              <InputLabel className={styles.fieldLabel}>Postal Code</InputLabel>
                              <Input className={styles.input} {...field} />
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].postal`}>
                          {msg => <div className={styles.inputError}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field name={`RequestLocation[${index}].state`} type="text">
                          {({ field, form }) => (
                            <FormControl className={styles.selectField}>
                              <InputLabel className={styles.selectLabel}>State</InputLabel>
                              <Select className={styles.input} {...field}>
                                <MenuItem className={styles.USstateItem} value="Alabama">
                                  Alabama
                                </MenuItem>
                                <MenuItem className={styles.USstateItem} value="Iowa">
                                  Iowa
                                </MenuItem>
                                <MenuItem className={styles.USstateItem} value="Texas">
                                  Texas
                                </MenuItem>
                              </Select>
                            </FormControl>
                          )}
                        </Field>
                        <ErrorMessage name={`RequestLocation[${index}].state`}>
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

export default RequestLocationForm;
