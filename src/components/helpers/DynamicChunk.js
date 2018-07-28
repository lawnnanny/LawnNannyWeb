import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    <Segment raised style={Styles.segment}>
      <Segment.Group horizontal style={Styles.topSegment}>
        <Segment style={Styles.headerSegment}>
          <Header as="h3" style={Styles.header}>
            {props.name}
          </Header>
        </Segment>
        <Segment textAlign="right" style={Styles.editSegment}>
          <Link to={props.link}>
            <Icon name="edit" style={Styles.editIcon} />
          </Link>
        </Segment>
      </Segment.Group>
      {getValues(props.requests)}
    </Segment>
  );
};
export default DynamicChunk;
