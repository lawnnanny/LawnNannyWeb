import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Error404 from "../components/errors/Error404";
import HomePageComponent from "../components/pages/HomePage";
import requestPipelineComponent from "../components/pages/requestPipeline";
import App from "../components/App";
import ConnectedHomePage from "../connectedComponents/ConnectedHomePage";

import reducers from "../reducers/reducers";

export class Routes extends Component {
  constructor() {
    super();

    const store = createStore(reducers);

    this.state = {
      store
    };

    store.subscribe(() => {
      console.log("store.getState()", store.getState());
    });
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <BrowserRouter className="router">
          <Switch>
            <Route exact path="/test" component={App} />
            <Route exact path="/HomePage" component={HomePageComponent} />
            <Route
              exact
              path="/requestPipeline"
              component={requestPipelineComponent}
            />
            <Route
              exact
              path="/ConnectedHomePage"
              component={ConnectedHomePage}
            />
            <Route path="/*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;