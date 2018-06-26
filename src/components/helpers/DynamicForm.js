import React, { Component } from "react";
import { Form, Header, Input, Button, Dropdown } from "semantic-ui-react";
import { Requests } from "../pages/pipeline/jsonRequests";

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

  renderFormFromJson = requestType => {
    const requests = Requests.Requests[requestType];
    const formUI = requests.fields.map(field => {
        switch(field.type) {
            case "Text":
                return (
                    <Form.Field onChange={this.onChange}>
                    <label htmlFor={field.id}>{field.name}</label>
                    <Input id={field.id} type={field.type} />
                    </Form.Field>
                );
            case "dropDown":
                return (<Dropdown placeholder={field.placeholder} search selection options={field.options} />)
            default:
            break;
         }
    });
    return formUI;
  };

  render() {
    return (
      <div>
        <Header size="large">{this.props.requestType}</Header>
        <Form onSubmit={this.onSubmit}>
          {this.renderFormFromJson(this.props.requestType)}
          <Button fluid positive>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default DynamicForm;
