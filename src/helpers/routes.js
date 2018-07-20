import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Error404 } from '../components/errors/Error404';
import ConnectedNavBarComponent from '../connectedComponents/ConnectedNavBar';
import ConnectedRequestSelection from '../connectedComponents/ConnectedRequestSelection';
import ConnectedRequestInformationComponent from '../connectedComponents/ConnectedRequestInformation';
import ConnectedRequestLocationComponent from '../connectedComponents/ConnectedRequestLocation';
import ConnectedRequestPriceComponent from '../connectedComponents/ConnectedRequestPrice';
import HomePageComponent from '../components/pages/HomePage';
import { App } from '../components/App';
import reducers from '../reducers/reducers';
import Styles from '../styles/App';

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
          <div style={Styles.div}>
            <ConnectedNavBarComponent style={Styles.navBar} />
            <Switch>
              <Route exact path="/test" component={App} />
              <Route exact path="/pipeline" component={ConnectedRequestSelection} />
              <Route exact path="/HomePage" component={HomePageComponent} />
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
              <Route
                exact
                path="/pipeline/requestPrice"
                component={ConnectedRequestPriceComponent}
              />
              <Route path="/*" component={Error404} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
