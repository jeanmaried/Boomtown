import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Items from './containers/Items';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Routes from './Routes';
import Profile from './containers/Profile';
// import Share from '../containers/Share';
// import NotFound from '../containers/NotFound';

const Boomtown = () => (
    <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Layout>
                        <Route exact path="/" component={Items} />
                        <Route path="/profile/:userid" component={Profile} />
                    </Layout>
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </div>
        </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();