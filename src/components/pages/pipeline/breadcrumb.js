import React from "react";
import { Segment, Step, Icon } from "semantic-ui-react";

export const breadcrumb = () => (
  <Segment padded>
    <Step.Group>
      <Step>
        <Icon name="wrench" />
        <Step.Content>
          <Step.Title>Request Type</Step.Title>
          <Step.Description>What Task do you need help with?</Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="wpforms" />
        <Step.Content>
          <Step.Title>Job Details</Step.Title>
          <Step.Description>
            Tell us how you want the job done!
          </Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="map signs" />
        <Step.Content>
          <Step.Title>Location</Step.Title>
          <Step.Description>Where are we going?</Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="dollar" />
        <Step.Content>
          <Step.Title>Request Type</Step.Title>
          <Step.Description>Choose the type of request</Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="handshake" />
        <Step.Content>
          <Step.Title>Request Type</Step.Title>
          <Step.Description>Choose the type of request</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  </Segment>
);
export default breadcrumb;
