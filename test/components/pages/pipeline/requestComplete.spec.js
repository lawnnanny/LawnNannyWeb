import React from 'react';
import { Grid, Segment, Button, Header, Icon } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import RequestCompleteComponent from '../../../../src/components/pages/pipeline/requestComplete';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';

describe('Request Complete', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<RequestCompleteComponent pageInProgress={5} current={5} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('is styled as a container Grid', () => {
    expect(wrapper.props().container).toBeTruthy();
  });

  it('contains three rows', () => {
    expect.assertions(3);

    const GridRows = wrapper.children();

    GridRows.forEach((row) => {
      expect(row.type()).toEqual(Grid.Row);
    });
  });

  describe('BreadcrumbRow', () => {
    let BreadcrumbRow;

    beforeEach(() => {
      BreadcrumbRow = wrapper.childAt(0);
    });

    it('is a Breadcrumb Row', () => {
      expect(BreadcrumbRow.type()).toEqual(Grid.Row);
    });

    describe('BreadcrumbSegment', () => {
      let BreadcrumbSegment;

      beforeEach(() => {
        BreadcrumbSegment = BreadcrumbRow.childAt(0);
      });

      it('is a Breadcrumb Segment', () => {
        expect(BreadcrumbSegment.type()).toEqual(Segment);
      });

      describe('BreadcrumbComponent', () => {
        let Breadcrumb;

        beforeEach(() => {
          Breadcrumb = BreadcrumbSegment.childAt(0);
        });

        it('is a breadcrumb', () => {
          expect(Breadcrumb.type()).toEqual(BreadcrumbComponent);
        });
        it('has a selection', () => {
          expect(Breadcrumb.props().selection).toEqual(5);
        });
      });
    });
  });

  describe('complete row', () => {
    let CompleteRow;

    beforeEach(() => {
      CompleteRow = wrapper.childAt(1);
    });

    it('is a Complete Row', () => {
      expect(CompleteRow.type()).toEqual(Grid.Row);
    });
    describe('header', () => {
      let header;

      beforeEach(() => {
        header = CompleteRow.childAt(0);
      });

      it('is a header', () => {
        expect(header.type()).toEqual(Header);
      });
      describe('header icon', () => {
        let headerIcon;

        beforeEach(() => {
          headerIcon = header.childAt(0);
        });

        it('is an icon', () => {
          expect(headerIcon.type()).toEqual(Icon);
        });
      });
      describe('header content', () => {
        let headerContent;

        beforeEach(() => {
          headerContent = header.childAt(1);
        });

        it('is a header content', () => {
          expect(headerContent.type()).toEqual(Header.Content);
        });
      });
    });
  });
  describe('button row', () => {
    let ButtonRow;

    beforeEach(() => {
      ButtonRow = wrapper.childAt(2);
    });

    it('is a button Row', () => {
      expect(ButtonRow.type()).toEqual(Grid.Row);
    });
    describe('button ', () => {
      let button;

      beforeEach(() => {
        button = ButtonRow.childAt(0).childAt(0);
      });

      it('is a button Row', () => {
        expect(button.type()).toEqual(Button);
      });
    });
  });
});
