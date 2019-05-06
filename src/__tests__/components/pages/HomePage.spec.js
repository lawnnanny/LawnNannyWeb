import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../../../src/components/pages/Homepage/HomePage';

describe('Home Page', () => {
  let wrapper;

  const renderComponent = () => shallow(<HomePage />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid', () => {
    expect(wrapper.type()).toEqual(Grid);
  });
  describe('heading Row', () => {
    let headingRow;

    beforeEach(() => {
      headingRow = wrapper.childAt(0);
    });

    it('is a row', () => {
      expect(headingRow.type()).toEqual(Grid.Row);
    });

    describe('segment', () => {
      let segment;

      beforeEach(() => {
        segment = headingRow.childAt(0);
      });

      it('is a segment', () => {
        expect(segment.type()).toEqual(Segment);
      });
      describe('header', () => {
        let header;

        beforeEach(() => {
          header = segment.childAt(0);
        });

        it('is a button', () => {
          expect(header.type()).toEqual(Header);
        });
      });
      describe('button', () => {
        let button;

        beforeEach(() => {
          button = segment.childAt(1).childAt(0);
        });

        it('is a button', () => {
          expect(button.type()).toEqual(Button);
        });
      });
    });
  });
});
