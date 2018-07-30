export const loginJsonForm = {
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
        password: 'password',
      },
    ],
  },
};
export default loginJsonForm;
