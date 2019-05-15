import React from 'react';
import PropTypes from 'prop-types';
import Component from 'mson-react/lib/component';

const definition = {
  component: 'Form',
  fields: [
    {
      name: 'heading',
      component: 'Text',
      text: 'Lawn Details',
    },
    {
      component: 'BooleanField',
      name: 'booleanField',
      label: 'I would like my grass bagged',
    },
    {
      name: 'selectField',
      component: 'SelectField',
      label: 'I have a sprinkler system installed',
      required: true,
      blankString: 'None',
      options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    },
    {
      name: 'textField',
      component: 'TextField',
      label: 'Please provide a short description of the lawn',
      required: true,
    },
    {
      name: 'submit',
      component: 'ButtonField',
      type: 'submit',
      label: 'Submit',
      icon: 'Save',
    },
  ],
  validators: [
    {
      where: {
        'fields.email.value': 'nope@example.com',
      },
      error: {
        field: 'email',
        error: 'must not be {{fields.email.value}}',
      },
    },
  ],
};

const RequestInformationForm = props => (
  <Component
    definition={definition}
    onMount={({ component }) => {
      component.setValues({});
    }}
    onReset={({ component }) => component.reset()}
    onSubmit={() => {
      props.route();
    }}
  />
);

RequestInformationForm.propTypes = {
  route: PropTypes.func,
};

RequestInformationForm.defaultProps = {
  route: PropTypes.func,
};
export default RequestInformationForm;
