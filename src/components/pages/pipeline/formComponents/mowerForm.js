import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Header, Icon } from "semantic-ui-react";

const options = [
  { key: "C", text: "Conventional", value: "Conventional" },
  { key: "A", text: "Acreage", value: "Acreage" },
  { key: "M", text: "Cemetery", value: "Cemetery" },
  { key: "O", text: "Other", value: "Other" }
];
export const mowerForm = () => (
  <Container text>
    <Header> Choose your preferences </Header>
    <Form>
      <Form.Field>
        <Form.Select
          fluid
          label="Yard Type"
          options={options}
          placeholder="Type"
        />
      </Form.Field>
      <Form.Checkbox label="I would like to have my grass bagged" />
      <Link to="/pipeline/personalInfo">
        <Button icon labelPosition="right" positive floated="right">
          Next
          <Icon name="right arrow" />
        </Button>
      </Link>
    </Form>
  </Container>
);

export default mowerForm;
