import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RequestLocation from '../../src/connectedComponents/ConnectedRequestLocation';

describe('Connected RequestLocation Page', () => {
  let store;

  beforeEach(() => {
    const state = {
      requests: {
        selection: 'Lawn Mowing',
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<RequestLocation store={store} />);

    const dispatchProps = ['setRequestLocation'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
