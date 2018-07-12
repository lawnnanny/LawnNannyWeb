export const Requests = {
  'Requests Details': {
    'Lawn Mowing': {
      fields: [
        {
          name: 'Would you like your grass bagged?',
          type: 'checkbox',
          placeholder: 'Would you like to have the grass bagged?',
          id: 'lawnGrassBagged',
        },
        {
          name: 'Does the lawn have a sprinkler system installed?',
          options: ['yes', 'no'],
          type: 'radio',
          id: 'lawnSprinkler',
          validation: 'required',
        },
        {
          name: 'Please provide additional comments.',
          type: 'textArea',
          placeholder: 'Enter comments here',
          id: 'comments',
          validation: 'required',
        },
      ],
    },
    'Leaf Raking': {
      fields: [
        {
          name: 'How would you like your leaves?',
          options: ['Bagged', 'Into Piles', 'Taken Away', 'Other'],
          type: 'radio',
          id: 'leavesCollection',
          validation: 'required',
        },
        {
          name: 'Please provide additional comments?',
          type: 'textArea',
          placeholder: 'Enter comments here',
          id: 'comments',
          validation: 'required',
        },
      ],
    },
    'Snow Clearing': {
      fields: [
        {
          name: 'Side Walk',
          type: 'checkbox',
          placeholder: 'Snowblow Your SideWalk?',
          id: 'snowBlowSideWalk',
        },
        {
          name: 'Driveway',
          type: 'checkbox',
          placeholder: 'Snwoblow Your Driveway?',
          id: 'snowBlowDriveWay',
        },
        {
          name: 'Porch/Deck',
          type: 'checkbox',
          placeholder: 'Snowblow Your Porch/Deck?',
          id: 'snowBlowPorchDeck',
        },
        {
          name: 'Please provide additional comments?',
          type: 'textArea',
          placeholder: 'Enter comments here',
          id: 'comments',
          validation: 'required',
        },
      ],
    },
    'Custom Request': {
      fields: [
        {
          name: 'Please provide additional comments?',
          type: 'textArea',
          placeholder: 'Enter comments here',
          id: 'comments',
        },
      ],
    },
  },
  address: {
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
  },
};
export default Requests;
