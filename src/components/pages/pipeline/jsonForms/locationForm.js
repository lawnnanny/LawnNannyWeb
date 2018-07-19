export const jsonForm = {
  Location: {
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
          {
            name: 'Please provide a short description of the lawn.',
            type: 'textArea',
            placeholder: 'Enter comments here',
            id: 'comments',
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
};
export default jsonForm;
