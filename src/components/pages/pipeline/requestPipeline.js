import React from "react";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import RequestImageComponent from "./requestImage";
import mower from "./mower.png";
import rake from "./rake.png";
import snowBlower from "./snowBlower.png";
import custom from "./custom.png";

export const requestPipeline = () => (
  <Container bordered>
    <Header as="h2">
      Choose Your Service
      <Header.Subheader>
        Choose a Service for someone to perform
      </Header.Subheader>
    </Header>
    <RequestImageComponent imageURL={mower} title="Lawn Mowing" />
    <RequestImageComponent imageURL={rake} title="Leaf Raking" />
    <RequestImageComponent imageURL={snowBlower} title="Snow Clearing" />
    <RequestImageComponent imageURL={custom} title="Custom Request" />
  </Container>
);
export default requestPipeline;
