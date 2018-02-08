import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import Styles from '../styles/HomePage';

export default class HomePage extends Component {
    render() {
        return (
            <div style={Styles.navbarContainer}>
                <Menu secondary style={Styles.loginSignupMenu}>
                    <Menu.Item style={Styles.menuItem}>
                        Login
                    </Menu.Item>
                    <Menu.Item style={Styles.menuItem}>
                        Sign Up
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
};
