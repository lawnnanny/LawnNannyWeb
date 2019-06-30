import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export const FormController = props => (
  <div>
    <FormControl>
      <InputLabel>
        {props.field.name}
      </InputLabel>
      <Input
        error={(props.form.touched && props.form.touched[props.field.name]
        && props.form.errors[props.field.name] && true) !== undefined}
      />
    </FormControl>
  </div>
);

FormController.propTypes = {
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.string),
    errors: PropTypes.objectOf(PropTypes.string),
  }),
  field: PropTypes.shape({
    name: PropTypes.string,
  }),
};

FormController.defaultProps = {
  form: PropTypes.shape({
    touched: {},
    errors: {},
  }),
  field: PropTypes.shape({
    name: '',
  }),
};


export default FormController;
