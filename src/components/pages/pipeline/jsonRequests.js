export const Requests = {
  Requests: {
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
        },
        {
          name: 'Please provide additional comments?',
          type: 'textArea',
          placeholder: 'Enter comments here',
          id: 'comments',
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
        },
        {
          name: 'Please provide additional comments?',
          type: 'textArea',
          placeholder: 'Enter comments here',
          id: 'comments',
        },
      ],
    },
    'Snow Clearing': {
      fields: [
        {
          name: 'SideWalk',
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
        },
      ],
    },
    'Custom Request': {
      fields: [{
        name: 'Please provide additional comments?',
        type: 'textArea',
        placeholder: 'Enter comments here',
        id: 'comments',
      }],
    },
  },
};
export default Requests;
