import React from 'react';
import { shallow } from 'enzyme';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventNote from '.';

describe('EventNote icon', () => {
  let wrapper;

  const renderComponent = () => shallow(<EventNote />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is an event note icon', () => {
    expect(wrapper.type()).toEqual(EventNoteIcon);
  });
});
