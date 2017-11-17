import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from './helpers/FormInput';
import FormInputList from './helpers/FormInputList';

import ListHelper from '../helpers/ListHelper';

import '../sass/LoginPage.css';

const Actions = require('../reducers/Actions')();

export class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            tabSelected: "login"
        };
    }

    chooseTab(tab) {
        const {clearPassword} = this.props;

        this.setState(previousState => {
            if (previousState.tabSelected !== tab)
                clearPassword();

            return Object.assign({}, previousState, {
                tabSelected: tab
            });
        });
    }

    tabIsSelected(tab) {
        if (tab === this.state.tabSelected)
            return "login-tab--selected"
        
        return;
    }

    renderForm() {
        const {
            firstName,
            lastName,
            email,
            password,
            passwordRepeat,
            address,
            city,
            addressState,
            zipcode,
            driversLiscenseNumber,
            setEmail,
            setPassword,
            setFirstName,
            setLastName,
            setPasswordRepeat,
            setAddress,
            setCity,
            setAddressState,
            setZipcode,
            setDriversLiscenseNumber
        } = this.props;

        if (this.state.tabSelected === 'login') 
            return (
                <div>
                    <FormInput
                        label="Email"
                        className="login-body-email"
                        value={email}
                        onChange={setEmail}
                    />
                    <FormInput
                        label="Password"
                        className="login-body-password"
                        type="password"
                        value={password}
                        onChange={setPassword}
                    />
                    <div className="login-button-container">
                        <div className="login-button">LOGIN</div>
                    </div>
                </div>
            );
        
        return (
            <div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="First Name"
                        className="login-signup-form-input"
                        value={firstName}
                        onChange={setFirstName}
                    />
                    <div className="login-signup-form-spacer"></div>
                    <FormInput
                        label="Last Name"
                        className="login-signup-form-input"
                        value={lastName}
                        onChange={setLastName}
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Email Address"
                        className="login-signup-form-input"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Password"
                        type="password"
                        className="login-signup-form-input"
                        value={password}
                        onChange={setPassword}
                    />
                    <div className="login-signup-form-spacer"></div>                    
                    <FormInput
                        label="Repeat Password"
                        type="password"
                        className="login-signup-form-input"
                        value={passwordRepeat}
                        onChange={setPasswordRepeat}
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Address"
                        className="login-signup-form-input"
                        value={address}
                        onChange={setAddress}
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="City"
                        className="login-signup-form-input"
                        value={city}
                        onChange={setCity}
                    />
                    <div className="login-signup-form-spacer"></div>                    
                    <FormInputList
                        label="State"
                        className="login-signup-form-input"
                        value={addressState}
                        onChange={setAddressState}
                        options={ListHelper.getStates()}
                    />
                    <div className="login-signup-form-spacer"></div>                    
                    <FormInput
                        label="Zipcode"
                        className="login-signup-form-input"
                        value={zipcode}
                        onChange={setZipcode}
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Driver's Liscence Number"
                        className="login-signup-form-input"
                        value={driversLiscenseNumber}
                        onChange={setDriversLiscenseNumber}
                    />
                </div>
                <div className="login-signup-button-container">
                    <div className="login-button">SIGN UP!</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="login-page-container">
                <div className="login-skew"></div>
                <div className="login-tab-container">
                    <div 
                        className={`login-tab login-tab--left ${this.tabIsSelected("login")}`}
                        onClick={this.chooseTab.bind(this, "login")}
                    >
                        Login
                    </div>
                    <div
                        className={`login-tab login-tab--right ${this.tabIsSelected("signup")}`}
                        onClick={this.chooseTab.bind(this, "signup")}
                    >
                        Sign Up
                    </div>
                </div>
                <div className="login-body">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        firstName,
        lastName,
        email,
        password,
        passwordRepeat,
        address,
        city,
        addressState,
        zipcode,
        driversLiscenseNumber
    } = state.login;

    return {
        firstName,
        lastName,
        email,
        password,
        passwordRepeat,
        address,
        city,
        addressState,
        zipcode,
        driversLiscenseNumber
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setEmail: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setEmail,
                    value
                };

            console.log(Actions);

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
        setAddressState: event => {
            const value = event.target.value,
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
        setDriversLiscenseNumber: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setDriversLiscenseNumber,
                    value
                };

            dispatch(action);
        },
        clearPassword: () => {
            const action = {
                type: Actions.login.clearPassword
            };

            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
