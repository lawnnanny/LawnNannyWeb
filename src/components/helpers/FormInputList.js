import React from "react";

import FormInput from "./FormInput";

export default class FormInputList extends FormInput {
  getOptions() {
    const options = this.props;
    const optionTags = [];

    options.forEach(option => {
      optionTags.push(
        <option value={option} className="form-input-list-option" />
      );
    });

    return optionTags;
  }

  render() {
    const label = this.props;
    const className = this.props;
    const type = this.props;
    const value = this.props;
    const onChange = this.props;
    const isSelected = () => {
      this.setState({
        isSelected: true
      });
    };

    return (
      <div className={`${className || ""}`}>
        <div
          className={`form-input-label${
            isSelected ? " form-input-label--selected" : ""
          }`}
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
          onSelect={this.changeState(this, "isSelected", true)}
          onBlur={this.changeState(this, "isSelected", false)}
        />
        <datalist id="options">{this.getOptions()}</datalist>
      </div>
    );
  }
}
