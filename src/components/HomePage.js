import React, { Component } from 'react';
import { Menu, Modal, Input, Grid, Button } from 'semantic-ui-react';

import Styles from '../styles/HomePage';

export default class HomePage extends Component {
    render() {
        return (
            <div style={Styles.navbarContainer}>
                <Menu secondary style={Styles.loginSignupMenu}>
                    <Modal size='mini' trigger={
                        <Menu.Item style={Styles.menuItem}>
                            Login
                        </Menu.Item>
                    }>
                        <Modal.Header>Login</Modal.Header>
                        <Modal.Description>
                            <Grid style={Styles.loginGrid}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Input fluid label='Username'/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Input fluid label='Password'/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column width={6}>
                                        <Button fluid style={Styles.modalButton}>Login</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal>
                    <Menu.Item style={Styles.menuItem}>
                        Sign Up
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
};
