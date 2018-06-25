import React from "react";
import {} from "semantic-ui-react";
import DynamicFormComponent from "../../helpers/DynamicForm";
import BreadcrumbComponent from "./breadcrumb";
import Styles from "../../../styles/requestInformation";

export const requestInformation = state => (
  <div>
    <BreadcrumbComponent style={Styles.breadcrumb} />
    <DynamicFormComponent requestType={state.typeOfRequest} />
  </div>
);
export default requestInformation;
