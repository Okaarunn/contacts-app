import React from "react";
import { getContacts } from "./data.js";
import ContactList from "./ContactList.jsx";
import ContactInput from "./ContactInput.jsx";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
    };

    // set bind event handler
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  // add contact function
  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imgURL: "default.jpg",
          },
        ],
      };
    });
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
        <ContactInput addContact={this.onAddContactHandler} />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
