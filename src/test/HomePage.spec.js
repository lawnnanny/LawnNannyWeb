import React from 'react';
import { HomePage } from '../components/HomePage';
import renderer from 'react-test-renderer';

test('Home page looks correct visually', () => {
    const component = renderer.create(<HomePage/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
