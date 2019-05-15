import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginModal from '../../../../src/connectedComponents/helpers/ConnectedLoginModal';

describe('Connected Login modal', () => {
  let store;

  beforeEach(() => {
    const state = {};

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<LoginModal store={store} />);

    const dispatchProps = ['login'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
