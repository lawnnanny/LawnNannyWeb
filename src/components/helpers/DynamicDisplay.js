import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicDisplay = props => (
  <Segment>
    <DynamicChunkComponent selection={props.requests.selection} />
    <DynamicChunkComponent information={props.requests.information} />
    <DynamicChunkComponent selection={props.requests.location} />
    <DynamicChunkComponent selection={props.requests.price} />
  </Segment>
);
export default DynamicDisplay;
