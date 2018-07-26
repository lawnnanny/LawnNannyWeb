import { Chance } from 'chance';

const chance = new Chance();

const numberOfFields = (Math.abs(chance.integer()) % 10) + 2;

const randomType = (useRowCombination) => {
  switch (chance.integer() % 5) {
    case 0:
      return 'textArea';
    case 1:
      return 'radio';
    case 2:
      return 'checkbox';
    case 3:
      if (useRowCombination) {
        return 'rowCombination';
      }
      return 'input';
    case 4:
      return 'input';
    default:
      return 'textArea';
  }
};

const createRandomOptions = () => {
  const options = [];
  const numberOfOptions = (Math.abs(chance.integer()) % 11) + 2;
  for (let counter = 0; counter < numberOfOptions; counter += 1) {
    options[counter] = chance.word();
  }
  return options;
};

const generateTestFormJson = () => {
  const name = chance.word();
  const jsonForm = {};
  const fields = [];
  for (let counter = 0; counter < numberOfFields; counter += 1) {
    const type = randomType(true);

    let field = {};
    if (type === 'rowCombination') {
      const numberOfSubFields = (chance.integer() % 15) + 2;
      const subFields = [];
      for (let counting = 0; counting < numberOfSubFields; counting += 1) {
        const subFieldType = randomType(false);
        const subField = {
          name: chance.word(),
          type: subFieldType,
          id: chance.word(),
        };

        if (chance.integer() % 2 === 0) {
          subField.validation = 'required';
        }

        if (type === 'radio') {
          subField.options = createRandomOptions();
        }

        if (subFieldType === 'textArea' || type === 'input') {
          subField.placeholder = chance.word();
        }
        subFields[counting] = subField;
      }

      field = {
        name: chance.word(),
        type: 'rowCombination',
        fields: subFields,
      };
    } else {
      field = {
        name: chance.word(),
        type,
        id: chance.word(),
      };

      if (chance.integer() % 2 === 0) {
        field.validation = 'required';
      }
      if (type === 'radio') {
        field.options = createRandomOptions();
      }
      if (type === 'textArea' || type === 'input') {
        field.placeholder = chance.word();
      }
    }

    fields[counter] = field;
  }
  jsonForm[name] = {};
  jsonForm[name].popup = chance.word();
  jsonForm[name].description = chance.word();
  jsonForm[name].fields = fields;
  return jsonForm;
};

const generateTestStateJson = (testJson) => {
  const jsonForm = {};
  testJson[Object.keys(testJson)[0]].fields.forEach((field) => {
    if (field.type === 'checkbox') {
      jsonForm[field.id] = {
        entry: chance.bool(),
        id: chance.word(),
        type: randomType(),
        validation: 'required',
      };
    } else {
      jsonForm[field.id] = {
        entry: chance.word(),
        id: chance.word(),
        type: randomType(),
        validation: 'required',
      };
    }
  });
  return jsonForm;
};

export default {
  generateTestStateJson,
  generateTestFormJson,
  createRandomOptions,
  randomType,
  numberOfFields,
};
