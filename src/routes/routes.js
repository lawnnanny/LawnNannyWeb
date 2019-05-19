import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Error404 } from '../components/errors/Error404';
import ConnectedNavBarComponent from '../containers/components/ConnectedNavBar/ConnectedNavBar';
import ConnectedRequestSelection from '../containers/pages/pipeline/ConnectedRequestSelection/ConnectedRequestSelection';
import ConnectedRequestInformationComponent from '../containers/pages/pipeline/ConnectedRequestInformation/ConnectedRequestInformation';
import ConnectedRequestLocationComponent from '../containers/pages/pipeline/ConnectedRequestLocation/ConnectedRequestLocation';
import ConnectedRequestPriceComponent from '../containers/pages/pipeline/ConnectedRequestPrice/ConnectedRequestPrice';
import ConnectedRequestReviewComponent from '../containers/pages/pipeline/ConnectedRequestReview/ConnectedRequestReview';
import ConnectedRequestCompleteComponent from '../containers/pages/pipeline/ConnectedRequestComplete/ConnectedRequestComplete';
import HomePageComponent from '../pages/homepage/HomePage';
import { App } from '../components/App/App';
import reducers from '../reducers/reducers';
import styles from '../components/App/App.module.css';

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
              <div className={styles.div} {...props}>
                <ConnectedNavBarComponent className={styles.navBar} {...props} />
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
