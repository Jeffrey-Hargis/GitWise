import app from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyDeQtk5Gq6u7rv5f1bOifnM24fiCXVrDhY",
    authDomain: "gitwise.firebaseapp.com",
    databaseURL: "https://gitwise.firebaseio.com",
    projectId: "gitwise",
    storageBucket: "gitwise.appspot.com",
    messagingSenderId: "901736002764"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
    }

    topSearches = () => this.db.ref('topSearches');
}

const client = new Firebase();

export default client;