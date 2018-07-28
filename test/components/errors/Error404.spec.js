import React from 'react';
import { shallow } from 'enzyme';
import { Error404 } from '../../../src/components/errors/Error404';

describe('404 Error', () => {
  let wrapper;

  const renderComponent = () => shallow(<Error404 />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a p', () => {
    expect(wrapper.type()).toEqual('p');
  });

  it('contains the correct message', () => {
    expect(wrapper.text()).toEqual('404 Not Found :');
  });
});
