import React from "react";
import { Contacts } from "./data.js";
import ContactList from "./ContactList.jsx";

const ContactApp = () => {
  const contacts = Contacts();

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
