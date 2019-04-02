import axios from "axios";
import { history } from "../utils";
import { github } from "../config";

const { exchangeUrl } = github;

export default class Auth {
  static TOKEN_KEY = "token";

  async login(code) {
    try {
      const { data } = await axios.get(`${exchangeUrl}${code}`);
      localStorage.setItem(Auth.TOKEN_KEY, data.token);
      history.replace("/home");
    } catch (error) {
      console.error(error);
    }
  }

  logout() {
    localStorage.clear();
    history.replace("/");
    window.location.reload();
  }

  getAccessToken() {
    return localStorage.getItem(Auth.TOKEN_KEY);
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem(Auth.TOKEN_KEY));
  }
}
