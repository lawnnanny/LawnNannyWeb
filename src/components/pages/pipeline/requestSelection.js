import React from "react";
import { Container, Header } from "semantic-ui-react";
import RequestOptionComponent from "../../helpers/RequestOption";
import mower from "../../../images/pipeline/mower.png";
import rake from "../../../images/pipeline/rake.png";
import snowBlower from "../../../images/pipeline/snowBlower.png";
import custom from "../../../images/pipeline/custom.png";


export const requestSelection = ({setTypeOfRequest}) => (
  <Container bordered>
    <Header as="h2">
      Choose Your Service
      <Header.Subheader>
        Choose a Service for someone to perform
      </Header.Subheader>
    </Header>
    <RequestOptionComponent
      imageURL={mower}
      title="Lawn Mowing"
      onClick = {() => setTypeOfRequest("Lawn Mowing")}
    />
    <RequestOptionComponent
      imageURL={rake}
      title="Leaf Raking"
    />
    <RequestOptionComponent
      imageURL={snowBlower}
      title="Snow Clearing"
    />
    <RequestOptionComponent
      imageURL={custom}
      title="Custom Request"
    />
  </Container>
);
export default requestSelection;
