import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/App';
import LoginPage from '../components/LoginPage';
import Error404 from '../components/errors/Error404';

import '../sass/Routes.css';


const Routes = (props) => (
    <BrowserRouter className="router">
        <Switch>
            <Route exact path="/test" component={App}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/*" component={Error404}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
