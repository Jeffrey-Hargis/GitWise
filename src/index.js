import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {
    ApolloProvider
} from 'react-apollo';
import {
    githubClient
} from './services'
import Auth from './services/auth'
import {
    history
} from './utils'

const auth = new Auth();

ReactDOM.render( <
    ApolloProvider client = {
        githubClient(auth)
    } >
    <
    Router history = {
        history
    } >
    <
    App auth = {
        auth
    }
    /> < /
    Router > <
    /ApolloProvider>, 
    document.getElementById('root'));