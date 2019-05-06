import React from 'react';
import { shallow } from 'enzyme';
import RequestCompleteComponent from '../../../../../src/components/pages/pipeline/requestComplete';

describe('Request Complete', () => {
  let wrapper;
  const push = jest.fn();

  const renderComponent = () =>
    shallow(<RequestCompleteComponent history={{ push }} pageInProgress={5} current={5} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('is styled as a container Grid', () => {
    expect(wrapper.props().container).toBeTruthy();
  });

  it('contains two rows', () => {
    expect.assertions(2);

    const GridRows = wrapper.children();

    GridRows.forEach((row) => {
      expect(row.type()).toEqual(Grid.Row);
    });
  });
  describe('complete row', () => {
    let CompleteRow;

    beforeEach(() => {
      CompleteRow = wrapper.childAt(0);
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
      ButtonRow = wrapper.childAt(1);
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

      it('button onClick should be clicked', () => {
        button.props().onClick();
        expect(push.mock.calls.length).toBe(1);
      });
    });
  });
});
