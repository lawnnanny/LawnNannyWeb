import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
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
import HomePageComponent from '../components/pages/Homepage/HomePage';
import { App } from '../components/App';
import reducers from '../reducers/reducers';
import Styles from '../styles/App';

export const Routes = () => {
  const [store] = useState(createStore(reducers, applyMiddleware(thunk)));
  sessionService.initSessionService(store);
  store.subscribe(() => {
    console.log('store.getState()', store.getState());
  });
  return (
    <Provider store={store}>
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
};
export default Routes;
