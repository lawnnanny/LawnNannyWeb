import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../../styles/helpers/DynamicDisplay';
import { Segment, Header, Label, Icon } from 'semantic-ui-react';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicDisplay = props => (
  <Segment raised style={Styles.container} textAlign="left">
    <Header as="h1">{props.requests.selection}</Header>
    <DynamicChunkComponent requests={props.requests.requestInformation} name="Details" />
    <DynamicChunkComponent requests={props.requests.requestLocation} name="Location" />
    <Segment>
      <Segment.Group horizontal style={Styles.topSegment}>
        <Segment style={Styles.headerSegment}>
          <Header as="h3" style={Styles.priceHeader}>
            Price
          </Header>
        </Segment>
        <Segment textAlign="right" style={Styles.editSegment}>
          <Icon name="edit" style={Styles.editIcon} />
        </Segment>
      </Segment.Group>
      <Label style={Styles.priceLabel}>
        <Icon name="dollar" style={Styles.priceIcon} />
        {props.requests.requestPrice}
      </Label>
    </Segment>
  </Segment>
);
export default DynamicDisplay;
