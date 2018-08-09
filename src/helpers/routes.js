import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Error404 } from '../components/errors/Error404';
import ConnectedNavBarComponent from '../connectedComponents/ConnectedNavBar';
import ConnectedRequestSelection from '../connectedComponents/pipeline/ConnectedRequestSelection';
import ConnectedRequestInformationComponent from '../connectedComponents/pipeline/ConnectedRequestInformation';
import ConnectedRequestLocationComponent from '../connectedComponents/pipeline/ConnectedRequestLocation';
import ConnectedRequestPriceComponent from '../connectedComponents/pipeline/ConnectedRequestPrice';
import ConnectedRequestReviewComponent from '../connectedComponents/pipeline/ConnectedRequestReview';
import ConnectedRequestCompleteComponent from '../connectedComponents/pipeline/ConnectedRequestComplete';
import ConnectedRequestPage from '../connectedComponents/ConnectedRequestPage';
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
                  <Route exact path="/users/RequestPage" component={ConnectedRequestPage} />
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
