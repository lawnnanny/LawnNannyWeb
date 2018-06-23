import React from 'react';
import { shallow } from 'enzyme';
import { RequestPipeline } from '../../../src/components/pages/requestPipeline';

describe('Request Pipeline', () => {
  let wrapper;

  const renderComponent = () => shallow(<RequestPipeline />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  describe('Header', () => {
    let header;

    beforeEach(() => {
      header = wrapper.childAt(0);
    });

    it('is an h1', () => {
      expect(header.type()).toEqual('h1');
    });

    it('has the correct text', () => {
      expect(header.text()).toEqual('requestPipeline');
    });
  });
});
