import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, Label, Segment } from 'semantic-ui-react';
import Styles from '../../styles/breadcrumb';

const returnStatus = (selection, id) => {
  if (selection > id) {
    return 'check';
  }
  return 'cancel';
};
const returnColor = (iconColor, id) => {
  if (iconColor > id) {
    return 'green';
  }
  return 'grey';
};
export const breadcrumb = props => (
  <Grid container columns="equal">
    <Grid.Row style={Styles.row}>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            style={Styles.icon}
            circular
            size="large"
            style={Styles.checkmark}
            color={returnColor(props.iconColor, 0)}
            name={returnStatus(props.selection, 0)}
          />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Request</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={Styles.checkmark}
            color={returnColor(props.iconColor, 1)}
            name={returnStatus(props.selection, 1)}
          />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Details</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={Styles.checkmark}
            color={returnColor(props.iconColor, 2)}
            name={returnStatus(props.selection, 2)}
          />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Location</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={Styles.checkmark}
            color={returnColor(props.iconColor, 3)}
            name={returnStatus(props.selection, 3)}
          />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Price</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={Styles.checkmark}
            color={returnColor(props.iconColor, 4)}
            name={returnStatus(props.selection, 4)}
          />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Review</Label>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

breadcrumb.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default breadcrumb;
