import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const InlineError = ({ text, pointing }) => (
  <Label basic color="red" pointing={pointing}>
    {text}
  </Label>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
  pointing: PropTypes.bool.isRequired,
};

export default InlineError;
