import React, { Component } from 'react';

import '../sass/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-home-title">
                    <a 
                        href="/login"
                        className="navbar-home-link"
                    >
                        MyRide
                    </a>
                </div>
            </div>
        );
    }
}
