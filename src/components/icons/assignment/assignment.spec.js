import React from 'react';
import { shallow } from 'enzyme';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Assignment from '.';

describe('Assignment icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<Assignment />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is an assignment icon', () => {
    expect(wrapper.type()).toEqual(AssignmentIcon);
  });
});
