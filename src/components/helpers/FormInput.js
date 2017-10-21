import React, { Component } from 'react';

import '../../sass/helpers/FormInput.css';

export default class FormInput extends Component {
    constructor() {
        super();

        this.state = {
            isSelected: false,
            value: ""
        };
    }

    changeState(property, value) {
        this.setState(previousState => {
            return Object.assign({}, previousState, {
                [property]: value
            });
        });
    }

    changeValue(event) {
        const newValue = event.target.value;
        
        this.changeState("value", newValue);
    }

    render() {
        const {label, className, type} = this.props,
            {isSelected, value, inputId} = this.state;

        return (
            <div className={`${className ? className : ""}`}>
                <div
                    className={`form-input-label${isSelected ? " form-input-label--selected" : ""}`}
                >
                    {label}
                </div>
                <input 
                    ref="input"
                    className={`form-input${isSelected ? " form-input--selected" : ""}`}
                    type={type}
                    contentEditable
                    value={value}
                    onChange={this.changeValue.bind(this)}
                    onSelect={this.changeState.bind(this, "isSelected", true)}
                    onBlur={this.changeState.bind(this, "isSelected", false)}
                ></input>
            </div>
        )
    }
}