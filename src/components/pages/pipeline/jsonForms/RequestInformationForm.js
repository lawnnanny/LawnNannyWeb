import React from 'react';
import Component from 'mson-react/lib/component';

const definition = {
  component: 'Form',
  fields: [
    {
      component: 'AddressField',
      name: 'addressField',
      label: 'AddressField',
      help: 'Example help',
      required: true,
      elevate: false,
    },
    {
      name: 'buttonField',
      component: 'ButtonField',
      label: 'Continue',
      icon: 'Save',
      type: 'submit',
      block: true,
    },
  ],
};

const RequestInformationForm = () => (
  <Component
    definition={definition}
    onMount={({ component }) => {
      // Load any initial data, e.g. from an API
      component.setValues({});
    }}
    // Clear the form
    onReset={({ component }) => component.reset()}
    onSubmit={({ component }) => {
      // TODO: Contact some API with the data

      // Simulate response from API saying that email address is already in use and report this
      // error to the user
      if (component.get('fields.email.value') === 'taken@example.com') {
        component.set({ 'fields.email.err': 'already in use' });
      } else {
      }
    }}
  />
);

export default RequestInformationForm;
