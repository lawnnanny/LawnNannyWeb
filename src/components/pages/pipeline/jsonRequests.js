export const Requests = {
  Requests: {
    "Lawn Mowing": {
      fields: [
        {
          name: "GrassBagged",
          type: "checkbox",
          placeholder: "Would you like to have the grass bagged?",
          id: "lawnGrassBagged"
        },
        {
          name: "Does the lawn have a sprinkler system installed?",
          size: "2",
          label1: "yes",
          label2: "no",
          type: "radio",
          id: "lawnSprinkler"
        },
        {
          name: "Please provide additional comments on the lawn",
          type: "textArea",
          placeholder: "Enter comments here",
          id: "lawnComments"
        }
      ]
    },
    "Leaf Raking": {
      fields: [{ name: "Address", type: "text", id: "leafRaking" }]
    },
    "Snow Clearing": {
      fields: [{ name: "Address", type: "text", id: "snowClearing" }]
    },
    "Custom Request": {
      fields: [{ name: "Address", type: "text", id: "customRequest" }]
    }
  }
};
export default Requests;
