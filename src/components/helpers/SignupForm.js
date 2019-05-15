import React from 'react';
import Component from 'mson-react/lib/component';

const definition = {
  component: 'Form',
  fields: [
    {
      component: 'EmailField',
      name: 'emailField',
      label: 'Email',
      help: 'Example help',
      required: true,
    },
    {
      name: 'passwordField',
      component: 'PasswordField',
      label: 'Passwprd',
      help: 'Example help',
      required: true,
    },
    {
      name: 'submit',
      component: 'ButtonField',
      type: 'submit',
      label: 'Create Account',
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

const SignupForm = () => (
  <Component
    definition={definition}
    onMount={({ component }) => {
      // Load any initial data, e.g. from an API
      component.setValues({
        id: 'abc123',
        firstName: 'Bob',
        lastName: 'Marley',
        email: 'bob@example.com',
      });
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
        // Everything was successful so redirect, show confirmation, etc...
      }
    }}
  />
);

export default SignupForm;
