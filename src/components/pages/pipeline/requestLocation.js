import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { jsonForm } from './jsonForms/locationForm';
import Styles from '../../../styles/requestInformation';
import DynamicFormComponent from '../../helpers/DynamicForm';
import ConnectedBreadcrumbComponent from '../../../connectedComponents/pipeline/ConnectedBreadcrumb';

export default class requestLocation extends Component {
  componentWillMount() {
    this.props.setCompletedRequestInformation();
  }
  render() {
    return (
      <Grid container style={Styles.grid}>
        <Grid.Row style={Styles.breadrow}>
          <Segment style={Styles.segment}>
            <ConnectedBreadcrumbComponent selection={2} />
          </Segment>
        </Grid.Row>
        <Grid.Row padding style={Styles.Grid}>
          <Segment style={Styles.segment}>
            <DynamicFormComponent
              popup
              jsonForm={() => jsonForm}
              reduxInfo={this.props.requests.requestLocation}
              setRequest={this.props.setRequestLocation}
              form={'Location'}
              route={() => {
                this.props.history.push('/pipeline/requestPrice');
              }}
            />
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}
