import axios from 'axios'
import { history } from '../utils'

// TODO: Jeff, replace this.
// TODO: follow the heroku directions https://github.com/prose/gatekeeper here
// TODO: with your own github oauth shit
const exchangeUrl = "https://jeffs-stupid-thing.herokuapp.com/authenticate/";

export default class Auth {
    static TOKEN_KEY = "token";

    async login(code) {
        try {
            const { data } = await axios.get(`${exchangeUrl}${code}`);
            console.log(code);
            localStorage.setItem(Auth.TOKEN_KEY, data.token);
            history.replace('/home');
        } catch (error) {
            console.error(error);
        }
    }

    logout() {
        localStorage.clear();
        history.replace('/');
    }

    getAccessToken() {
        return localStorage.getItem(Auth.TOKEN_KEY)
    }

    isAuthenticated() {
        return Boolean(localStorage.getItem(Auth.TOKEN_KEY));
    }
}