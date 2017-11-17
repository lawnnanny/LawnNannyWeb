import React, { Component } from 'react';

import '../sass/Styleguide.css';

export default class Styleguide extends Component {
    render() {
        return (
            <div className="styleguide-container">
                <div className="styleguide-content-spacer"></div>
                <div className="styleguide-content-container">
                    <h1>MyRide Styleguide</h1>
                    <hr/>
                    <div className="styleguide-content-colors">
                        <h2>Colors:</h2>
                        <p>
                            Below are the colors that should be used in the
                            main content of the website.
                        </p>
                        <div className="styleguide-content-colors-demo"></div>
                    </div>
                </div>
            </div>
        )
    };
}
