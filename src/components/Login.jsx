import React, { Component } from 'react'; 
import GitHubLogin from 'react-github-login';
import '../../src/App.css';
import logout from '../services/auth.js';




// TODO: put in a config file? idk. its just one thing
const clientId = "6ef3a0bce89af9b367d4";

// TODO: Will change once I actually deploy it
const redirectUri = "http://localhost:3000/";

class Login extends Component {
    onSuccess = async ({code}) => {
        const { auth } = this.props;
        await auth.login(code);
    };

    onFailure = response => console.error(response);

    render() {
        // TODO: Need to add more scopes to the scope property here
        // TODO: probably, that is, if I want to be able to do more (like star shit)
        return (
            <div>
            <GitHubLogin clientId={clientId}
                redirectUri={redirectUri}
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}/>
            </div>
        )
    }
}

export default Login;