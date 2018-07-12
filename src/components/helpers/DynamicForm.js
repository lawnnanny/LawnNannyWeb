import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Header,
  Input,
  Button,
  Segment,
  Checkbox,
  TextArea,
  Dropdown,
} from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { Requests } from '../pages/pipeline/jsonRequests';
import { statekeys } from '../../helpers/Common';
import Styles from '../../styles/DynamicForm';
import InlineError from './InlineError';

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  onSubmit = (event) => {
    console.log(this.props.history);
    const data = {};
    let counter = 0;
    Requests[this.props.requestForm][this.props.requestType].fields.forEach((element) => {
      switch (element.type) {
        case 'radio':
          data[element.id] = {
            validation: element.validation,
            id: element.id,
            type: element.type,
          };
          element.options.forEach((option) => {
            data[element.id][option] = {
              entry: event.target[counter].checked,
            };
            counter += 1;
          });
          break;
        case 'checkbox':
          data[element.id] = {
            entry: event.target[counter].checked,
            validation: element.validation,
            id: element.id,
            type: element.type,
          };
          counter += 1;
          break;
        default:
          data[element.id] = {
            entry: event.target[counter].value,
            validation: element.validation,
            id: element.id,
            type: element.type,
          };
          counter += 1;
          break;
      }
    });
    if (this.validateAndSetStateErrorsForDisplay(data)) {
      this.props.setRequest(data);
      this.props.history('/pipeline/requestLocation');
    }
  };

  validateAndSetStateErrorsForDisplay = (data) => {
    const errors = {};
    Object.values(data).forEach((validationEntryObject) => {
      if (validationEntryObject.validation === 'required') {
        switch (validationEntryObject.type) {
          case 'textArea':
            if (!validationEntryObject.entry.trim().length) {
              errors[validationEntryObject.id] = 'Empty Text Box';
            }
            break;
          case 'input':
            if (!validationEntryObject.entry.trim().length) {
              errors[validationEntryObject.id] = 'Empty Input';
            }
            break;
          case 'dropDown':
            if (!Object.values(validationEntryObject).some(option => option.entry)) {
              errors[validationEntryObject.id] = 'No State Selected';
            }
            break;
          case 'radio':
            if (!Object.values(validationEntryObject).some(option => option.entry)) {
              errors[validationEntryObject.id] = 'Radio Button Not Selected';
            }
            break;
          default:
        }
      }
    });
    this.setState({ errors });
    return !Object.keys(errors).length;
  };

  handleChange = (e, { value }) => {
    const state = this.state;
    state.radio = value;
    this.setState(state);
  };

  addAstricks = (validation) => {
    if (validation) {
      return ' * ';
    }
    return '';
  };

  renderRadioButtons = (field) => {
    const radioButtons = field.map(option => (
      <Form.Radio
        label={option}
        value={option}
        onChange={this.handleChange}
        checked={this.state.radio === option}
      />
    ));
    return radioButtons;
  };

  renderFormFromJson = (requestType, requestForm, errors) => {
    const requests = Requests[requestForm][requestType];
    const formUI = requests.fields.map((field) => {
      switch (field.type) {
        case 'text':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Input id={field.id} />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );

        case 'dropDown':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Dropdown
                id={field.id}
                placeholder={field.placeholder}
                options={statekeys}
                fluid
                selection
              />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );

        case 'textArea':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <TextArea id={field.id} placeholder={field.placeholder} />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );

        case 'checkbox':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Checkbox name={field.name} value="true" />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );

        case 'radio':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Form.Group id={field.id} inline>
                {this.renderRadioButtons(field.options)}
                {errors[field.id] && <InlineError text={errors[field.id]} />}
              </Form.Group>
            </Form.Field>
          );

        default:
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Input id={field.id} />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );
      }
    });
    return formUI;
  };

  render() {
    return (
      <Segment padded style={Styles.segment}>
        <Header size="large">{this.props.requestType}</Header>
        <Form onSubmit={this.onSubmit}>
          <Segment style={Styles.segment}>
            {this.renderFormFromJson(
              this.props.requestType,
              this.props.requestForm,
              this.state.errors,
            )}
          </Segment>
          <Segment style={Styles.segment}>
            <Button type="submit" fluid positive size="large">
              Continue
            </Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

DynamicForm.propTypes = {};
DynamicForm.defaultProps = {
  requestType: PropTypes.string,
  requestForm: PropTypes.string,
  setRequest: PropTypes.func,
  history: PropTypes.func,
};

export default DynamicForm;
