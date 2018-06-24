import React from "react";
import { Container, Header } from "semantic-ui-react";
import DynamicFormComponent from "../../helpers/DynamicForm"

export const requestInformation = (state) => (
  <div>
  <DynamicFormComponent requestType={state.typeOfRequest}/>
  </div>
)
export default requestInformation
