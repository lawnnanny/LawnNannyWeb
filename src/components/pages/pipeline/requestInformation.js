import React from "react";
import { Grid, Button, Segment } from "semantic-ui-react";
import DynamicFormComponent from "../../helpers/DynamicForm";
import BreadcrumbComponent from "../../helpers/breadcrumb";
import Styles from "../../../styles/requestInformation";

export const requestInformation = state => (
  <Grid container style={Styles.Grid}>
    <Grid.Row>
      <BreadcrumbComponent style={Styles.breadcrumb} activeStep={1} />
    </Grid.Row>
    <Grid.Row>
      <DynamicFormComponent requestType={state.typeOfRequest} />
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.buttonSegment}>
        <Button fluid positive size="large">
          Continue
        </Button>
      </Segment>
    </Grid.Row>
  </Grid>
);
export default requestInformation;
