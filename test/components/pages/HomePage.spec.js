import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import HomePage from '../../../src/components/pages/HomePage';

describe('Home Page', () => {
  let wrapper;

  const renderComponent = () => shallow(<HomePage />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid', () => {
    expect(wrapper.type()).toEqual(Grid);
  });
  describe('button Row', () => {
    let buttonRow;

    beforeEach(() => {
      buttonRow = wrapper.childAt(0);
    });

    it('is a row', () => {
      expect(buttonRow.type()).toEqual(Grid.Row);
    });

    describe('link', () => {
      let link;

      beforeEach(() => {
        link = buttonRow.childAt(0);
      });

      it('is a link', () => {
        expect(link.type()).toEqual(Link);
      });
      describe('button', () => {
        let button;

        beforeEach(() => {
          button = link.childAt(0).childAt(0);
        });

        it('is a button', () => {
          expect(button.type()).toEqual(Button);
        });
      });
    });
  });
});
