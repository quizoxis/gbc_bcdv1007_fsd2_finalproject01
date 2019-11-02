import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { UserRegistrationLink } from '../UserRegistration';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


const UserLoginPage = () => (
    <div>
        <h1>User Login</h1>
        <UserLoginForm />
        <UserRegistrationLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
/******************************************************************************
 * UserLoginFormBase
 *
 *****************************************************************************/
class UserLoginFormBase extends Component {


    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    // User Login Form Submit Event
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doUserLoginWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    // User Login Form Change:onChange
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // User Login Render method to deliver the form
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}
const UserLoginForm = compose(withRouter, withFirebase,)(UserLoginFormBase);

export default UserLoginPage;
export { UserLoginForm };
