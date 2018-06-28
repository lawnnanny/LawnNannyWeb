import React, { Component } from "react";
import { Form, Header, Input, Button, Segment, Checkbox, Label } from "semantic-ui-react";
import { Requests } from "../pages/pipeline/jsonRequests";
import { statekeys } from "../../helpers/Common";
import Styles from '../../styles/DynamicForm'

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    this.props.submit(this.state.data);
  };

  handleChange = (e, { value }) => this.setState({ value });

  renderRadioButtons = (value, field) => {
    const radioButtons = field.map(option => {
      return (
      <Form.Radio
        label={option}
        value={option}
        checked={this.state.value === option}
        onChange={this.handleChange}
      />
    )
    });
    return radioButtons
  }

  renderFormFromJson = requestType => {
    const { value } = this.state;
    const requests = Requests.Requests[requestType];
    const formUI = requests.fields.map(field => {
      switch (field.type) {
        case "text":
          return (
            <Form.Field onChange={this.onChange}>
              <label htmlFor={field.id}>{field.name}</label>
              <Input id={field.id} />
            </Form.Field>
          );

        case "dropDown":
          return (
            <Form.Dropdown
              onChange={this.onChange}
              label={field.name}
              placeholder={field.placeholder}
              options={statekeys}
            />
          );

        case "textArea":
          return (
            <Form.TextArea
              onChange={this.onChange}
              label={field.name}
              placeholder={field.placeholder}
            />
          );

        case "checkbox":
          return (
            <Form.Checkbox onChange={this.onChange} label={field.placeholder} />
          );
          
        case "radio":
          return (
            <Form.Group inline onChange={this.onChange}>
              {this.renderRadioButtons(value, field.options)}
            </Form.Group>
          );

        default:
          return (
            <Form.Field onChange={this.onChange}>
              <label htmlFor={field.id}>{field.name}</label>
              <Input id={field.id} />
            </Form.Field>
          );
      }
    });
    return formUI;
  };

  render() {
    return (
      <Segment padded>
        <Header size="large">{this.props.requestType}</Header>
        <Form onSubmit={this.onSubmit}>
          {this.renderFormFromJson(this.props.requestType)}
        </Form>
      </Segment>
    );
  }
}

export default DynamicForm;
