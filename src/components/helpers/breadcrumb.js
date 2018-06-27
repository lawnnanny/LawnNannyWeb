import React from "react";
import Stepper from "react-stepper-horizontal";
import { Icon, Grid } from "semantic-ui-react";
import Styles from "../../styles/breadcrumb";

export const breadcrumb = props => (
  <Grid container>
    <Grid.Row>
      <Stepper
        completeColor="#63BA18"
        activeColor="#ffdd43"
        steps={[
          { title: "Request" },
          { title: "Details" },
          { title: "Location" },
          { title: "Review" }
        ]}
        activeStep={props.activeStep}
      />
    </Grid.Row>
  </Grid>
);

export default breadcrumb;
