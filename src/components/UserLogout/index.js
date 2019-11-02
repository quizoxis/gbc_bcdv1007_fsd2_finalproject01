import React from 'react';
import { withFirebase } from '../Firebase';

const UserLogoutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doUserLogout}>
        Logout
    </button>
);

export default withFirebase(UserLogoutButton);

