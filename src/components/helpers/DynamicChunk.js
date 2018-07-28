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
  List,
} from 'semantic-ui-react';
import Styles from '../../styles/helpers/DynamicChunk';

export const DynamicChunk = (props) => {
  const getEntry = (entry) => {
    if (typeof entry === 'boolean') {
      if (entry) {
        return 'Yes';
      }
      return 'No';
    }
    return entry;
  };
  const getValues = (fields) => {
    const jsxValues = Object.values(fields).map(value => (
      <List style={Styles.section}>
        <List.Item style={Styles.value}>
          <List.Header style={Styles.name}>{value.name}</List.Header>
          {getEntry(value.entry)}
        </List.Item>
      </List>
    ));
    return jsxValues;
  };
  return (
    <Segment style={Styles.segment}>
      <Header as="h3" dividing>
        {props.name}
      </Header>
      {getValues(props.requests)}
    </Segment>
  );
};
export default DynamicChunk;
