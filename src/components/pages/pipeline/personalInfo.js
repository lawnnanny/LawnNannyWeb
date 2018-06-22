import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export const personalInfo = props => (
  <Form>
    <Form.Field>
      <label htmlFor={props.label}>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label htmlFor={props.label2}>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default personalInfo;
