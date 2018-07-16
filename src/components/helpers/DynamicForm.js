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
import { statekeys } from '../../helpers/Common';
import Styles from '../../styles/DynamicForm';
import InlineError from './InlineError';

class DynamicForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      errors: {},
      dataForSubmitting: {},
      Requests: props.jsonForm(),
    };
  }

  onSubmit = () => {
    const data = {};
    this.state.Requests[this.props.form].fields.forEach((element) => {
      data[element.id] = {
        entry: this.state.dataForSubmitting[element.id],
        validation: element.validation,
        id: element.id,
        type: element.type,
      };
    });
    if (this.validateAndSetStateErrorsForDisplay(data)) {
      this.props.setRequest(data);
      this.props.route();
    }
  };

  validateAndSetStateErrorsForDisplay = (data) => {
    const errors = {};
    Object.values(data).forEach((validationEntryObject) => {
      if (validationEntryObject.validation === 'required') {
        if (!validationEntryObject.entry || !validationEntryObject.entry.trim().length) {
          switch (validationEntryObject.type) {
            case 'textArea':
              errors[validationEntryObject.id] = 'Empty Text Box';
              break;
            case 'input':
              errors[validationEntryObject.id] = 'Empty Input';
              break;
            case 'dropDown':
              errors[validationEntryObject.id] = 'Nothing is Selected';
              break;
            case 'radio':
              errors[validationEntryObject.id] = 'Radio Button Not Selected';
              break;
            default:
          }
        }
      }
    });
    this.setState({ errors });
    return !Object.keys(errors).length;
  };

  processChange = (key) => {
    const handle = (e, { value }) => {
      const state = this.state;
      state.dataForSubmitting[key] = value;
      this.setState(state);
    };
    return handle;
  };

  addAstricks = (validation) => {
    if (validation) {
      return ' * ';
    }
    return '';
  };

  renderRadioButtons = (id, field) => {
    const radioButtons = field.map(option => (
      <Form.Radio
        label={option}
        value={option}
        onChange={this.processChange(id)}
        checked={this.state.dataForSubmitting[id] === option}
      />
    ));
    return radioButtons;
  };

  renderFormFromJson = (form, requestForm, errors) => {
    const requests = this.state.Requests[form];
    const formUI = requests.fields.map((field) => {
      switch (field.type) {
        case 'input':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Input id={field.id} onChange={this.processChange(field.id)} />
              {errors[field.id] && <InlineError text={errors[field.id]} pointing />}
            </Form.Field>
          );

        case 'dropDown':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Dropdown
                value={this.state[field.id]}
                onChange={this.processChange(field.id)}
                id={field.id}
                placeholder={field.placeholder}
                options={statekeys}
                fluid
                selection
              />
              {errors[field.id] && <InlineError text={errors[field.id]} pointing />}
            </Form.Field>
          );

        case 'textArea':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <TextArea
                id={field.id}
                placeholder={field.placeholder}
                onChange={this.processChange(field.id)}
              />
              {errors[field.id] && <InlineError text={errors[field.id]} pointing />}
            </Form.Field>
          );

        case 'checkbox':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Checkbox name={field.name} onChange={this.processChange(field.id)} value="true" />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );

        case 'radio':
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Form.Group id={field.id} inline>
                {this.renderRadioButtons(field.id, field.options)}
                {errors[field.id] && <InlineError text={errors[field.id]} />}
              </Form.Group>
            </Form.Field>
          );

        default:
          return (
            <Form.Field>
              <label htmlFor={field.id}>{this.addAstricks(field.validation) + field.name}</label>
              <Input id={field.id} onChange={this.processChange(field.id)} />
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
        <Header size="large">{this.props.form}</Header>
        <Form onSubmit={this.onSubmit}>
          <Segment style={Styles.segment}>
            {this.renderFormFromJson(this.props.form, this.props.requestForm, this.state.errors)}
          </Segment>
          <Segment style={Styles.segment}>
            <Button type="submit" fluid positive size="large" style={Styles.button}>
              Continue
            </Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

DynamicForm.propTypes = {
  jsonForm: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  requestForm: PropTypes.string.isRequired,
  setRequest: PropTypes.func.isRequired,
  route: PropTypes.func.isRequired,
};

export default DynamicForm;
