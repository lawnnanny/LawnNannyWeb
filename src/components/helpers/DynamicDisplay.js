import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Segment, Header, Label, Icon } from 'semantic-ui-react';
import Styles from '../../styles/helpers/DynamicDisplay';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicDisplay = props => (
  <Segment raised style={Styles.container} textAlign="left">
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
    <Segment raised style={Styles.priceSegment}>
      <Segment.Group horizontal style={Styles.topSegment}>
        <Segment style={Styles.headerSegment}>
          <Header as="h3" style={Styles.priceHeader}>
            Price
          </Header>
        </Segment>
        <Segment textAlign="right" style={Styles.editSegment}>
          <Link to="/pipeline/requestPrice">
            <Icon name="edit" style={Styles.editIcon} />
          </Link>
        </Segment>
      </Segment.Group>
      <Label style={Styles.priceLabel}>
        <Icon name="dollar" style={Styles.priceIcon} />
        {props.requests.requestPrice}
      </Label>
    </Segment>
  </Segment>
);
DynamicDisplay.propTypes = {
  requests: PropTypes.obj,
};
DynamicDisplay.defaultProps = {
  requests: PropTypes.obj,
};
export default DynamicDisplay;
