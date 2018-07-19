import React from 'react';
import {
  Button,
  Form,
  Segment,
  Header,
  Radio,
  Checkbox,
  TextArea,
  Dropdown,
  Input,
} from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { Chance } from 'chance';
import DynamicFormComponent from '../../../src/components/helpers/DynamicForm';
import InlineErrorComponent from '../../../src/components/helpers/InlineError';

const chance = new Chance();

const randomType = (useRowCombination) => {
  switch (chance.integer() % 5) {
    case 0:
      return 'textArea';
    case 1:
      return 'radio';
    case 2:
      return 'checkbox';
    case 3:
      return 'input';
    case 4:
      if (useRowCombination) {
        return 'rowCombination';
      }
      return 'input';
    default:
      return 'textArea';
  }
};

const failTest = (wrapper, field, count) => {
  if (chance.integer() % 2) {
    const state = { errors: {} };
    state.errors[field.id] = 'Nothing is Selected';
    wrapper.setState(state);
    wrapper.update();
    expect(
      wrapper
        .childAt(1)
        .childAt(0)
        .childAt(count)
        .find(InlineErrorComponent)
        .props().text,
    ).toEqual('Nothing is Selected');
  }
};

const createRandomOptions = () => {
  const options = [];
  const numberOfOptions = (chance.integer() % 11) + 1;
  for (let counter = 0; counter < numberOfOptions; counter += 1) {
    options[counter] = chance.word();
  }
  return options;
};

const generateTestFormJson = () => {
  const name = chance.word();
  const jsonForm = {};
  const numberOfFields = (chance.integer() % 11) + 1;
  const fields = [];
  for (let counter = 0; counter < numberOfFields; counter += 1) {
    const type = randomType(true);

    let field = {};
    if (type === 'rowCombination') {
      const numberOfSubFields = (chance.integer() % 11) + 1;
      const subFields = [];
      for (let count = 0; count < numberOfSubFields; count += 1) {
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

        subFields[count] = subField;
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
  jsonForm[name].fields = fields;
  return jsonForm;
};

describe('DynamicForm', () => {
  let wrapper;
  const setRequest = jest.fn();
  const testJson = generateTestFormJson();
  const route = jest.fn();
  const renderComponent = () =>
    shallow(
      <DynamicFormComponent
        jsonForm={() => testJson}
        setRequest={setRequest}
        form={Object.keys(testJson)[0]}
        route={() => {
          route();
        }}
      />,
    );

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Segment', () => {
    expect(wrapper.type()).toEqual(Segment);
  });

  it('is styled as a padded Segment', () => {
    expect(wrapper.props().padded).toBeTruthy();
  });

  describe('header', () => {
    let header;

    beforeEach(() => {
      header = wrapper.childAt(0);
    });

    it('is a header', () => {
      expect(header.type()).toEqual(Header);
    });

    it('is has a large size', () => {
      expect(header.props().size).toEqual('large');
    });

    it('is the correct text in the header', () => {
      expect(header.childAt(0).debug()).toEqual(Object.keys(testJson)[0]);
    });
  });

  describe('form', () => {
    it('is a form', () => {
      expect(wrapper.childAt(1).type()).toEqual(Form);
    });


    describe('form data', () => {
      wrapper = renderComponent();
      testJson[Object.keys(testJson)[0]].fields.forEach((field) => {
        if (field.validation) {
          const fail = chance.integer() % 2;
          let count = 0;
          const form = wrapper.childAt(1);
          const segmentOfFields = form.childAt(0);
          it(`field ${count} is correct`, () => {
            const label = segmentOfFields.childAt(count).childAt(0);
            if (field.validation) {
              expect(label.text()).toEqual(` * ${field.name}`);
            } else {
              expect(label.text()).toEqual(field.name);
            }
            expect(
              wrapper
                .childAt(1)
                .childAt(0)
                .childAt(count)
                .childAt(1)
                .props().name === field.name,
            );
            if (field.type === 'checkbox') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Checkbox);
            }
            if (field.type === 'radio') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Radio);
              failTest(wrapper, field, count);
            }
            if (field.type === 'textArea') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(TextArea);
              failTest(wrapper, field, count);
            }
            if (field.type === 'dropDown') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Dropdown);
              failTest(wrapper, field, count);
            }

            if (field.type === 'rowCombination') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Form.Group);

              let subFieldCounter = 0;
              field.fields.forEach((input) => {
                const rowInput = wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .childAt(subFieldCounter);

                switch (input.type) {
                  case 'input':
                    expect(rowInput.type()).toEqual(Input);
                    break;
                  case 'dropDown':
                    expect(rowInput.type()).toEqual(Dropdown);
                    break;
                  case 'textArea':
                    expect(rowInput.type()).toEqual(TextArea);
                    break;
                  case 'checkbox':
                    expect(rowInput.type()).toEqual(Checkbox);
                    break;
                  case 'radio':
                    expect(rowInput.type()).toEqual(Checkbox);
                    break;
                  default:
                }
                ifailTest(wrapper, field, count);
                subFieldCounter += 1;
              });
            }

            if (field.type === 'input') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Input);

              failTest(wrapper, field, count);
            }
            count += 1;
          });
        }
      });
    });
  });

  describe('Submit Button', () => {
    let submitSegment;

    beforeEach(() => {
      submitSegment = wrapper.childAt(1).childAt(1);
    });

    it('It is a segment', () => {
      expect(submitSegment.type()).toEqual(Segment);
    });

    it('There is a button in the segment', () => {
      const button = submitSegment.childAt(0);
      expect(button.type()).toEqual(Button);
    });
  });
});
