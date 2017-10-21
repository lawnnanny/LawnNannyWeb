import React, { Component } from 'react';

import FormInput from './helpers/FormInput';

import '../sass/LoginPage.css';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            tabSelected: "login"
        };
    }

    chooseTab(tab) {
        this.setState(previousState => {
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
        if (this.state.tabSelected === 'login') 
            return (
                <div>
                    <FormInput
                        label="Email"
                        className="login-body-email"
                    />
                    <FormInput
                        label="Password"
                        className="login-body-password"
                        password
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
                    />
                    <div className="login-signup-form-spacer"></div>
                    <FormInput
                        label="Last Name"
                        className="login-signup-form-input"
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Email Address"
                        className="login-signup-form-input"
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Password"
                        type="password"
                        className="login-signup-form-input"
                    />
                    <div className="login-signup-form-spacer"></div>                    
                    <FormInput
                        label="Repeat Password"
                        type="password"
                        className="login-signup-form-input"
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Address"
                        className="login-signup-form-input"
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="City"
                        className="login-signup-form-input"
                    />
                    <div className="login-signup-form-spacer"></div>                    
                    <FormInput
                        label="State"
                        className="login-signup-form-input"
                    />
                    <div className="login-signup-form-spacer"></div>                    
                    <FormInput
                        label="Zipcode"
                        className="login-signup-form-input"
                    />
                </div>
                <div className="login-signup-form-container">
                    <FormInput
                        label="Driver's Liscence Number"
                        className="login-signup-form-input"
                    />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="login-page-container">
                <div className="login-tab-container">
                    <div 
                        className={`login-tab ${this.tabIsSelected("login")}`}
                        onClick={this.chooseTab.bind(this, "login")}
                    >
                        Login
                    </div>
                    <div
                        className={`login-tab ${this.tabIsSelected("signup")}`}
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
