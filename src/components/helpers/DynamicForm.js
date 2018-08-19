import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form,
  Header,
  Segment,
  Checkbox,
  TextArea,
  Dropdown,
  Popup,
  Icon,
  Button,
} from 'semantic-ui-react';
import { statekeys } from '../../helpers/Common';
import Styles from '../../styles/helpers/DynamicForm';
import InlineError from './InlineError';

const FormButton = styled(Button)`
  &&& {
    :active {
      background-color: #221891 !important;
      transform: translateY(4px) !important;
    }
  }
`;
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
            name: field.name,
            validation: field.validation,
            id: field.id,
            type: field.type,
          };
        });
      } else if (element.type === 'registerPassword') {
        data[element.id] = {
          entry: this.state.dataForSubmitting[element.id],
          name: element.name,
          validation: element.validation,
          id: element.id,
          type: element.type,
        };
        data[element.id2] = {
          entry: this.state.dataForSubmitting[element.id2],
          name: element.name2,
          validation: element.validation,
          id: element.id2,
          type: element.type,
        };
      } else {
        data[element.id] = {
          entry: this.state.dataForSubmitting[element.id],
          name: element.name,
          validation: element.validation,
          id: element.id,
          type: element.type,
        };
      }
    });
    if (this.validateAndSetStateErrorsForDisplay(data)) {
      this.props.setRequest(data);
      this.props.route(data);
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
            case 'registerPassword':
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

  errorPropertyTextArea = (error) => {
    if (error) {
      return { backgroundColor: '#f6f5f3', borderColor: '#ffb4b0', fontSize: '1.3em' };
    }
    return { fontSize: '1.3em' };
  };
  showPopup = (popup) => {
    if (popup) {
      return (
        <Popup
          size="large"
          trigger={<Icon name="question" style={Styles.popupIcon} circular />}
          content={this.state.Requests[this.props.form].popup}
          on={['hover', 'click']}
        />
      );
    }
    return null;
  };

  renderInput = (field, isInRow, errors) => {
    let InLineErrorStyle = Styles.InLineErrorInput;
    let fieldStyle = Styles.field;
    if (isInRow) {
      InLineErrorStyle = Styles.InLineErrorInputRow;
      fieldStyle = Styles.groupField;
    }
    return (
      <Form.Field style={fieldStyle} required={field.validation}>
        <label style={Styles.label} htmlFor={field.id}>
          {field.name}
        </label>
        <Form.Input
          error={errors[field.id]}
          value={this.returnValue(field.id, 'entry', '')}
          onChange={this.processChange(field.id, '')}
          placeholder={field.placeholder}
          style={Styles.input}
          type={field.password}
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
    <Form.Field style={Styles.field} required={field.validation}>
      <label style={Styles.label} htmlFor={field.id}>
        {field.name}
      </label>
      <Dropdown
        style={Styles.dropdown}
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
    <Form.Field style={Styles.field} required={field.validation}>
      <label style={Styles.label} htmlFor={field.id}>
        {field.name}
      </label>
      <TextArea
        autoHeight
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
    <Form.Field style={Styles.field} required={field.validation}>
      <label style={Styles.label} htmlFor={field.id}>
        {field.name}
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
    <Form.Field style={Styles.field} required={field.validation}>
      <label style={Styles.label} htmlFor={field.id}>
        {field.name}
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

  renderRegisterPassword = (field, isInRow, errors) => {
    let InLineErrorStyle = Styles.InLineErrorInput;
    let fieldStyle = Styles.field;
    if (isInRow) {
      InLineErrorStyle = Styles.InLineErrorInputRow;
      fieldStyle = Styles.groupField;
    }
    return (
      <div>
        <Form.Field style={fieldStyle} required={field.validation}>
          <label style={Styles.label} htmlFor={field.id}>
            {field.name}
          </label>
          <Form.Input
            error={errors[field.id]}
            value={this.returnValue(field.id, 'entry', '')}
            onChange={this.processChange(field.id, '')}
            placeholder={field.placeholder}
            style={Styles.input}
            type={field.password}
          />
          <div style={InLineErrorStyle}>
            {errors[field.id] && (
              <InlineError text={errors[field.id]} pointing style={Styles.InlineError} />
            )}
          </div>
        </Form.Field>
        <Form.Field style={fieldStyle} required={field.validation}>
          <label style={Styles.label} htmlFor={field.id2}>
            {field.name2}
          </label>
          <Form.Input
            error={errors[field.id2]}
            value={this.returnValue(field.id2, 'entry', '')}
            onChange={this.processChange(field.id2, '')}
            placeholder={field.placeholder2}
            style={Styles.input}
            type={field.password}
          />
          <div style={InLineErrorStyle}>
            {errors[field.id2] && (
              <InlineError text={errors[field.id2]} pointing style={Styles.InlineError} />
            )}
          </div>
        </Form.Field>
      </div>
    );
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
        case 'registerPassword':
          return this.renderRegisterPassword(field, isInRow, errors);
        default:
          return 'string';
      }
    });
    return formUI;
  };
  render() {
    this.loadStoreWithReduxData(this.props);
    return (
      <Segment textAlign="left" padded style={this.props.styling.dynamicSegment}>
        <Header as="h1" style={this.props.styling.header}>
          {this.state.Requests[this.props.form].description}
          {this.showPopup(this.state.Requests[this.props.form].popup)}
        </Header>
        <Segment textAlign="left" style={this.props.styling.formSegment}>
          <Form onSubmit={this.onSubmit}>
            {this.renderFormFromJson(
              this.state.Requests[this.props.form],
              false,
              this.state.errors,
            )}
            <FormButton size="big" fluid style={Styles.button}>
              {this.state.Requests[this.props.form].button}
            </FormButton>
          </Form>
        </Segment>
      </Segment>
    );
  }
}

DynamicForm.propTypes = {
  jsonForm: PropTypes.func,
  form: PropTypes.string,
  route: PropTypes.func,
  styling: PropTypes.obj,
  setRequest: PropTypes.func,
};
DynamicForm.defaultProps = {
  jsonForm: PropTypes.func,
  form: PropTypes.string,
  route: PropTypes.func,
  styling: PropTypes.obj,
  setRequest: PropTypes.func,
};

export default DynamicForm;
