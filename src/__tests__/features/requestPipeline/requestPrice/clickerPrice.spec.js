import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import Clicker from '../../../../../src/features/requestPipeline/requestPrice/clickerPrice';

describe('RequestInformation', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<Clicker incrementRequestPrice={jest.fn()} decrementRequestPrice={jest.fn()} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  describe('triangleTopButton', () => {
    let triangleTopbutton;
    beforeEach(() => {
      triangleTopbutton = wrapper.childAt(0).childAt(0);
    });

    it('is a button', () => {
      expect(triangleTopbutton.type()).toEqual(Button);
    });
    describe('triangleTopImage', () => {
      let triangleTopimage;
      beforeEach(() => {
        triangleTopimage = triangleTopbutton.childAt(0);
      });

      it('is a image', () => {
        expect(triangleTopimage.type()).toEqual(Image);
      });
    });
  });
  describe('triangleBottomButton', () => {
    let triangleBottombutton;
    beforeEach(() => {
      triangleBottombutton = wrapper.childAt(1).childAt(0);
    });

    it('is a button', () => {
      expect(triangleBottombutton.type()).toEqual(Button);
    });
    describe('triangleBottomImage', () => {
      let triangleBottomimage;
      beforeEach(() => {
        triangleBottomimage = triangleBottombutton.childAt(0);
      });

      it('is a image', () => {
        expect(triangleBottomimage.type()).toEqual(Image);
      });
    });
  });
});
