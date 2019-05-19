import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import NavBar from './ConnectedNavBar';

describe('Connected RequestInformation Page', () => {
  let store;

  beforeEach(() => {
    const state = {
      login: {
        isLoggedIn: false,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<NavBar store={store} />);

    const dispatchProps = ['setLoggedIn'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
