import React from "react";
import { Grid, Button, Segment, Header } from "semantic-ui-react";
import DynamicFormComponent from "../../helpers/DynamicForm";
import BreadcrumbComponent from "../../helpers/breadcrumb";
import Styles from "../../../styles/requestInformation";

export const requestInformation = state => (
  <Grid container style={Styles.Grid}>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <BreadcrumbComponent style={Styles.breadcrumb} activeStep={1} />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <DynamicFormComponent requestType={state.typeOfRequest} />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <Button fluid positive size="large">
          Continue
        </Button>
      </Segment>
    </Grid.Row>
  </Grid>
);
export default requestInformation;
