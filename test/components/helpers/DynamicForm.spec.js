import React from 'react';
import { Form, Segment, Header, Checkbox, TextArea, Dropdown, Popup } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { Chance } from 'chance';
import DynamicFormComponent from '../../../src/components/helpers/DynamicForm';
import InlineErrorComponent from '../../../src/components/helpers/InlineError';
import testDataFunctions from '../../testDataGenerators/generateTestData';

const chance = new Chance();

const failTest = (wrapper, field, count) => {
  if (chance.integer() % 2 && field.validation) {
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

describe('DynamicForm', () => {
  let wrapper;
  const setRequest = jest.fn();
  const testJson = testDataFunctions.generateTestFormJson();
  const route = jest.fn();
  const testReduxState = testDataFunctions.generateTestStateJson(testJson);
  const renderComponent = () =>
    shallow(
      <DynamicFormComponent
        popup
        jsonForm={() => testJson}
        reduxInfo={testReduxState}
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

    it('is has an as equal to h1', () => {
      expect(header.props().as).toEqual('h1');
    });

    it('is the correct text in the header', () => {
      expect(header.childAt(0).debug()).toEqual(testJson[Object.keys(testJson)[0]].description);
    });
    describe('popup', () => {
      let popup;

      beforeEach(() => {
        popup = header.childAt(1);
      });

      it('is a popup', () => {
        expect(popup.type()).toEqual(Popup);
      });
    });
  });
  describe('form segment', () => {
    let formSegment;

    beforeEach(() => {
      formSegment = wrapper.childAt(1);
    });

    it('is a segment', () => {
      expect(formSegment.type()).toEqual(Segment);
    });

    describe('form', () => {
      let formComponent;
      beforeEach(() => {
        formComponent = formSegment.childAt(0);
      });
      it('is a form', () => {
        expect(formComponent.type()).toEqual(Form);
      });

      describe('form data', () => {
        let count = -1;
        beforeEach(() => {
          count += 1;
          wrapper = renderComponent();
          formSegment = wrapper.childAt(1);
          formComponent = formSegment.childAt(0);
        });
        testJson[Object.keys(testJson)[0]].fields.forEach((field) => {
          it(`field ${count} is correct`, () => {
            if (field.type !== 'rowCombination') {
              const pre = formComponent.childAt(count);
              const label = pre.childAt(0);
              expect(label.childAt(0).text()).toEqual(field.name);
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
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .props().checked,
              ).toEqual(testReduxState[field.id].entry);
              failTest(wrapper, field, count);
            }
            if (field.type === 'radio') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Form.Group);
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .props().checked,
              ).toEqual(testReduxState[field.id].checked);
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
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .props().value,
              ).toEqual(testReduxState[field.id].entry);
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
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .props().value,
              ).toEqual(testReduxState[field.id].entry);
              failTest(wrapper, field, count);
            }

            if (field.type === 'rowCombination') {
              let subFieldCounter = 0;
              field.fields.forEach((input) => {
                const rowInput = wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(subFieldCounter)
                  .childAt(1);

                switch (input.type) {
                  case 'input':
                    expect(rowInput.type()).toEqual(Form.Input);
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
                failTest(wrapper, field, count);
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
              ).toEqual(Form.Input);

              failTest(wrapper, field, count);
            }
          });
        });
      });
      describe('Form Button', () => {
        let formButton;

        beforeEach(() => {
          formButton = formComponent.childAt(testDataFunctions.numberOfFields).childAt(0);
        });

        it('It is a button', () => {
          expect(formButton.type()).toEqual(Form.Button);
        });
      });
    });
  });
});
