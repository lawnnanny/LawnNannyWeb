import React, { Component } from "react";
import { Form, Header, Input, Button, Segment } from "semantic-ui-react";
import { Requests } from "../pages/pipeline/jsonRequests";
import { statekeys } from "../../helpers/Common";

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

        case "radio": {
          switch (field.size) {
            case "2":
              return (
                <Form.Group inline onChange={this.onChange}>
                  <label htmlFor={field.id}>{field.name}</label>
                  <Form.Radio
                    label={field.label1}
                    value="1"
                    checked={value === "1"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label={field.label2}
                    value="2"
                    checked={value === "2"}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              );
            case "3":
              return (
                <Form.Group inline onChange={this.onChange}>
                  <label htmlFor={field.id}>{field.name}</label>
                  <Form.Radio
                    label={field.label1}
                    value="1"
                    checked={value === "1"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label={field.label2}
                    value="2"
                    checked={value === "2"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label={field.label3}
                    value="3"
                    checked={value === "3"}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              );
            case "4":
              return (
                <Form.Group inline onChange={this.onChange}>
                  <label htmlFor={field.id}>{field.name}</label>
                  <Form.Radio
                    label={field.label1}
                    value="1"
                    checked={value === "1"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label={field.label2}
                    value="2"
                    checked={value === "2"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label={field.label3}
                    value="3"
                    checked={value === "3"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label={field.label4}
                    value="4"
                    checked={value === "4"}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              );
            default:
              return null;
          }
        }
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
