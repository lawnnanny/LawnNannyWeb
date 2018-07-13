import React from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import DynamicFormComponent from '../../../src/components/helpers/DynamicForm';

describe('DynamicForm', () => {
  let wrapper;
  const setRequest = jest.fn();
  const route = jest.fn();
  const renderComponent = () =>
    shallow(
      <DynamicFormComponent
        setRequest={setRequest}
        requestType={'Location'}
        requestForm={'address'}
        route={route}
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
    it('is has a size', () => {
      expect(header.props().size).toEqual('large');
    });
  });

  describe('form', () => {
    let form;

    beforeEach(() => {
      form = wrapper.childAt(1);
    });

    it('is a form', () => {
      expect(form.type()).toEqual(Form);
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
