import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { githubClient } from './services'



ReactDOM.render(
    <ApolloProvider client={githubClient}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>, 
document.getElementById('root'));
