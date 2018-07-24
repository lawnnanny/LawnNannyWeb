import React, { Component } from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { jsonForm } from './jsonForms/informationForm';
import DynamicFormComponent from '../../helpers/DynamicForm';
import ConnectedBreadcrumbComponent from '../../../connectedComponents/pipeline/ConnectedBreadcrumb';
import Styles from '../../../styles/requestInformation';

export default class requestInformation extends Component {
  componentWillMount() {
    this.props.setCompletedRequest();
  }
  render() {
    return (
      <Grid container style={Styles.grid}>
        <Grid.Row style={Styles.breadrow}>
          <Segment style={Styles.segment}>
            <ConnectedBreadcrumbComponent selection={1} />
          </Segment>
        </Grid.Row>
        <Grid.Row padding style={Styles.Grid}>
          <Segment style={Styles.segment}>
            <DynamicFormComponent
              popup
              jsonForm={() => jsonForm}
              reduxInfo={this.props.requests.requestInformation}
              setRequest={this.props.setRequestInformation}
              form={this.props.requests.selection}
              route={() => {
                this.props.history.push('/pipeline/requestLocation');
              }}
            />
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}
