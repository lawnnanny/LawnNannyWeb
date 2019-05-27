import React from 'react';
import { shallow } from 'enzyme';
import CreateIcon from '@material-ui/icons/Create';
import Create from '.';

describe('Create icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Create />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a create icon', () => {
    expect(wrapper.type()).toEqual(CreateIcon);
  });
});
