import React from "react";
import { Grid, Header } from "semantic-ui-react";
import RequestOptionComponent from "../../helpers/RequestOption";
import BreadcrumbComponent from "../../helpers/breadcrumb";
import mower from "../../../images/pipeline/mower.png";
import rake from "../../../images/pipeline/rake.png";
import snowBlower from "../../../images/pipeline/snowBlower.png";
import custom from "../../../images/pipeline/custom.png";

export const requestSelection = ({ setTypeOfRequest }) => (
  <Grid container>
    <Grid.Row>
      <BreadcrumbComponent activeStep={0} />
    </Grid.Row>
    <Grid.Row>
      <Header as="h2">
        Choose Your Service
        <Header.Subheader>
          Choose a Service for someone to perform
        </Header.Subheader>
      </Header>
    </Grid.Row>
    <Grid.Row>
      <RequestOptionComponent
        imageURL={mower}
        title="Lawn Mowing"
        onClick={() => {
          setTypeOfRequest("Lawn Mowing");
        }}
      />
    </Grid.Row>
    <Grid.Row>
      <RequestOptionComponent
        imageURL={rake}
        title="Leaf Raking"
        onClick={() => setTypeOfRequest("Leaf Raking")}
      />
    </Grid.Row>
    <Grid.Row>
      <RequestOptionComponent
        imageURL={snowBlower}
        title="Snow Clearing"
        onClick={() => setTypeOfRequest("Snow Clearing")}
      />
    </Grid.Row>
    <Grid.Row>
      <RequestOptionComponent
        imageURL={custom}
        title="Custom Request"
        onClick={() => setTypeOfRequest("Custom Request")}
      />
    </Grid.Row>
  </Grid>
);
export default requestSelection;
