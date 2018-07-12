import React from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Grid } from 'semantic-ui-react';

export const breadcrumb = props => (
  <Grid container>
    <Grid.Row>
      <Stepper
        completeColor="#63BA18"
        activeColor="#ffdd43"
        steps={[
          { title: 'Request' },
          { title: 'Details' },
          { title: 'Location' },
          { title: 'Review' },
        ]}
        activeStep={props.activeStep}
      />
    </Grid.Row>
  </Grid>
);

breadcrumb.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default breadcrumb;
