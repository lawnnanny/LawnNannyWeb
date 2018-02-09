import React, { Component } from 'react';
import { Menu, Modal, Input, Grid, Button, Form, Checkbox } from 'semantic-ui-react';

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
                        <Modal.Header style={Styles.modalHeader}>Welcome Back!</Modal.Header>
                        <Modal.Description>
                            <Grid style={Styles.loginGrid}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Input fluid icon='user' iconPosition='left' placeholder='Username'/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Input fluid icon='lock' iconPosition='left' placeholder='Password'/>
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
                    <Modal size='tiny' trigger={
                        <Menu.Item style={Styles.menuItem}>
                         Sign Up
                         </Menu.Item>
                    }>
                        <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
                        <Modal.Description>
                          <Form style={Styles.signUpForm}>
                       		 <Form.Group widths='equal'>
                       		 	<Form.Input fluid label='First Name' placeholder='First Name'/>
                       		 	<Form.Input fluid label='Last Name' placeholder='Last Name'/>
                       		 </Form.Group>
                       		  <Form.Group widths='equal'>
                       		 	<Form.Input fluid label='Email' placeholder='Email'/>
                       		 	<Form.Input fluid label='Username' placeholder='Username'/>
                       		 </Form.Group>
                       		  <Form.Group widths='equal'>
                       		 	<Form.Input fluid label='Password' placeholder='Password'/>
                       		 	<Form.Input fluid label='Repeat Password' placeholder='Repeat Password'/>
                       		 </Form.Group>
                       		 	<Form.Button style={Styles.modalButton}>Submit</Form.Button>
                     	  </Form> 
                        </Modal.Description>
                    </Modal>
                </Menu>
            </div>
        );
    }
};
