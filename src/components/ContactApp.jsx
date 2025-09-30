import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/api";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    // bind
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  // login success method
  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  // logout method

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    // if logout, delete value access token
    putAccessToken("");
  }

  // mounted get user login
  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  render() {
    // if user authen navigate to login page

    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>Aplikasi Kontak</h1>
          </header>

          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={this.onLoginSuccess} />}
              ></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <div className="contact-app">
        <header className="contact-app__header">
          <h1>Aplikasi Kontak</h1>
          <Navigation
            logout={this.onLogout}
            name={this.state.authedUser.name}
          />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default ContactApp;
