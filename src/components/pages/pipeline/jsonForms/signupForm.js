export const signupJsonForm = {
  SignUp: {
    button: 'Sign Up',
    fields: [
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
  SignUpPassword: {
    button: 'Sign Up',
    fields: [
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
};
export default signupJsonForm;
