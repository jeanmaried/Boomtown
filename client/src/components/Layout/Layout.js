import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar/';

import './styles.css';

const Layout = ({ children, location }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {location.pathname !== '/login' ?  <HeaderBar /> : null}
        </div>
        <div className="appContent">
            {children}
        </div>
        <p>© 2017 Boomtown Corp. All Rights Reserved</p>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
