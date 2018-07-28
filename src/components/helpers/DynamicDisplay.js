import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicDisplay = props => (
  <Segment>
    <DynamicChunkComponent pageRequest={props.requests.selection} />
    <DynamicChunkComponent pageRequest={props.requests.requestInformation} />
    <DynamicChunkComponent pageRequest={props.requests.requestLocation} />
    <DynamicChunkComponent pageRequest={props.requests.requestPrice} />
  </Segment>
);
export default DynamicDisplay;
