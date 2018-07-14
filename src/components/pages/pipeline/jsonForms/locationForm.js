export const jsonForm = {
  Location: {
    fields: [
      {
        name: 'Street Address',
        type: 'input',
        placeholder: '',
        id: 'streetAddress',
        validation: 'required',
      },
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
      {
        name: 'State',
        type: 'dropDown',
        placeholder: 'State',
        id: 'state',
        validation: 'required',
      },
    ],
  },
};
export default jsonForm;
