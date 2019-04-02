import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Segment, Header, Label, Icon } from 'semantic-ui-react';
import styles from '../../styles/helpers/DynamicDisplay.module.css';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicDisplay = props => (
  <Segment raised className={styles.container} textAlign="left">
    <Header as="h1">{props.requests.selection}</Header>
    <DynamicChunkComponent
      requests={props.requests.requestInformation}
      name="Details"
      link="/pipeline/requestInformation"
    />
    <DynamicChunkComponent
      requests={props.requests.requestLocation}
      name="Location"
      link="/pipeline/requestLocation"
    />
    <Segment raised className={styles.priceSegment}>
      <Segment.Group horizontal className={styles.topSegment}>
        <Segment className={styles.headerSegment}>
          <Header as="h3" className={styles.priceHeader}>
            Price
          </Header>
        </Segment>
        <Segment textAlign="right" className={styles.editSegment}>
          <Link to="/pipeline/requestPrice">
            <Icon name="edit" className={styles.editIcon} />
          </Link>
        </Segment>
      </Segment.Group>
      <Label className={styles.priceLabel}>
        <Icon name="dollar" className={styles.priceIcon} />
        {props.requests.requestPrice}
      </Label>
    </Segment>
  </Segment>
);
DynamicDisplay.propTypes = {
  requests: PropTypes.func,
};
DynamicDisplay.defaultProps = {
  requests: PropTypes.func,
};
export default DynamicDisplay;
