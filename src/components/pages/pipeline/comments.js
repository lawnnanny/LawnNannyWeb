import React from "react";
import { Button, Form, Container, TextArea } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const comments = () => (
  <Container>
    <Form>
      <TextArea
        autoHeight
        placeholder="Try adding multiple lines"
        style={{ minHeight: 100 }}
      />
      <Link to="/pipeline/complete">
        <Button positive fluid>
          Submit
        </Button>
      </Link>
    </Form>
  </Container>
);

export default comments;
