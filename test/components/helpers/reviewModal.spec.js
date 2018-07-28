import { shallow } from 'enzyme';
import { Menu, Modal, Grid } from 'semantic-ui-react';
import React from 'react';
import reviewModal from '../../../src/components/helpers/reviewModal';

describe('pipelineSignupModal', () => {
  let wrapper

  const renderComponent = (props = {}) =>
    shallow(
      <reviewModal />
    );

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a modal', () => {
    expect(wrapper.type()).toEqual(Modal);
  });

  describe('modal header', () => {
    let modalHeader;

    beforeEach(() => {
      modalHeader = wrapper.childAt(0);
    });

    it('is a modal header', () => {
      expect(modalHeader.type()).toEqual(Modal.Header);
    });
  });
    describe('Modal content', () => {
      let modalContent;

      beforeEach(() => {
        modalContent = wrapper.childAt(1);
      });
      it('is modal content', () => {
        expect(modalContent.type()).toEqual(Modal.Content);
      });
});
});
