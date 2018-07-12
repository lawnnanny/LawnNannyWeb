import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Error404 } from '../components/errors/Error404';
import ConnectedHomePageComponent from '../connectedComponents/ConnectedHomePage';
import ConnectedRequestSelection from '../connectedComponents/ConnectedRequestSelection';
import ConnectedRequestInformationComponent from '../connectedComponents/ConnectedRequestInformation';
import ConnectedRequestLocationComponent from '../connectedComponents/ConnectedRequestLocation';
import { App } from '../components/App';
import reducers from '../reducers/reducers';

export class Routes extends Component {
  constructor() {
    super();

    const store = createStore(reducers, applyMiddleware(thunk));

    this.state = {
      store,
    };

    store.subscribe(() => {
      console.log('store.getState()', store.getState());
    });
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <BrowserRouter className="router">
          <Switch>
            <Route exact path="/test" component={App} />
            <Route
              exact
              path="/pipeline"
              component={ConnectedRequestSelection}
            />
            <Route
              exact
              path="/HomePage"
              component={ConnectedHomePageComponent}
            />
            <Route
              exact
              path="/pipeline/requestInformation"
              component={ConnectedRequestInformationComponent}
            />
            <Route
              exact
              path="/pipeline/requestLocation"
              component={ConnectedRequestLocationComponent}
            />
            <Route path="/*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
