import React from "react";
import { Button, Form, TextArea, Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const comments = () => (
  <Segment padded>
    <Header as="h2">Please provide additional information to help us</Header>
    <Form>
      <TextArea
        autoHeight
        placeholder="Try adding multiple lines"
        style={{ minHeight: 100 }}
      />
    </Form>
    <Segment.Group>
      <Link to="/pipeline/complete">
        <Button positive fluid>
          Submit
        </Button>
      </Link>
    </Segment.Group>
  </Segment>
);

export default comments;
