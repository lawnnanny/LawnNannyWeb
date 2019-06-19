import React from 'react';
import { shallow } from 'enzyme';
import RegistarForm from './';

const registarForm = shallow(<RegistarForm />);
describe('registar form component', () => {
  it('Should be a div', () => expect(registarForm.type()).toEqual('div'));
});
