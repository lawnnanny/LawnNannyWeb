import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers/reducers";

import Error404 from "../components/errors/Error404";
import HomePageComponent from "./pages/HomePage";
import requestSelectioComponent from "./pages/pipeline/requestSelection";
import mowerFormComponent from "./pages/pipeline/formComponents/mowerForm";
import rakingFormComponent from "./pages/pipeline/formComponents/rakingForm";
import snowBlowingFormComponent from "./pages/pipeline/formComponents/snowBlowingForm";
import customFormComponent from "./pages/pipeline/formComponents/customForm";

export default class App extends Component {
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
            <Route exact path="/pipeline" component={requestSelectioComponent} />
            <Route
              exact
              path="/pipeline/mowing"
              component={mowerFormComponent}
            />
            <Route
              exact
              path="/pipeline/raking"
              component={rakingFormComponent}
            />
            <Route
              exact
              path="/pipeline/blowing"
              component={snowBlowingFormComponent}
            />
            <Route
              exact
              path="/pipeline/custom"
              component={customFormComponent}
            />
            <Route path="/*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
