import React from 'react';
import Component from 'mson-react/lib/component';

const definition = {
  component: 'Form',
  fields: [
    {
      name: 'textField',
      component: 'TextField',
      label: 'Email',
      // mask: ['(', '/[1-9]/', '/\\d/', '/\\d/', ')'],
      // mask: '(...)',
      required: true,
    },
    {
      name: 'passwordField',
      component: 'PasswordField',
      label: 'Password',
      required: true,
    },
    {
      name: 'submit',
      component: 'ButtonField',
      type: 'submit',
      label: 'Login',
      icon: 'Save',
    },
  ],
};

const LoginForm = () => (
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

export default LoginForm;
