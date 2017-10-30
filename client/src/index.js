import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import Items from './containers/Items';
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Profile from './containers/Profile';
// import Share from '../containers/Share';
// import NotFound from '../containers/NotFound';

const Boomtown = () => (
    <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
            <ApolloProvider client={client} store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Layout>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/" component={Items} />
                            <Route path="/profile/:userid" component={Profile} />
                        </Layout>
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                    </ConnectedRouter>
            </ApolloProvider>
        </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();