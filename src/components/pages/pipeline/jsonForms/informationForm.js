export const jsonForm = {
  'Lawn Mowing': {
    description: 'Lawn Details',
    popup: 'Please specify some details about the lawn so a worker can better fit your needs',
    button: 'Continue',
    fields: [
      {
        name: 'I would like my grass bagged?',
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
        name: 'Please provide a short description of the lawn.',
        type: 'textArea',
        placeholder: 'Enter comments here',
        id: 'comments',
        validation: 'required',
      },
    ],
  },
  'Leaf Raking': {
    description: 'Raking Details',
    popup: 'Please specify some details about raking so a worker can better fit your needs',
    button: 'Continue',
    fields: [
      {
        name: 'How would you like your leaves?',
        options: ['Bagged', 'Into Piles', 'Taken Away', 'Other'],
        type: 'radio',
        id: 'leavesCollection',
        validation: 'required',
      },
      {
        name: 'Please provide a short description of the job',
        type: 'textArea',
        placeholder: 'Enter comments here',
        id: 'comments',
        validation: 'required',
      },
    ],
  },
  'Snow Clearing': {
    description: 'Snow Clearing',
    popup:
      'Please specify some details about the snow clearing so a worker can better fit your needs',
    button: 'Continue',
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
        name: 'Please provide a short description of the job',
        type: 'textArea',
        placeholder: 'Enter comments here',
        id: 'comments',
        validation: 'required',
      },
    ],
  },
  'Custom Request': {
    description: 'Custom Details',
    popup: 'Please specify some details so a worker can better fit your needs',
    button: 'Continue',
    fields: [
      {
        name: 'Please provide a description of what task youd like completed?',
        type: 'textArea',
        placeholder: 'Enter comments here',
        id: 'comments',
      },
    ],
  },
};
export default jsonForm;
