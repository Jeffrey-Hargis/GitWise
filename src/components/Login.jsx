import React, { Component } from 'react'; 
import GitHubLogin from 'react-github-login';
import '../../src/App.css'


// TODO: Jeff, replace with ur own
// TODO: put in a config file? idk. its just one thing
const clientId = "6ef3a0bce89af9b367d4";

// TODO: Jeff, this will change once you actually deploy it
// TODO: I'm not sure if you are actually required to set it (but probably, but try without it anyway)
const redirectUri = "http://localhost:3000/";

class Login extends Component {
    onSuccess = async ({code}) => {
        const { auth } = this.props;
        await auth.login(code);
    };

    onFailure = response => console.error(response);

    render() {
        // TODO: Jeff, you need to add more scopes to the scope property here
        // TODO: probably, that is, if you want to be able to do more (like star shit)
        return (
            <GitHubLogin clientId={clientId}
                redirectUri={redirectUri}
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}/>
        )
    }
    

}

export default Login;