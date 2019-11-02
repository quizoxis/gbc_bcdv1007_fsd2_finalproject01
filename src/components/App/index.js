import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

// Import Route To Component Mappings
import Navigation from '../Navigation';
import WelcomePage from '../Welcome';
import HomePage from '../Home';
import UserRegistrationPage from '../UserRegistration';
import UserLoginPage from '../UserLogin';
import AccountPage from '../Account';


import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import AboutPage from "../About";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser} />
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
    }

}

export default withFirebase(App);

