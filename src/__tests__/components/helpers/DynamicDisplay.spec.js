import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import DynamicComponent from '../../../../src/components/helpers/DynamicDisplay';
import Chunk from '../../../../src/components/helpers/DynamicChunk';

describe('dynamic display', () => {
  let wrapper;
  const Requests = {
    selection: 'Custom Request',
    requestInformation: {
      comments: {
        entry: 'Hello',
        name: 'cheese',
      },
    },
    requestLocation: {
      city: {
        entry: 'Hello',
        name: 'cheese',
      },
    },
    requestPrice: 5,
  };
  const renderComponent = () => shallow(<DynamicComponent requests={Requests} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a segment', () => {
    expect(wrapper.type()).toEqual(Segment);
  });

  describe('header', () => {
    let header;

    beforeEach(() => {
      header = wrapper.childAt(0);
    });

    it('is a header', () => {
      expect(header.type()).toEqual(Header);
    });
  });
  describe('info chunk', () => {
    let infoChunk;

    beforeEach(() => {
      infoChunk = wrapper.childAt(1);
    });

    it('is a dropdown', () => {
      expect(infoChunk.type()).toEqual(Chunk);
    });
  });
  describe('location chunk', () => {
    let locationChunk;

    beforeEach(() => {
      locationChunk = wrapper.childAt(2);
    });

    it('is a dropdown', () => {
      expect(locationChunk.type()).toEqual(Chunk);
    });
  });
  describe('price segment', () => {
    let priceSegment;

    beforeEach(() => {
      priceSegment = wrapper.childAt(3);
    });

    it('is a segment', () => {
      expect(priceSegment.type()).toEqual(Segment);
    });
    describe('header group', () => {
      let headerGroup;

      beforeEach(() => {
        headerGroup = priceSegment.childAt(0);
      });

      it('is a segment group', () => {
        expect(headerGroup.type()).toEqual(Segment.Group);
      });
      describe('header section', () => {
        let headerSection;

        beforeEach(() => {
          headerSection = headerGroup.childAt(0);
        });

        it('is a segment Section', () => {
          expect(headerSection.type()).toEqual(Segment);
        });
        describe('price header', () => {
          let priceHeader;

          beforeEach(() => {
            priceHeader = headerSection.childAt(0);
          });

          it('is a header', () => {
            expect(priceHeader.type()).toEqual(Header);
          });
        });
        describe('icon section', () => {
          let iconSection;

          beforeEach(() => {
            iconSection = headerGroup.childAt(1);
          });

          it('is a icon Section', () => {
            expect(iconSection.type()).toEqual(Segment);
          });
          describe('icon Link', () => {
            let iconLink;

            beforeEach(() => {
              iconLink = iconSection.childAt(0);
            });

            it('is a icon Link', () => {
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
    describe('label', () => {
      let label;

      beforeEach(() => {
        label = priceSegment.childAt(1);
      });

      it('is a label', () => {
        expect(label.type()).toEqual(Label);
      });
      describe('label icon', () => {
        let labelIcon;

        beforeEach(() => {
          labelIcon = label.childAt(0);
        });

        it('is a label icon', () => {
          expect(labelIcon.type()).toEqual(Icon);
        });
      });
    });
  });
});
