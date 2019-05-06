export const jsonForm = {
  Location: {
    description: 'Job Location',
    popup: 'Please specify the address of where you would like the job to be performed.',
    button: 'Continue',
    fields: [
      {
        name: 'cityZip',
        type: 'rowCombination',
        fields: [
          {
            name: 'City',
            type: 'input',
            placeholder: 'city',
            id: 'city',
            validation: true,
          },
          {
            name: 'Zipcode',
            type: 'input',
            placeholder: 'zipcode',
            id: 'zipcode',
            validation: true,
          },
        ],
      },
      {
        name: 'Street Address',
        type: 'input',
        placeholder: '',
        id: 'streetAddress',
        validation: true,
      },

      {
        name: 'State',
        type: 'dropDown',
        placeholder: 'State',
        id: 'state',
        validation: true,
      },
    ],
  },
  SignUp: {
    button: 'Sign Up',
    fields: [
      {
        name: 'First Name',
        type: 'input',
        placeholder: 'first name',
        id: 'firstName',
        validation: true,
      },
      {
        name: 'Last Name',
        type: 'input',
        placeholder: 'last name',
        id: 'lastName',
        validation: true,
      },
      {
        name: 'Email',
        type: 'input',
        placeholder: 'email@example.com',
        id: 'email',
        validation: true,
      },
      {
        name: 'Password',
        type: 'input',
        placeholder: 'password',
        id: 'password',
        validation: true,
      },
      {
        name: 'Retype Password',
        type: 'input',
        placeholder: 'retype password',
        id: 'retypedPassword',
        validation: true,
      },
    ],
  },
  Login: {
    button: 'Login',
    fields: [
      {
        name: 'Email',
        type: 'input',
        placeholder: 'email',
        id: 'email',
        validation: true,
      },
      {
        name: 'Password',
        type: 'input',
        placeholder: 'password',
        id: 'password',
        validation: true,
      },
    ],
  },
};
export default jsonForm;
