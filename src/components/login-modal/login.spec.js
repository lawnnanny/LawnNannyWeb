

import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';


const loginComponent = shallow(<Login />);
describe('Login Component', () => {
  it('Should be a div', () => expect(loginComponent.type()).toEqual('div'));

  it('Should have a button', () => expect(loginComponent.childAt(0).text().includes('Button')).toEqual(true));

  describe('Register button', () => {
    it('Should say register', () => {
      const button = loginComponent.childAt(0);
      return expect(button.childAt(0).text()).toEqual('Register');
    });
  });
});
