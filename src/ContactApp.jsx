import React from "react";
import { Contacts } from "./data.js";
import ContactList from "./ContactList.jsx";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: Contacts(),
    };

    // set ondelete
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  // ondelete method

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
