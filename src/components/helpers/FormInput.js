import React, { Component } from 'react';

import '../../sass/helpers/FormInput.css';

export default class FormInput extends Component {
    render() {
        const {label, className, password} = this.props;

        return (
            <div className={`${className}`}>
                <div className="form-input-label">{label}</div>
                <input 
                    className="form-input"
                    type={password ? "password" : "text"}
                />
            </div>
        )
    }
}