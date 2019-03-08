import React from 'react';
import { Menu, Modal, Button, Dropdown, Icon, Segment, Header, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import DynamicComponent from '../../../../src/components/helpers/DynamicChunk';

describe('dynamic display', () => {
  let wrapper;

  const requestInformation = {
    comments: {
      entry: 'Hello',
      name: 'cheese',
    },
  };
  const renderComponent = () => shallow(<DynamicComponent requests={requestInformation} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a segment', () => {
    expect(wrapper.type()).toEqual(Segment);
  });
  describe('heading group', () => {
    let headingGroup;

    beforeEach(() => {
      headingGroup = wrapper.childAt(0);
    });

    it('is a segment group', () => {
      expect(headingGroup.type()).toEqual(Segment.Group);
    });
    describe('header segment', () => {
      let headerSegment;

      beforeEach(() => {
        headerSegment = headingGroup.childAt(0);
      });

      it('is a segment', () => {
        expect(headerSegment.type()).toEqual(Segment);
      });
      describe('group header', () => {
        let groupHeader;

        beforeEach(() => {
          groupHeader = headerSegment.childAt(0);
        });

        it('is a header', () => {
          expect(groupHeader.type()).toEqual(Header);
        });
      });
    });
    describe('group icon link', () => {
      let iconSegment;

      beforeEach(() => {
        iconSegment = headingGroup.childAt(1);
      });

      it('is a segment', () => {
        expect(iconSegment.type()).toEqual(Segment);
      });
      describe('icon link', () => {
        let iconLink;

        beforeEach(() => {
          iconLink = iconSegment.childAt(0);
        });

        it('is a link', () => {
          expect(iconLink.type()).toEqual(Link);
        });
        describe('icon', () => {
          let icon;

          beforeEach(() => {
            icon = iconLink.childAt(0);
          });

          it('is a icon', () => {
            expect(icon.type()).toEqual(Icon);
          });
        });
      });
    });
  });
});
