import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Header,
  Segment,
  Checkbox,
  TextArea,
  Dropdown,
  Popup,
  Icon,
} from 'semantic-ui-react';
import { statekeys } from '../../helpers/Common';
import Styles from '../../styles/DynamicForm';
import InlineError from './InlineError';

class DynamicForm extends Component {
  constructor(props) {
    super();
    this.state = {
      loadedData: false,
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

  loadStoreWithReduxData = (props) => {
    if (props.reduxInfo && !this.state.loadedData) {
      this.state.loadedData = true;
      Object.keys(props.reduxInfo).forEach((entryKey) => {
        this.state.dataForSubmitting[entryKey] = props.reduxInfo[entryKey].entry;
      });
    }
  };

  returnValue = (id, method, optionForCheckmark) => {
    if (method === 'entry') {
      if (this.state.dataForSubmitting[id] !== null) {
        return this.state.dataForSubmitting[id];
      }
    } else if (method === 'checked') {
      return this.state.dataForSubmitting[id] === optionForCheckmark;
    }
    return '';
  };

  processChange = (key, type) => {
    const handle = (e, { value }) => {
      const state = this.state;
      if (type === 'boolean') {
        state.dataForSubmitting[key] = !state.dataForSubmitting[key];
      } else {
        state.dataForSubmitting[key] = value;
      }
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

  errorPropertyTextArea = (error) => {
    if (error) {
      return { backgroundColor: '#f6f5f3', borderColor: '#ffb4b0' };
    }
    return {};
  };

  renderInput = (field, isInRow, errors) => {
    let InLineErrorStyle = Styles.InLineErrorInput;
    let fieldStyle = Styles.field;
    if (isInRow) {
      InLineErrorStyle = Styles.InLineErrorInputRow;
      fieldStyle = Styles.groupField;
    }
    return (
      <Form.Field style={fieldStyle}>
        <label style={Styles.label} htmlFor={field.id}>
          {this.addAstricks(field.validation) + field.name}
        </label>
        <Form.Input
          error={errors[field.id]}
          value={this.returnValue(field.id, 'entry', '')}
          onChange={this.processChange(field.id, '')}
          placeholder={field.placeholder}
        />
        <div style={InLineErrorStyle}>
          {errors[field.id] && (
            <InlineError text={errors[field.id]} pointing style={Styles.InlineError} />
          )}
        </div>
      </Form.Field>
    );
  };
  renderDropDown = (field, isInRow, errors) => (
    <Form.Field style={Styles.field}>
      <label style={Styles.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Dropdown
        search
        error={errors[field.id]}
        value={this.returnValue(field.id, 'entry', '')}
        onChange={this.processChange(field.id, '')}
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

  renderTextArea = (field, isInRow, errors) => (
    <Form.Field style={Styles.field}>
      <label style={Styles.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <TextArea
        value={this.returnValue(field.id, 'entry', '')}
        style={this.errorPropertyTextArea(errors[field.id])}
        error={errors[field.id]}
        id={field.id}
        placeholder={field.placeholder}
        onChange={this.processChange(field.id, '')}
      />
      <div style={Styles.InLineErrorTextArea}>
        {errors[field.id] && <InlineError text={errors[field.id]} pointing />}
      </div>
    </Form.Field>
  );

  renderCheckbox = (field, isInRow, errors) => (
    <Form.Field style={Styles.field}>
      <label style={Styles.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Checkbox
        error={errors[field.id]}
        name={field.name}
        onChange={this.processChange(field.id, 'boolean')}
        checked={this.returnValue(field.id, 'entry', '')}
      />
      {errors[field.id] && <InlineError text={errors[field.id]} pointing="left" />}
    </Form.Field>
  );

  renderRadio = (field, isInRow, errors) => (
    <Form.Field style={Styles.field}>
      <label style={Styles.label} htmlFor={field.id}>
        {this.addAstricks(field.validation) + field.name}
      </label>
      <Form.Group id={field.id} inline>
        {this.renderRadioButtons(field.id, field.options)}
        {errors[field.id] && <InlineError text={errors[field.id]} />}
      </Form.Group>
    </Form.Field>
  );

  renderRowFromJson = (field, style, errors) => (
    <Form.Group width={field.fields.length} style={Styles.group} unstackable>
      {this.renderFormFromJson(field, true, errors)}
    </Form.Group>
  );

  renderRadioButtons = (id, field) => {
    const radioButtons = field.map(option => (
      <Form.Radio
        label={option}
        value={option}
        onChange={this.processChange(id, '')}
        checked={this.returnValue(id, 'checked', option)}
      />
    ));
    return radioButtons;
  };

  renderFormFromJson = (subForm, isInRow, errors) => {
    const formUI = subForm.fields.map((field) => {
      switch (field.type) {
        case 'input':
          return this.renderInput(field, isInRow, errors);
        case 'rowCombination':
          return this.renderRowFromJson(field, isInRow, errors);
        case 'dropDown':
          return this.renderDropDown(field, isInRow, errors);
        case 'textArea':
          return this.renderTextArea(field, isInRow, errors);
        case 'checkbox':
          return this.renderCheckbox(field, isInRow, errors);
        case 'radio':
          return this.renderRadio(field, isInRow, errors);
        default:
          return 'string';
      }
    });
    return formUI;
  };

  render() {
    this.loadStoreWithReduxData(this.props);
    return (
      <Segment padded style={Styles.Dynamicsegment}>
        <Header as="h1">
          {this.state.Requests[this.props.form].description}
          {this.props.popup && (
            <Popup
              size="large"
              trigger={<Icon name="question" style={Styles.popupIcon} circular />}
              content={this.state.Requests[this.props.form].popup}
              on={['hover', 'click']}
            />
          )}
        </Header>
        <Segment style={Styles.formSegment}>
          <Form onSubmit={this.onSubmit}>
            {this.renderFormFromJson(
              this.state.Requests[this.props.form],
              false,
              this.state.errors,
            )}
            <Form.Button size="big" fluid style={Styles.button}>
              {this.state.Requests[this.props.form].button}
            </Form.Button>
          </Form>
        </Segment>
      </Segment>
    );
  }
}

DynamicForm.propTypes = {
  jsonForm: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  setRequest: PropTypes.func.isRequired,
  route: PropTypes.func.isRequired,
  popup: PropTypes.func.isRequired,
};

export default DynamicForm;
