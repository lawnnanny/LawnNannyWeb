import React from 'react';
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

export const DynamicChunk = (props) => {
  const getEntry = (entry) => {
    if (typeof entry === 'boolean') {
      if (entry) {
        return 'yes';
      }
      return 'no';
    }
    return entry;
  };
  const getValues = (fields) => {
    const jsxValues = Object.values(fields).map(value => (
      <Segment>
        <Header as="h4">{value.name}</Header>
        <div>{getEntry(value.entry)}</div>
      </Segment>
    ));
    return jsxValues;
  };
  return (
    <Segment>
      <Header>{props.name}</Header>
      {getValues(props.requests)}
    </Segment>
  );
};
export default DynamicChunk;
