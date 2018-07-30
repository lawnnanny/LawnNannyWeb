import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SignupModal from '../../../src/connectedComponents/helpers/ConnectedSignupModal';

describe('Connected NavBar', () => {
  let store;

  beforeEach(() => {
    const state = {};

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<SignupModal store={store} />);

    const dispatchProps = ['signup'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
