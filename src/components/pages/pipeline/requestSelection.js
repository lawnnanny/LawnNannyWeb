import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Segment } from 'semantic-ui-react';
import RequestOptionComponent from '../../helpers/RequestOption';
import ConnectedBreadcrumbComponent from '../../../connectedComponents/pipeline/ConnectedBreadcrumb';
import Styles from '../../../styles/requestSelection';
import mower from '../../../images/pipeline/mower.png';
import rake from '../../../images/pipeline/rake.png';
import snowBlower from '../../../images/pipeline/snowBlower.png';
import custom from '../../../images/pipeline/custom.png';

export const requestSelection = props => (
  <Grid container style={Styles.grid}>
    <Grid.Row style={Styles.breadrow}>
      <Segment style={Styles.segment}>
        <ConnectedBreadcrumbComponent selection={0} />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <Header as="h2">
          Choose Your Service
          <Header.Subheader>Choose a Service for someone to perform</Header.Subheader>
        </Header>
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.buttonSegment}>
        <RequestOptionComponent
          completed={props.setCompletedRequest()}
          style={Styles.buttonComponent}
          imageURL={mower}
          title="Lawn Mowing"
          onClick={() => {
            props.setTypeOfRequest('Lawn Mowing');
          }}
        />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.buttonSegment}>
        <RequestOptionComponent
          completed={props.setCompletedRequest()}
          style={Styles.buttonComponent}
          imageURL={rake}
          title="Leaf Raking"
          onClick={() => props.setTypeOfRequest('Leaf Raking')}
        />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.buttonSegment}>
        <RequestOptionComponent
          completed={props.setCompletedRequest()}
          style={Styles.buttonComponent}
          imageURL={snowBlower}
          title="Snow Clearing"
          onClick={() => props.setTypeOfRequest('Snow Clearing')}
        />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.buttonSegment}>
        <RequestOptionComponent
          completed={props.setCompletedRequest()}
          style={Styles.buttonComponent}
          imageURL={custom}
          title="Custom Request"
          onClick={() => props.setTypeOfRequest('Custom Request')}
        />
      </Segment>
    </Grid.Row>
  </Grid>
);

requestSelection.propTypes = {
  setTypeOfRequest: PropTypes.func.isRequired,
  setCompletedRequest: PropTypes.func.isRequired,
};
requestSelection.defaultProps = {
  imageURL: PropTypes.object,
};

export default requestSelection;
