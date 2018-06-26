import React from "react";
import { Container, Header } from "semantic-ui-react";
import RequestOptionComponent from "../../helpers/RequestOption";
import BreadcrumbComponent from "../../helpers/breadcrumb";
import mower from "../../../images/pipeline/mower.png";
import rake from "../../../images/pipeline/rake.png";
import snowBlower from "../../../images/pipeline/snowBlower.png";
import custom from "../../../images/pipeline/custom.png";

export const requestSelection = ({ setTypeOfRequest }) => (
  <Container bordered>
    <BreadcrumbComponent />
    <Header as="h2">
      Choose Your Service
      <Header.Subheader>
        Choose a Service for someone to perform
      </Header.Subheader>
    </Header>
    <RequestOptionComponent
      imageURL={mower}
      title="Lawn Mowing"
      onClick={() => {
        setTypeOfRequest("Lawn Mowing");
      }}
    />
    <RequestOptionComponent
      imageURL={rake}
      title="Leaf Raking"
      onClick={() => setTypeOfRequest("Leaf Raking")}
    />
    <RequestOptionComponent
      imageURL={snowBlower}
      title="Snow Clearing"
      onClick={() => setTypeOfRequest("Snow Clearing")}
    />
    <RequestOptionComponent
      imageURL={custom}
      title="Custom Request"
      onClick={() => setTypeOfRequest("Custom Request")}
    />
  </Container>
);
export default requestSelection;
