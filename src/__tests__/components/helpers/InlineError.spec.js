import React from 'react';
import { shallow } from 'enzyme';
import InlineError from '../../../../src/components/helpers/InlineError';

describe('InlineError', () => {
  let wrapper;

  const renderComponent = () => shallow(<InlineError text={'error'} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('Inline Error text got set', () => {
    expect(wrapper.props().children).toEqual('error');
  });
});
