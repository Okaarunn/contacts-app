import React from "react";
import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton.jsx";

const ContactItem = ({ imgURL, name, tag, id, onDelete }) => {
  return (
    <div className="contact-item">
      <ContactItemImage imgURL={imgURL} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};

export default ContactItem;
