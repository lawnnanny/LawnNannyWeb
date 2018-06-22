import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment, Icon, Grid } from "semantic-ui-react";
import { statekeys } from "../../../helpers/Common";
import dab from "../../../images/pipeline/dab.jfif";

export const personalInfo = () => (
  <Segment padded>
    <Grid centered>
      <Grid.Row>
        <Header as="h2"> How can we find you? </Header>
      </Grid.Row>
      <Grid.Row>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input placeholder="Street Address" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City" />
          </Form.Field>
          <Form.Field>
            <Form.Dropdown
              fluid
              label="State"
              placeholder="State"
              search
              selection
              options={statekeys}
            />
          </Form.Field>
          <Form.Field>
            <label>Zipcode</label>
            <input placeholder="50208" />
          </Form.Field>
        </Form>
      </Grid.Row>
      <Grid.Row>
        <Link to="/pipeline/comments">
          <Button icon labelPosition="right" positive floated="right">
            Next
            <Icon name="right arrow" />
          </Button>
        </Link>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default personalInfo;
