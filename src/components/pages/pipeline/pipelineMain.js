import React from "react";
import { Container, Header } from "semantic-ui-react";
import RequestImageComponent from "./requestImage";
import Styles from "../../../styles/pipelineMain";
import mower from "../../../images/pipeline/mower.png";
import rake from "../../../images/pipeline/rake.png";
import snowBlower from "../../../images/pipeline/snowBlower.png";
import custom from "../../../images/pipeline/custom.png";

export const requestPipeline = () => (
  <Container bordered style={Styles.container}>
    <Header as="h2">
      Choose Your Service
      <Header.Subheader>
        Choose a Service for someone to perform
      </Header.Subheader>
    </Header>
    <RequestImageComponent
      style={Styles.RequestImageComponent}
      imageURL={mower}
      title="Lawn Mowing"
      link="/pipeline/mowing"
    />
    <RequestImageComponent
      style={Styles.RequestImageComponent}
      imageURL={rake}
      title="Leaf Raking"
      link="/pipeline/raking"
    />
    <RequestImageComponent
      style={Styles.RequestImageComponent}
      imageURL={snowBlower}
      title="Snow Clearing"
      link="/pipeline/blowing"
    />
    <RequestImageComponent
      style={Styles.RequestImageComponent}
      imageURL={custom}
      title="Custom Request"
      link="/pipeline/custom"
    />
  </Container>
);
export default requestPipeline;
