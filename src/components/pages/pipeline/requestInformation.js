import React from "react";
import {} from "semantic-ui-react";
import DynamicFormComponent from "../../helpers/DynamicForm";
import BreadcrumbComponent from "./breadcrumb";

export const requestInformation = state => (
  <div>
    <BreadcrumbComponent />
    <DynamicFormComponent requestType={state.typeOfRequest} />
  </div>
);
export default requestInformation;
