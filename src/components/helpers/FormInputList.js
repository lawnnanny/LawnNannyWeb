import React from 'react';

import FormInput from './FormInput';

import '../../sass/helpers/FormInputList.css';

export default class FormInputList extends FormInput {
    getOptions() {
        const {options} = this.props,
            optionTags = [];

        options.forEach(option => {
            optionTags.push(
                <option
                    value={option}
                    className="form-input-list-option"
                />
            );
        });

        return optionTags;
    }

    render() {
        const { label, className, type, value, onChange } = this.props,
            {isSelected} = this.state;

        return (
            <div className={`${className || ""}`}>
                <div
                    className={`form-input-label${isSelected ? " form-input-label--selected" : ""}`}
                >
                    {label}
                </div>
                <input
                    className={`form-input${isSelected ? " form-input--selected" : ""}`}
                    list="options"
                    type={type}
                    contentEditable
                    value={value}
                    onChange={onChange}
                    onSelect={this.changeState.bind(this, "isSelected", true)}
                    onBlur={this.changeState.bind(this, "isSelected", false)}
                 />
                <datalist
                    id="options"
                >
                    {this.getOptions()}
                </datalist>
            </div>
        );
    }
}