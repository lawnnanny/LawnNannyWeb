import React from 'react';
import { Header, Segment, Label, Icon, List } from 'semantic-ui-react';
import Styles from '../../styles/helpers/JobDescription';

const JobDescription = (props) => {
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
    <Segment raised style={Styles.container} textAlign="left">
      <Header style={Styles.descriptionHeader}>Job Description </Header>
      {getValues(props.requests.requestInformation)}
    </Segment>
  );
};
export default JobDescription;
