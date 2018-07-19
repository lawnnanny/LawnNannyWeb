import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import NavBar from '../../src/connectedComponents/ConnectedNavBar';

describe('Connected NavBar', () => {
  let store;

  beforeEach(() => {
    const state = {};

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<NavBar store={store} />);

    const dispatchProps = ['login', 'signup'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
