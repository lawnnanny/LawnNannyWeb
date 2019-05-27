import React from 'react';
import { shallow } from 'enzyme';
import CloseIcon from '@material-ui/icons/Close';
import Close from '.';

describe('Close icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Close />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is an close icon', () => {
    expect(wrapper.type()).toEqual(CloseIcon);
  });
});
