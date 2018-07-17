import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal, Grid, Input, Button, Form } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import Chance from 'chance';
import HomePage from '../../../src/components/pages/HomePage';
import NavBarComponent from '../../../src/components/helpers/navBar';
import * as Common from '../../../src/helpers/Common';

describe('Home Page', () => {
  let wrapper;
  let chance;

  const renderComponent = () => shallow(<HomePage />);

  beforeEach(() => {
    chance = Chance();
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
          button = link.childAt(0);
        });

        it('is a button', () => {
          expect(button.type()).toEqual(Button);
        });
      });
    });
  });
});
