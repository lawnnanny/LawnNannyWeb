import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import { statekeys } from '../../helpers/Common';
import Styles from '../../styles/helpers/DynamicForm';

const styles = {
  inputOverride: {
    fontSize: '1.8em',
    padding: '.5em',
  },
};

class DynamicForm extends Component {
  constructor(props) {
    super();
    this.state = {
      loadedData: false,
      errors: {},
      dataForSubmitting: {},
      Requests: props.jsonForm(),
      open: false,
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

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
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
      this.setState({
        loadedData: true,
      });
      Object.keys(props.reduxInfo).forEach((entryKey) => {
        const dataForSubmition = this.state.dataForSubmitting;
        dataForSubmition[entryKey] = props.reduxInfo[entryKey].entry;
        this.setState({
          dataForSubmitting: dataForSubmition,
        });
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
    const handle = (event) => {
      const value = event.target.value;
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
      return null;
      // return (
      //  <Popup
      //    size="large"
      //    trigger={<Icon name="question" style={Styles.popupIcon} circular />}
      //    content={this.state.Requests[this.props.form].popup}
      //    on={['hover', 'click']}
      //  />
      //  );
    }
    return null;
  };

  renderInput = (field, isInRow, errors) => {
    let fieldStyle = Styles.formControl;
    if (isInRow) {
      fieldStyle = Styles.formControlGroup;
    }
    const { classes } = this.props;
    return (
      <FormControl style={fieldStyle} required={field.validation}>
        <label style={Styles.label} htmlFor={field.id}>
          {field.name}
        </label>
        <Input
          style={Styles.input}
          error={errors[field.id]}
          value={this.returnValue(field.id, 'entry', '')}
          onChange={this.processChange(field.id, '')}
          placeholder={field.placeholder}
          type={field.password}
          classes={{ input: classes.inputOverride }}
        />
      </FormControl>
    );
  };
  renderDropDown = (field, isInRow, errors) => {
    let fieldStyle = Styles.field;
    if (isInRow) {
      fieldStyle = Styles.groupField;
    }
    return (
      <FormControl style={fieldStyle} required={field.validation}>
        <label style={Styles.label} htmlFor={field.id}>
          {field.name}
        </label>
        <Select
          style={Styles.select}
          inputProps={{
            name: field.placeholder,
            id: field.id,
          }}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          error={errors[field.id]}
          value={this.returnValue(field.id, 'entry', '')}
          onChange={this.processChange(field.id, '')}
          id={field.id}
        >
          {statekeys.map(p => (
            <MenuItem style={Styles.dropdownItem} key={p.id} value={p.name}>
              {p.abbreviation}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  renderTextArea = (field, isInRow, errors) => {
    let fieldStyle = Styles.field;
    if (isInRow) {
      fieldStyle = Styles.groupField;
    }
    return (
      <FormControl style={fieldStyle} required={field.validation}>
        <label style={Styles.label} htmlFor={field.id}>
          {field.name}
        </label>
        <Input
          style={Styles.textArea}
          autoHeight
          multiline
          rows={4}
          rowsMax={8}
          value={this.returnValue(field.id, 'entry', '')}
          error={errors[field.id]}
          id={field.id}
          placeholder={field.placeholder}
          onChange={this.processChange(field.id, '')}
        />
      </FormControl>
    );
  };

  renderCheckbox = (field, isInRow, errors) => {
    let fieldStyle = Styles.field;
    if (isInRow) {
      fieldStyle = Styles.groupField;
    }
    return (
      <FormControl style={fieldStyle} required={field.validation}>
        <label style={Styles.label} htmlFor={field.id}>
          {field.name}
        </label>
        <Checkbox
          style={Styles.checkbox}
          error={errors[field.id]}
          name={field.name}
          onChange={this.processChange(field.id, 'boolean')}
          checked={this.returnValue(field.id, 'entry', '')}
        />
      </FormControl>
    );
  };

  renderRadio = (field, isInRow) => {
    let fieldStyle = Styles.field;
    if (isInRow) {
      fieldStyle = Styles.groupField;
    }
    return (
      <FormControl style={fieldStyle} required={field.validation}>
        <label style={Styles.label} htmlFor={field.id}>
          {field.name}
        </label>
        <RadioGroup style={Styles.radioGroup} row id={field.id}>
          {this.renderRadioButtons(field.id, field.options)}
        </RadioGroup>
      </FormControl>
    );
  };

  renderRadioButtons = (id, field) => {
    const radioButtons = field.map(option => (
      <FormControlLabel
        style={Styles.formControlLabel}
        control={<Radio style={Styles.radio} />}
        labelPlacement="top"
        label={option}
        value={option}
        onChange={this.processChange(id, '')}
        checked={this.returnValue(id, 'checked', option)}
      />
    ));
    return radioButtons;
  };

  renderRowFromJson = (field, style, errors) => (
    <div>{this.renderFormFromJson(field, true, errors)}</div>
  );

  renderRegisterPassword = (field, isInRow, errors) => {
    let fieldStyle = Styles.field;
    if (isInRow) {
      fieldStyle = Styles.groupField;
    }
    const { classes } = this.props;
    return (
      <div style={Styles.signupPassDiv}>
        <FormControl style={fieldStyle} required={field.validation}>
          <label style={Styles.label} htmlFor={field.id}>
            {field.name}
          </label>
          <Input
            style={Styles.input}
            classes={{ input: classes.inputOverride }}
            error={errors[field.id]}
            value={this.returnValue(field.id, 'entry', '')}
            onChange={this.processChange(field.id, '')}
            placeholder={field.placeholder}
            type={field.password}
          />
        </FormControl>
        <FormControl style={fieldStyle} required={field.validation}>
          <label style={Styles.label} htmlFor={field.id2}>
            {field.name2}
          </label>
          <Input
            style={Styles.input}
            classes={{ input: classes.inputOverride }}
            error={errors[field.id2]}
            value={this.returnValue(field.id2, 'entry', '')}
            onChange={this.processChange(field.id2, '')}
            placeholder={field.placeholder2}
            type={field.password}
          />
        </FormControl>
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
      <div style={this.props.styling.dynamicSegment}>
        <h1 style={this.props.styling.header}>
          {this.state.Requests[this.props.form].description}
          {this.showPopup(this.state.Requests[this.props.form].popup)}
        </h1>
        <form onSubmit={this.onSubmit} textAlign="left" style={this.props.styling.formSegment}>
          {this.renderFormFromJson(this.state.Requests[this.props.form], false, this.state.errors)}
          <button style={Styles.button}>{this.state.Requests[this.props.form].button}</button>
        </form>
      </div>
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

export default withStyles(styles)(DynamicForm);
