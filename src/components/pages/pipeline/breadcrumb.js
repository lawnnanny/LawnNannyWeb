import React from "react";
import { Segment, Step, Icon } from "semantic-ui-react";
import Styles from "../../../styles/breadcrumb";

export const breadcrumb = () => (
  <Segment padded style={Styles.segment}>
    <Step.Group unstackable>
      <Step>
        <Icon name="wrench" />
        <Step.Content>
          <Step.Title>Request Type</Step.Title>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="wpforms" />
        <Step.Content>
          <Step.Title>Job Details</Step.Title>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="map signs" />
        <Step.Content>
          <Step.Title>Location</Step.Title>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="dollar" />
        <Step.Content>
          <Step.Title>Price</Step.Title>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="handshake" />
        <Step.Content>
          <Step.Title>Review Request</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  </Segment>
);
export default breadcrumb;
