import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Error404 } from '../features/errors/Error404';
import ConnectedNavBarComponent from '../ConnectedFeatures/ConnectedNavBar/ConnectedNavBar';
import ConnectedRequestSelection from '../ConnectedFeatures/ConnectedRequestPipeline/ConnectedRequestSelection';
import ConnectedRequestInformationComponent from '../ConnectedFeatures/ConnectedRequestPipeline/ConnectedRequestInformation';
import ConnectedRequestLocationComponent from '../ConnectedFeatures/ConnectedRequestPipeline/ConnectedRequestLocation';
import ConnectedRequestPriceComponent from '../ConnectedFeatures/ConnectedRequestPipeline/ConnectedRequestPrice';
import ConnectedRequestReviewComponent from '../ConnectedFeatures/ConnectedRequestPipeline/ConnectedRequestReview';
import ConnectedRequestCompleteComponent from '../ConnectedFeatures/ConnectedRequestPipeline/ConnectedRequestComplete';
import HomePageComponent from '../features/homepage/homepage';
import { App } from '../features/App';
import reducers from '../reducers/reducers';
import Styles from '../styles/App';

export class Routes extends Component {
  constructor() {
    super();

    const store = createStore(reducers, applyMiddleware(thunk));

    sessionService.initSessionService(store);

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
          <Route
            render={props => (
              <div style={Styles.div} {...props}>
                <ConnectedNavBarComponent style={Styles.navBar} {...props} />
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
                  <Route
                    exact
                    path="/pipeline/requestReview"
                    component={ConnectedRequestReviewComponent}
                  />
                  <Route
                    exact
                    path="/pipeline/requestComplete"
                    component={ConnectedRequestCompleteComponent}
                  />
                  <Route path="/*" component={Error404} />
                </Switch>
              </div>
            )}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
