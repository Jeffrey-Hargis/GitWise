import app from "firebase/app";
import "firebase/database";
import { firebase } from "../config";

class Firebase {
  constructor() {
    app.initializeApp(firebase);
    this.db = app.database();
  }

  topSearches = () => this.db.ref("topSearches");
}

const client = new Firebase();

export default client;
