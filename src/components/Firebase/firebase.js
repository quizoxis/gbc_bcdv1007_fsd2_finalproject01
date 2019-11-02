/*
 firebase.js - Firebase Config

 */
import app from 'firebase/app';

// Import Firebase Auth API
import 'firebase/auth';

/******************************************************************************
 *
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string,
 * appId: string, projectId: string, databaseURL: string, authDomain: string}}
 *
 ******************************************************************************/
const config = {
    apiKey: "AIzaSyArHNMevZwovdvfjofE0naX9YDd2xkEOmE",
    authDomain: "gbcbcdv1007finalproject.firebaseapp.com",
    databaseURL: "https://gbcbcdv1007finalproject.firebaseio.com",
    projectId: "gbcbcdv1007finalproject",
    storageBucket: "gbcbcdv1007finalproject.appspot.com",
    messagingSenderId: "858384222928",
    appId: "1:858384222928:web:af1bd3ee852c47debb6cd5"
};

/******************************************************************************
 * Firebase Class
 * - provides methods mapped to firebase apis
 * - All application components must use this class methods
 *   to interact with Firebase.
 *
 ******************************************************************************/
class Firebase {

    // Constructor
    constructor() {
        app.initializeApp(config);

        // Instantiate Authentication Package
        this.auth = app.auth();
    }

    /*******************************************
        Methods - Authentication apis
     *******************************************/

    // New User Registration
    doRegisterUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    // User Login
    doUserLoginWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // User Logout
    doUserLogout = () => this.auth.signOut();


    // User Password Management
    // Password Reset
    doUserPasswordResetWithEmail = email => this.auth.sendPasswordResetEmail(email);

    // Password Update
    doUserPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);


}

export default Firebase;
