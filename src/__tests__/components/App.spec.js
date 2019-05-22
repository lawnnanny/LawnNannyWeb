import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/components/App';
import Routes from '../../../src/helpers/routes';

describe('App', () => {
  let wrapper;
  const renderComponent = () => shallow(<App />);

  beforeEach(() => {
    jest.mock('../../../src/helpers/routes');

    wrapper = renderComponent();
  });

  it('renders the routes component', () => {
    expect(wrapper.type()).toEqual(Routes);
  });
});
