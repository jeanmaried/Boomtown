import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Items from '../containers/Items';
import Login from '../containers/Login';
// import Share from '../containers/Share';
import Profile from '../containers/Profile';
// import NotFound from '../containers/NotFound';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Items} />
                <Route exact path="/profile/:userid" component={Profile} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;