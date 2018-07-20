import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RequestSelection from '../../src/connectedComponents/ConnectedRequestSelection';

describe('Connected RequestSelection Page', () => {
  let store;

  beforeEach(() => {
    const state = {};

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<RequestSelection store={store} />);

    const dispatchProps = ['setTypeOfRequest'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
