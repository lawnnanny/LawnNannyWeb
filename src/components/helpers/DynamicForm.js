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
      if (element.type === 'rowCombination') {
        element.fields.forEach((field) => {
          data[field.id] = {
            entry: this.state.dataForSubmitting[field.id],
            validation: field.validation,
            id: field.id,
            type: field.type,
          };
        });
      } else {
        data[element.id] = {
          entry: this.state.dataForSubmitting[element.id],
          validation: element.validation,
          id: element.id,
          type: element.type,
        };
      }
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
              errors[validationEntryObject.id] = 'Field is Required';
              break;
            case 'dropDown':
              errors[validationEntryObject.id] = 'Nothing is Selected';
              break;
            case 'radio':
              errors[validationEntryObject.id] = 'Selection is Required';
              break;
            case 'checkbox':
              errors[validationEntryObject.id] = 'Selection is Required';
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

  errorProperty = (error) => {
    if (error) {
      return { backgroundColor: '#ffe8ea' };
    }
    return {};
  };

  defaultRender = (field, comboRowStyle, errors) => (
    <Form.Field>
      <label style={comboRowStyle.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Input error={errors[field.id]} id={field.id} onChange={this.processChange(field.id)} />
      {errors[field.id] && <InlineError text={errors[field.id]} />}
    </Form.Field>
  );

  renderInput = (field, comboRowStyle, errors) => (
    <Form.Field style={Styles.field}>
      <label style={comboRowStyle.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Form.Input
        error={errors[field.id]}
        onChange={this.processChange(field.id)}
        placeholder={field.placeholder}
      />
      <div style={Styles.InLineErrorInput}>
        {errors[field.id] && <InlineError text={errors[field.id]} pointing />}
      </div>
    </Form.Field>
  );

  renderDropDown = (field, comboRowStyle, errors) => (
    <Form.Field style={Styles.field}>
      <label style={comboRowStyle.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Dropdown
        search
        error={errors[field.id]}
        value={this.state[field.id]}
        onChange={this.processChange(field.id)}
        id={field.id}
        placeholder={field.placeholder}
        options={statekeys}
        fluid
        selection
      />
      <div style={Styles.InLineErrorDropdown}>
        {errors[field.id] && <InlineError text={errors[field.id]} pointing />}
      </div>
    </Form.Field>
  );

  renderTextArea = (field, comboRowStyle, errors) => (
    <Form.Field style={Styles.field}>
      <label style={comboRowStyle.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <TextArea
        style={this.errorProperty(errors[field.id])}
        error={errors[field.id]}
        id={field.id}
        placeholder={field.placeholder}
        onChange={this.processChange(field.id)}
      />
      <div style={Styles.InLineErrorTextArea}>
        {errors[field.id] && <InlineError text={errors[field.id]} pointing />}
      </div>
    </Form.Field>
  );

  renderCheckbox = (field, comboRowStyle, errors) => (
    <Form.Field style={Styles.field}>
      <label style={comboRowStyle.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Checkbox
        error={errors[field.id]}
        name={field.name}
        onChange={this.processChange(field.id)}
        value="true"
      />
      {errors[field.id] && <InlineError text={errors[field.id]} pointing="left" />}
    </Form.Field>
  );

  renderRadio = (field, comboRowStyle, errors) => (
    <Form.Field style={Styles.field}>
      <label style={comboRowStyle.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Form.Group id={field.id} inline>
        {this.renderRadioButtons(field.id, field.options)}
        {errors[field.id] && <InlineError text={errors[field.id]} />}
      </Form.Group>
    </Form.Field>
  );

  renderRowFromJson = (field, style, errors) => (
    <Form.Group width={field.fields.length} style={Styles.group}>
      {this.renderFormFromJson(
        field,
        {
          label: {
            margin: '1em 1em 0em 0em',
            padding: '1em 1em 0em 0em',
          },
        },
        errors,
      )}
    </Form.Group>
  );

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

  renderFormFromJson = (subForm, comboRowStyle, errors) => {
    const formUI = subForm.fields.map((field) => {
      switch (field.type) {
        case 'input':
          return this.renderInput(field, comboRowStyle, errors);
        case 'rowCombination':
          return this.renderRowFromJson(field, comboRowStyle, errors);
        case 'dropDown':
          return this.renderDropDown(field, comboRowStyle, errors);
        case 'textArea':
          return this.renderTextArea(field, comboRowStyle, errors);
        case 'checkbox':
          return this.renderCheckbox(field, comboRowStyle, errors);
        case 'radio':
          return this.renderRadio(field, comboRowStyle, errors);
        default:
          return this.defaultRender(field, comboRowStyle, errors);
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
            {this.renderFormFromJson(
              this.state.Requests[this.props.form],
              { label: {} },
              this.state.errors,
            )}
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
  setRequest: PropTypes.func.isRequired,
  route: PropTypes.func.isRequired,
};

export default DynamicForm;
