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
      <Header dividing>Price</Header>
      <Label style={Styles.priceLabel}>
        <Icon name="dollar" style={Styles.priceIcon} />
        {props.requests.requestPrice}
      </Label>
    </Segment>
  </Segment>
);
export default DynamicDisplay;
