import React from 'react';
import PropTypes from 'prop-types';
import Component from 'mson-react/lib/component';

const definition = {
  component: 'Form',
  fields: [
    {
      name: 'heading',
      component: 'Text',
      text: 'Lawn Location',
    },
    {
      component: 'AddressField',
      name: 'addressField',
      label: 'AddressField',
      help: 'Example help',
      required: true,
      elevate: false,
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

const RequestLocationForm = props => (
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

RequestLocationForm.propTypes = {
  route: PropTypes.func,
};

RequestLocationForm.defaultProps = {
  route: PropTypes.func,
};
export default RequestLocationForm;
