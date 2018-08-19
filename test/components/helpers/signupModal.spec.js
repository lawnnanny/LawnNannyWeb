import React from 'react';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import SignupModal from '../../../src/components/helpers/signupModal';
import DynamicComponent from '../../../src/components/helpers/DynamicForm';

describe('signup modal', () => {
  let wrapper;

  const renderComponent = () => shallow(<SignupModal />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a modal', () => {
    expect(wrapper.type()).toEqual(Modal);
  });

  it('is a tiny modal', () => {
    expect(wrapper.props().size).toEqual('tiny');
  });

  it('displays a close icon', () => {
    expect(wrapper.props().closeIcon).toBeTruthy();
  });

  describe('Signup Modal trigger', () => {
    let signupModalTrigger;

    beforeEach(() => {
      signupModalTrigger = shallow(wrapper.props().trigger);
    });

    it('is a menu item', () => {
      const expectedType = shallow(<Menu.Item />).type();

      expect(signupModalTrigger.type()).toEqual(expectedType);
    });
    describe('signup Modal Button', () => {
      let signupModalButton;
      beforeEach(() => {
        signupModalButton = signupModalTrigger.childAt(0);
      });

      it('is a modal button', () => {
        expect(signupModalButton.type()).toEqual(Button);
      });
      it('it displays the correct text', () => {
        const buttonText = signupModalButton.childAt(0);
        expect(buttonText.text()).toEqual('Sign Up');
      });
    });
  });

  describe('Signup Modal Header', () => {
    let signupModalHeader;

    beforeEach(() => {
      signupModalHeader = wrapper.childAt(0);
    });

    it('is a modal header', () => {
      expect(signupModalHeader.type()).toEqual(Modal.Header);
    });

    it('displays the correct message', () => {
      const signupModalHeaderText = signupModalHeader.childAt(0);

      expect(signupModalHeaderText.text()).toEqual('Sign Up!');
    });
  });

  describe('Signup Modal Description', () => {
    let signupModalDescription;

    beforeEach(() => {
      signupModalDescription = wrapper.childAt(1);
    });

    it('is a modal description', () => {
      expect(signupModalDescription.type()).toEqual(Modal.Description);
    });

    describe('Signup Modal Form', () => {
      let signupModalForm;

      beforeEach(() => {
        signupModalForm = signupModalDescription.childAt(1);
      });

      it('is a dynamic form', () => {
        expect(signupModalForm.type()).toEqual(DynamicComponent);
      });
    });
  });
});
