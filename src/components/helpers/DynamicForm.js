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

  onSubmit = (event) => {
      const data = {};
      let counter = 0;
      Requests.Requests[this.props.requestType].fields.forEach((element) => {
          if(element.type == "radio") {
            data[element.id] = {};
            element.options.forEach((option) => {
              data[element.id][option] = event.target[counter].checked;
              counter += 1;
            })
          } else {
            data[element.id] = event.target[counter].value;
            counter += 1;
          }
      })
      this.props.setRequestInformation(data);
  }

  handleChange = (e, { value }) => this.setState({ value });

  renderRadioButtons = (value, field) => {
    const radioButtons = field.map(option => (
      <Form.Radio
        label={option}
        value={option}
        onChange={this.handleChange}
        checked={this.state.value === option}
      />
    ));
    return radioButtons
  }

  renderFormFromJson = requestType => {
    const { value } = this.state;
    const requests = Requests.Requests[requestType];
    const formUI = requests.fields.map(field => {
      switch (field.type) {
        case "text":
          return (
            <Form.Field>
              <label htmlFor={field.id}>{field.name}</label>
              <Input id={field.id} />
            </Form.Field>
          );

        case "dropDown":
          return (
            <Form.Dropdown
              label={field.name}
              placeholder={field.placeholder}
              options={statekeys}
            />
          );

        case "textArea":
          return (
            <Form.TextArea
              label={field.name}
              placeholder={field.placeholder}
            />
          );

        case "checkbox":
          return (
            <Form.Field>
                <Checkbox
                    name={field.name}
                    value="true"
                    label={field.placeholder}
                />
            </Form.Field>
          );

        case "radio":
          return (
            <label htmlFor={field.id}> {field.name}
              <Form.Group id={field.id} inline>
                {this.renderRadioButtons(value, field.options)}
                </Form.Group>
             </label>
          );

        default:
          return (
            <Form.Field>
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
          <Segment style={Styles.segment}>
              {this.renderFormFromJson(this.props.requestType)}
          </Segment>
          <Segment style={Styles.segment}>
              <Button type='submit' fluid positive size="large">
                  Continue
              </Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default DynamicForm;
