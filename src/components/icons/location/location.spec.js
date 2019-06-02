import React from 'react';
import { shallow } from 'enzyme';
import LocationIcon from '@material-ui/icons/LocationOn';
import Location from '.';

describe('Location icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Location />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a location icon', () => {
    expect(wrapper.type()).toEqual(LocationIcon);
  });
});
