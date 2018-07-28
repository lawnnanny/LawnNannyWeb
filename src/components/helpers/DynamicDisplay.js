import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicDisplay = props => (
  <Segment.Group raised>
    <Header as="h1">{props.requests.selection}</Header>
    <DynamicChunkComponent requests={props.requests.requestInformation} name="Details" />
    <DynamicChunkComponent requests={props.requests.requestLocation} name="Location" />
    <Segment>
      <Header>Price</Header>
      <Segment> {props.requests.requestPrice}</Segment>{' '}
    </Segment>
  </Segment.Group>
);
export default DynamicDisplay;
