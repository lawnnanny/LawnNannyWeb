import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Button, Label } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import StepComponent from '../../../src/components/helpers/breadcrumbStep';

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

    it('is a column', () => {
      expect(informationColumn.type()).toEqual(Grid.Column);
    });
    describe('information segment', () => {
      let informationSegment;

      beforeEach(() => {
        informationSegment = informationColumn.childAt(0);
      });

      it('is a segment', () => {
        expect(informationSegment.type()).toEqual(Segment);
      });
      describe('information button', () => {
        let informationbutton;

        beforeEach(() => {
          informationbutton = informationSegment.childAt(0).childAt(0);
        });

        it('is a button', () => {
          expect(informationbutton.type()).toEqual(Button);
        });
      });
    });
    describe('label segment', () => {
      let labelSegment;

      beforeEach(() => {
        labelSegment = informationColumn.childAt(1);
      });

      it('is a segment', () => {
        expect(labelSegment.type()).toEqual(Segment);
      });
      describe('label', () => {
        let label;

        beforeEach(() => {
          label = labelSegment.childAt(0);
        });

        it('is a label', () => {
          expect(label.type()).toEqual(Label);
        });
      });
    });
  });
});
