import React from 'react';
import { HomePage } from '../components/HomePage';
import renderer from 'react-test-renderer';

describe('Home Page', () => {
	test('Looks correct visually', () => {
	    const component = renderer.create(<HomePage/>);
	    const tree = component.toJSON();
	    expect(tree).toMatchSnapshot();
	});

	describe('Login Modal', () => {
		test('Looks correct visually', () => {
			const component = renderer.create(<HomePage isLoginModalOpen/>);
		    const tree = component.toJSON();
		    expect(tree).toMatchSnapshot();
		});
	});

	describe('Signup Modal', () => {
	test('Looks correct visually', () => {
			const component = renderer.create(<HomePage isSignUpModalOpen/>);
		    const tree = component.toJSON();
		    expect(tree).toMatchSnapshot();
		});
	});
})
