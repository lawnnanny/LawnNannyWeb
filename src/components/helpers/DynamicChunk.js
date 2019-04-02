import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon, List } from 'semantic-ui-react';
import styles from '../../styles/helpers/DynamicChunk.module.css';

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
      <List className={styles.section}>
        <List.Item className={styles.value}>
          <List.Header className={styles.name}>{value.name}</List.Header>
          {getEntry(value.entry)}
        </List.Item>
      </List>
    ));
    return jsxValues;
  };
  return (
    <Segment raised className={styles.segment}>
      <Segment.Group horizontal className={styles.topSegment}>
        <Segment className={styles.headerSegment}>
          <Header as="h3" className={styles.header}>
            {props.name}
          </Header>
        </Segment>
        <Segment textAlign="right" className={styles.editSegment}>
          <Link to={props.link}>
            <Icon name="edit" className={styles.editIcon} />
          </Link>
        </Segment>
      </Segment.Group>
      {getValues(props.requests)}
    </Segment>
  );
};
DynamicChunk.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  requests: PropTypes.func,
};
DynamicChunk.defaultProps = {
  name: PropTypes.string,
  link: PropTypes.string,
  requests: PropTypes.func,
};
export default DynamicChunk;
