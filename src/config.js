export const firebase = {
  apiKey: "AIzaSyDeQtk5Gq6u7rv5f1bOifnM24fiCXVrDhY",
  authDomain: "gitwise.firebaseapp.com",
  databaseURL: "https://gitwise.firebaseio.com",
  projectId: "gitwise",
  storageBucket: "gitwise.appspot.com",
  messagingSenderId: "901736002764"
};

export const github = {
  exchangeUrl:
    process.env.REACT_APP_GITHUB_EXCHANGE_URL ||
    "https://gitwise-exchange-gitwise.herokuapp.com/authenticate/",
  clientId: process.env.REACT_APP_GITHUB_CLIENT_ID || "a57a1c87aad672437c55",
  redirectUri: process.env.REACT_APP_CALLBACK || "http://localhost:3000/",
  scope: "user:email public_repo gist"
};
