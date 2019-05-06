export const loginJsonForm = {
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
        password: 'password',
      },
    ],
  },
};
export default loginJsonForm;
