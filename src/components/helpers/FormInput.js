import React, { Component } from 'react';

import '../../sass/helpers/FormInput.css';

export default class FormInput extends Component {
    constructor() {
        super();

        this.state = {
            isSelected: false
        };
    }

    changeState(property, value) {
        this.setState(previousState => {
            return Object.assign({}, previousState, {
                [property]: value
            });
        });
    }

    render() {
        const {label, className, type, value, onChange} = this.props,
            {isSelected} = this.state;

        return (
            <div className={`${className ? className : ""}`}>
                <div
                    className={`form-input-label${isSelected ? " form-input-label--selected" : ""}`}
                >
                    {label}
                </div>
                <input
                    className={`form-input${isSelected ? " form-input--selected" : ""}`}
                    type={type}
                    contentEditable
                    value={value}
                    onChange={onChange}
                    onSelect={this.changeState.bind(this, "isSelected", true)}
                    onBlur={this.changeState.bind(this, "isSelected", false)}
                ></input>
            </div>
        )
    }
}