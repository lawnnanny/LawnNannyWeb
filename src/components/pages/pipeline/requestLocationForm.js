import React from 'react';
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './requestLocationForm.module.css';

const initialValues = {
  addressLine1: '',
  addressLine2: '',
  city: '',
  postal: '',
  state: '',
};

const RequestLocationForm = props => (
  <div className={styles.formContainer}>
    <h1 className={styles.formHeader}>Request Location</h1>
    <Formik
      validationSchema={Yup.object({
        addressLine1: Yup.string().required('Required*'),
        addressLine2: Yup.string(),
        city: Yup.string().required('Required*'),
        postal: Yup.string().required('Required*'),
        state: Yup.string().required('Required*'),
      })}
      initialValues={initialValues}
      onSubmit={(values) => {
        props.route(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <Field name="addressLine1" type="text">
              {({ field, form }) => (
                <FormControl
                  className={
                    form.touched[field.name] && form.errors[field.name]
                      ? styles.addressContainerError
                      : styles.addressContainer
                  }
                >
                  <InputLabel
                    className={
                      form.touched[field.name] && form.errors[field.name]
                        ? styles.fieldLabelError
                        : styles.fieldLabel
                    }
                  >
                    Street Address
                  </InputLabel>
                  <Input
                    className={styles.input}
                    error={form.touched[field.name] && form.errors[field.name]}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="addressLine1">
              {msg => <div className={styles.inputError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <Field name="addressLine2" type="text">
              {({ field, form }) => (
                <FormControl
                  className={
                    form.touched[field.name] && form.errors[field.name]
                      ? styles.addressContainerError
                      : styles.addressContainer
                  }
                >
                  <InputLabel
                    className={
                      form.touched[field.name] && form.errors[field.name]
                        ? styles.fieldLabelError
                        : styles.fieldLabel
                    }
                  >
                    Street Address 2
                  </InputLabel>
                  <Input
                    className={styles.input}
                    error={form.touched[field.name] && form.errors[field.name]}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
          </div>
          <div>
            <Field name="city" type="text">
              {({ field, form }) => (
                <FormControl
                  className={
                    form.touched[field.name] && form.errors[field.name]
                      ? styles.fieldContainerError
                      : styles.fieldContainer
                  }
                >
                  <InputLabel
                    className={
                      form.touched[field.name] && form.errors[field.name]
                        ? styles.fieldLabelError
                        : styles.fieldLabel
                    }
                  >
                    City
                  </InputLabel>
                  <Input
                    className={styles.input}
                    error={form.touched[field.name] && form.errors[field.name]}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="city">
              {msg => <div className={styles.inputError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <Field name="postal" type="text">
              {({ field, form }) => (
                <FormControl
                  className={
                    form.touched[field.name] && form.errors[field.name]
                      ? styles.fieldContainerError
                      : styles.fieldContainer
                  }
                >
                  <InputLabel
                    className={
                      form.touched[field.name] && form.errors[field.name]
                        ? styles.fieldLabelError
                        : styles.fieldLabel
                    }
                  >
                    Postal Code
                  </InputLabel>
                  <Input
                    className={styles.input}
                    error={form.touched[field.name] && form.errors[field.name]}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="postal">
              {msg => <div className={styles.inputError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <Field name="state" type="text">
              {({ field, form }) => (
                <FormControl
                  className={
                    form.touched[field.name] && form.errors[field.name]
                      ? styles.selectFieldError
                      : styles.selectField
                  }
                >
                  <InputLabel
                    className={
                      form.touched[field.name] && form.errors[field.name]
                        ? styles.selectLabelError
                        : styles.selectLabel
                    }
                  >
                    State
                  </InputLabel>
                  <Select
                    error={form.touched[field.name] && form.errors[field.name]}
                    className={styles.input}
                    {...field}
                  >
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
            <ErrorMessage name="state">
              {msg => <div className={styles.inputError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <button className={styles.submitButton} type="submit">
            Continue
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RequestLocationForm;
