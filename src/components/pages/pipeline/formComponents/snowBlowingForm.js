import React from "react";
import { Button, Checkbox, Form, Container, Header } from "semantic-ui-react";
import FormButton from "./formButton";

export const personalInfo = props => (
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
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);

export default personalInfo;
