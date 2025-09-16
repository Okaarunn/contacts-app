import React from "react";
import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody";

const ContactItem = ({ imgURL, name, tag }) => {
  return (
    <div>
      <ContactItemImage imgURL={imgURL} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
};

export default ContactItem;
