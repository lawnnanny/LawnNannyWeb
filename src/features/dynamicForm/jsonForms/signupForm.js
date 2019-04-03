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
        name2: 'Retype Password',
        type: 'registerPassword',
        placeholder: 'password',
        placeholder2: 'retype password',
        id: 'password',
        id2: 'retype password',
        validation: 'required',
        password: 'password',
      },
    ],
  },
};
export default signupJsonForm;
