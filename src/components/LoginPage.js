import React, { Component } from 'react';

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
                <div className="login-body"></div>
            </div>
        );
    }
}
