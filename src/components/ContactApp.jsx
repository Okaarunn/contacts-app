import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { LocaleProvider } from "../context/LocaleContext";
import { useState } from "react";

function ContactApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  // toggle locale method
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      // set locale in local storage
      localStorage.setItem("locale", newLocale);

      return newLocale;
    });
  };

  // login success
  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  // logout
  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  // get user login

  async function fetchUser() {
    const { data } = await getUserLogged();
    setAuthedUser(data);
    setInitializing(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const localeContext = {
    locale,
    toggleLocale,
  };

  if (initializing) {
    return null;
  }

  return (
    <LocaleProvider value={localeContext}>
      {authedUser === null ? (
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>Aplikasi Kontak</h1>
          </header>

          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              ></Route>
              <Route path="register" element={<RegisterPage />}></Route>
            </Routes>
          </main>
        </div>
      ) : (
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>
              {localeContext.locale === "id"
                ? "Aplikasi Kontak"
                : "Contacts App"}
            </h1>
            <Navigation logout={onLogout} name={authedUser.name} />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
            </Routes>
          </main>
        </div>
      )}
    </LocaleProvider>
  );
}

export default ContactApp;
