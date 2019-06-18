import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

const renderComponent = () => shallow(<Login />);
describe('Login Component', () => {
  it('Should be a div', () => {
    const loginComponent = renderComponent();
    expect(loginComponent.type()).toEqual('div');
  });
});
