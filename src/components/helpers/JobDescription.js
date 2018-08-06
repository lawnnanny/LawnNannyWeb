import React from 'react';
import { Header } from 'semantic-ui-react';
import Styles from '../../styles/helpers/JobDescription';

const JobDescription = props => (
  <div>
    <Header as="h3" style={Styles.descriptionHeader}>
      {props.title}
    </Header>
    <p>{props.text}</p>
  </div>
);
export default JobDescription;
