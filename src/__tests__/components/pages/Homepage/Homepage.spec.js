import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import HomePage from '../../../../../src/components/pages/Homepage/HomePage';

describe('Home Page', () => {
  let wrapper;

  const renderComponent = () => shallow(<HomePage />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid', () => {
    expect(wrapper.type()).toEqual(Grid);
  });
});
