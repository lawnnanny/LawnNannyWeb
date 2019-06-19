import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Signup from './';

const registar = shallow(<Signup />);
describe('signup component', () => {
  it('Should be a div', () => {
    expect(registar.type()).toEqual('div');
  });

  describe('signup button', () => {
    const button = registar.childAt(0);

    it('Should be a button', () => {
      expect(button.type()).toEqual(Button);
    });
    it('Should say Registar', () => {
      expect(button.childAt(0).text()).toEqual('Register');
    });
  });
  describe('Dialog', () => {
    const dialog = registar.childAt(1);
    it('Should be a dialog', () => expect(dialog.type()).toEqual(Dialog));
    it('Should have an open prop', () => expect(dialog.props().open).toBeTruthy());
  });
});
