import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
import { statekeys } from '../../helpers/Common';
import Styles from '../../styles/helpers/DynamicForm';
import InlineError from './InlineError';

class DynamicDisplay extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Segment>
        DynamicDisplay
      </Segment>
    );
  }
}
export default DynamicDisplay;
