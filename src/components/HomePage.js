import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Modal, Input, Grid, Button, Form, Card } from 'semantic-ui-react';

import Styles from '../styles/HomePage';
import Actions from '../reducers/Actions'
import { statekeys } from '../helpers/Common' 

export class HomePage extends Component {
    render() {
        const {
            setEmail,
            setPassword,
            setFirstName,
            setLastName,
            setPasswordRepeat,
            setAddress,
            setCity,
            setAddressState,
            setZipcode,
            openLoginModal,
            closeLoginModal,
            isLoginModalOpen,
            openSignupModal,
            closeSignupModal,
            isSignupModalOpen
        } = this.props;

        return (
            <div>
                <div style={Styles.navbarContainer}>
                    <Menu secondary style={Styles.loginSignupMenu}>
                        <Menu.Menu position='right'>
                            <Modal
                                style={Styles.modal}
                                size='mini'
                                trigger={
                                    <Menu.Item style={Styles.menuItem} onClick={openLoginModal}>
                                        Login
                                    </Menu.Item>
                                }
                                open={isLoginModalOpen}
                                onClose={closeLoginModal}
                                closeIcon
                            >
                                <Modal.Header style={Styles.modalHeader}>Welcome Back!</Modal.Header>
                                <Modal.Description>
                                    <Grid style={Styles.loginGrid}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Input
                                                    fluid
                                                    icon='user'
                                                    iconPosition='left'
                                                    placeholder='someone@example.com'
                                                    onChange={setEmail}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Input
                                                    fluid
                                                    icon='lock'
                                                    type='password'
                                                    iconPosition='left'
                                                    placeholder='Password'
                                                    onChange={setPassword}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row centered>
                                            <Grid.Column width={6}>
                                                <Button
                                                    style={Styles.modalButton}
                                                    size='large'
                                                    onClick={closeLoginModal}
                                                >
                                                    Login
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Modal.Description>
                            </Modal>
                            <Modal
                                style={Styles.modal}
                                size='tiny'
                                trigger={
                                    <Menu.Item style={Styles.menuItem} onClick={openSignupModal}>
                                    Sign Up
                                    </Menu.Item>
                                }
                                open={isSignupModalOpen}
                                onClose={closeSignupModal}
                                closeIcon
                            >
                                <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
                                <Modal.Description>
                                    <Form style={Styles.signUpForm}>
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                fluid
                                                label='First Name'
                                                color='white'
                                                placeholder='First Name'
                                                onChange={setFirstName}
                                            />
                                            <Form.Input
                                                fluid
                                                label='Last Name'
                                                placeholder='Last Name'
                                                onChange={setLastName}
                                            />
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                fluid
                                                label='Email'
                                                placeholder='someone@example.com'
                                                onChange={setEmail}
                                            />
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                fluid
                                                label='Password'
                                                type='password'
                                                placeholder='Password'
                                                onChange={setPassword}
                                            />
                                            <Form.Input
                                                fluid
                                                label='Repeat Password'
                                                type='password'
                                                placeholder='Repeat Password'
                                                onChange={setPasswordRepeat}
                                            />
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                fluid
                                                label='Address'
                                                placeholder='Address'
                                                onChange={setAddress}
                                            />
                                            <Form.Input
                                                fluid
                                                label='City'
                                                placeholder='City'
                                                onChange={setCity}
                                            />
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Dropdown
                                                fluid
                                                label='State'
                                                placeholder='State'
                                                search
                                                selection
                                                options={statekeys}
                                                onChange={setAddressState}
                                            />
                                            <Form.Input
                                                fluid
                                                label='Zipcode'
                                                placeholder='Zipcode'
                                                onChange={setZipcode}
                                            />
                                        </Form.Group>
                                        <Form.Group style={Styles.signUpCheckbox}>
                                            <Form.Checkbox label='I agree to the Terms and Conditions'/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Button
                                                style={Styles.modalButton}
                                                size='large'
                                                onClick={closeSignupModal}
                                            >
                                                Submit
                                            </Form.Button>
                                        </Form.Group>
                                    </Form>
                                </Modal.Description>
                            </Modal>
                        </Menu.Menu>
                    </Menu>
                </div>
                <div style={Styles.contentContainer}>
                    <div style={Styles.cardContainer}>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                    Tell us how you want your yard cut...
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Grid centered style={Styles.cardContent}>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <div style={Styles.cardInputContainer}>
                                                <span style={Styles.cardInputLabel}>Yard Size:</span>
                                                <Input label={{basic: true, content: 'ft²'}} labelPosition="right"/>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <div style={Styles.cardInputContainer}>
                                                <span style={Styles.cardInputLabel}>Grass Height:</span>
                                                <Input label={{basic: true, content: 'in.'}} labelPosition="right"/>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <div style={Styles.cardButtonContainer}>
                                                <Button
                                                    style={Styles.modalButton}
                                                    size='large'
                                                >
                                                    Continue
                                                </Button>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </div>
                </div>
                <div style={Styles.footerContainer}>
                    <div style={Styles.footerContentContainer}>
                        <span>About</span>
                        <span>Contact</span>
                        <span>FAQ</span>
                        <span>Services</span>
                    </div>
                    <div style={Styles.footerCopyright}>©2018 Terra Development, Inc.</div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setEmail: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setEmail,
                    value
                };

            dispatch(action);
        },
        setPassword: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setPassword,
                    value
                };

            dispatch(action);
        },
        setFirstName: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setFirstName,
                    value
                };

            dispatch(action);
        },
        setLastName: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setLastName,
                    value
                };

            dispatch(action);
        },
        setPasswordRepeat: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setPasswordRepeat,
                    value
                };

            dispatch(action);
        },
        setAddress: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setAddress,
                    value
                };

            dispatch(action);
        },
        setCity: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setCity,
                    value
                };

            dispatch(action);
        },
        setAddressState: (event,data) => {
            const value = data.value,
                action = {
                    type: Actions.login.setAddressState,
                    value
                };

            dispatch(action);
        },
        setZipcode: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setZipcode,
                    value
                };

            dispatch(action);
        },
        openLoginModal: () => {
            const action = {
                type: Actions.login.toggleLoginModal
            };

            dispatch(action);
        },
        closeLoginModal: () => {
            const action = {
                type: Actions.login.clear
            };

            dispatch(action);
        },
         openSignupModal: () => {
            const action = {
                type: Actions.login.toggleSignupModal
            };

            dispatch(action);
        },
        closeSignupModal: () => {
            const action = {
                type: Actions.login.clear
            };

            dispatch(action);
        }
    };
}

export default connect(() => { return {} }, mapDispatchToProps)(HomePage);
