import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import StepComponent from './';
import LocationIcon from '../../icons/location';

describe('step', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<StepComponent value={2} name="Selection" link="/pipeline" />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a link', () => {
    expect(wrapper.type()).toEqual(Link);
  });
  describe('information column', () => {
    let informationColumn;

    beforeEach(() => {
      informationColumn = wrapper.childAt(0);
    });

    it('is a grid', () => {
      expect(informationColumn.type()).toEqual(Grid);
    });
    describe('location icon', () => {
      let locationIcon;

      beforeEach(() => {
        locationIcon = informationColumn.childAt(0).childAt(0);
      });
      it('is a location icon', () => {
        expect(locationIcon.type()).toEqual(LocationIcon);
      });
    });
    describe('bars', () => {
      let label;

      beforeEach(() => {
        label = informationColumn.childAt(1);
      });

      it('is a div', () => {
        expect(label.type()).toEqual('div');
      });
    });
    describe('label', () => {
      let label;

      beforeEach(() => {
        label = informationColumn.childAt(2);
      });

      it('is a label', () => {
        expect(label.type()).toEqual('h2');
      });
    });
  });
});
