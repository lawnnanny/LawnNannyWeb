import React from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Container, Header } from "semantic-ui-react";

export const personalInfo = () => (
  <Container>
    <Header> How can we find you? </Header>
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
      <Link to="/pipeline/comments">
        <Button type="submit">Submit</Button>
      </Link>
    </Form>
  </Container>
);

export default personalInfo;
