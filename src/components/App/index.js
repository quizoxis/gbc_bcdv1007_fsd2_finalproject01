import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

// Import Route To Component Mappings
import Navigation from '../Navigation';
import WelcomePage from '../Welcome';
import HomePage from '../Home';
import UserRegistrationPage from '../UserRegistration';
import UserLoginPage from '../UserLogin';
import AccountPage from '../Account';
import AboutPage from "../About";

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr/>
            <Route exact path={ROUTES.WELCOME} component={WelcomePage} />
            <Route path={ROUTES.USER_REGISTRATION} component={UserRegistrationPage} />
            <Route path={ROUTES.USER_LOGIN} component={UserLoginPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ABOUT} component={AboutPage} />
        </div>
    </Router>
);

export default withAuthentication(App);

