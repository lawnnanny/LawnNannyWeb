import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

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

        console.log(value);

        return (
            <div className={`${className ? className : ""}`}>
                <div
                    className={`form-input-label${isSelected ? " form-input-label--selected" : ""}`}
                >
                    {label}
                </div>
                {/* <input
                    className={`form-input${isSelected ? " form-input--selected" : ""}`}
                    type={type}
                    value={value}
                    onChange={onChange}
                ></input> */}
                <Input
                    type={type}
                    onChange={onChange}
                />
            </div>
        )
    }
}