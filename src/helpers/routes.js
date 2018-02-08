import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../components/App';
import LoginPage from '../components/LoginPage';
import Error404 from '../components/errors/Error404';
import HomePage from '../components/HomePage';
import reducers from '../reducers/reducers';

import '../sass/Routes.css';

export default class Routes extends Component {
    constructor() {
        super();
        
        const store = createStore(reducers);

        this.state = {
            store
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
                        <Route exact path="/test" component={App}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/*" component={Error404}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
};
