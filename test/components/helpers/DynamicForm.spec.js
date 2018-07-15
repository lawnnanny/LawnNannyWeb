import React from 'react';
import { Button, Form, Segment, Header, Radio, Checkbox, TextArea, Dropdown, Input } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { Chance } from 'chance';
import DynamicFormComponent from '../../../src/components/helpers/DynamicForm';

const chance = new Chance();

const randomType = () => {
  switch (chance.integer() % 4) {
    case 0:
      return 'textArea';
    case 1:
      return 'radio';
    case 2:
      return 'checkbox';
    case 3:
      return 'input';
    default:
      return 'textArea';
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
    const type = randomType();

    const field = {
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
            expect(wrapper.childAt(1).childAt(0).childAt(count).childAt(1)
              .props().name === field.name);
            if (field.type === 'checkbox') {
              expect(wrapper.childAt(1).childAt(0).childAt(count).childAt(1)
                .props()
                .type()).toEqual(Checkbox);
            }
            if (field.type === 'radio') {
              expect(wrapper.childAt(1).childAt(0).childAt(count).childAt(1)
                .props()
                .type()).toEqual(Radio);

              if (fail) {
                const state = { errors: {} };
                state.errors[field.id] = 'Radio Button Not Selected';
                wrapper.setState(state);
              }
            }
            if (field.type === 'textArea') {
              expect(wrapper.childAt(1).childAt(0).childAt(count).childAt(1)
                .props()
                .type()).toEqual(TextArea);

              if (fail) {
                const state = { errors: {} };
                state.errors[field.id] = 'Empty Text Box';
                wrapper.setState(state);
              }
            }
            if (field.type === 'dropDown') {
              expect(wrapper.childAt(1).childAt(0).childAt(count).childAt(1)
                .props()
                .type()).toEqual(Dropdown);

              if (fail) {
                const state = { errors: {} };
                state.errors[field.id] = 'Nothing is Selected';
                wrapper.setState(state);
              }
            }
            if (field.type === 'input') {
              expect(wrapper.childAt(1).childAt(0).childAt(count).childAt(1)
                .props()
                .type()).toEqual(Input);

              if (fail) {
                const state = { errors: {} };
                state.errors[field.id] = 'Empty Input';
                wrapper.setState(state);
              }
            }
            wrapper.update();
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
