import React from 'react';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import LoginModal from '../../../src/components/helpers/loginModal';
import DynamicComponent from '../../../src/components/helpers/DynamicForm';

describe('loginModal', () => {
  let wrapper;

  const renderComponent = () => shallow(<LoginModal />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a modal', () => {
    expect(wrapper.type()).toEqual(Modal);
  });

  it('is a mini modal', () => {
    expect(wrapper.props().size).toEqual('mini');
  });

  it('displays a close modal button', () => {
    expect(wrapper.props().closeIcon).toBeTruthy();
  });

  describe('Login Modal trigger', () => {
    let loginModalTrigger;

    beforeEach(() => {
      loginModalTrigger = shallow(wrapper.props().trigger);
    });

    it('is a menu item', () => {
      const expectedType = shallow(<Menu.Item />).type();

      expect(loginModalTrigger.type()).toEqual(expectedType);
    });
    describe('Login Modal Button', () => {
      let loginModalButton;
      beforeEach(() => {
        loginModalButton = loginModalTrigger.childAt(0);
      });

      it('is a modal button', () => {
        expect(loginModalButton.type()).toEqual(Button);
      });
      it('it displays the correct text', () => {
        const buttonText = loginModalButton.childAt(0);
        expect(buttonText.text()).toEqual('Login');
      });
    });
  });

  describe('Login Modal Header', () => {
    let loginModalHeader;

    beforeEach(() => {
      loginModalHeader = wrapper.childAt(0);
    });

    it('is a modal header', () => {
      expect(loginModalHeader.type()).toEqual(Modal.Header);
    });

    it('displays the correct text', () => {
      const loginModalHeaderText = loginModalHeader.childAt(0);

      expect(loginModalHeaderText.text()).toEqual('Welcome Back!');
    });
  });

  describe('Login Modal Description', () => {
    let loginModalDescription;

    beforeEach(() => {
      loginModalDescription = wrapper.childAt(1);
    });

    it('is a modal description', () => {
      expect(loginModalDescription.type()).toEqual(Modal.Description);
    });

    describe('Dynamic Form Description', () => {
      let loginDescriptionForm;

      beforeEach(() => {
        loginDescriptionForm = loginModalDescription.childAt(0);
      });

      it('is a dynamic component', () => {
        expect(loginDescriptionForm.type()).toEqual(DynamicComponent);
      });
    });
  });
});
