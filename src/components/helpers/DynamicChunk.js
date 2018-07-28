import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Header,
  Segment,
  Checkbox,
  TextArea,
  Dropdown,
  Popup,
  Icon,
} from 'semantic-ui-react';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicChunk = (props) => {
  console.log(props.pageRequest);
  return <div>hello</div>;
};
export default DynamicChunk;
