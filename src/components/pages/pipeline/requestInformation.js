import React from "react";
import { Container, Header } from "semantic-ui-react";
import DynamicFormComponent from "../../helpers/DynamicForm"

export const requestInformation = ({typeOfRequest}) => (
  <div>
  <DynamicFormComponent requestType={typeOfRequest}/>
  </div>
);
export default requestInformation
