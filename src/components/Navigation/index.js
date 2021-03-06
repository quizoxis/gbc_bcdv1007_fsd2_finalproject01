import React from 'react';
import { Link } from 'react-router-dom';
import UserLogoutButton from '../UserLogout';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.WELCOME}>Welcome</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
            <UserLogoutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.WELCOME}>Welcome</Link>
        </li>
        <li>
            <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
            <Link to={ROUTES.USER_LOGIN}>Login</Link>
        </li>
    </ul>
);

export default Navigation;

