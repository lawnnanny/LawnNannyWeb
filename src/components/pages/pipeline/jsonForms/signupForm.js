export const signupJsonForm = {
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
};
export default signupJsonForm;
