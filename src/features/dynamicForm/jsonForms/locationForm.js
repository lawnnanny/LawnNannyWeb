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
            validation: 'required',
          },
          {
            name: 'Zipcode',
            type: 'input',
            placeholder: 'zipcode',
            id: 'zipcode',
            validation: 'required',
          },
        ],
      },
      {
        name: 'Street Address',
        type: 'input',
        placeholder: '',
        id: 'streetAddress',
        validation: 'required',
      },

      {
        name: 'State',
        type: 'dropDown',
        placeholder: 'State',
        id: 'state',
        validation: 'required',
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
        validation: 'required',
      },
      {
        name: 'Last Name',
        type: 'input',
        placeholder: 'last name',
        id: 'lastName',
        validation: 'required',
      },
      {
        name: 'Email',
        type: 'input',
        placeholder: 'email@example.com',
        id: 'email',
        validation: 'required',
      },
      {
        name: 'Password',
        type: 'input',
        placeholder: 'password',
        id: 'password',
        validation: 'required',
      },
      {
        name: 'Retype Password',
        type: 'input',
        placeholder: 'retype password',
        id: 'retypedPassword',
        validation: 'required',
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
        validation: 'required',
      },
      {
        name: 'Password',
        type: 'input',
        placeholder: 'password',
        id: 'password',
        validation: 'required',
      },
    ],
  },
};
export default jsonForm;
