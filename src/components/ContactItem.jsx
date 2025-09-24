import React from "react";
import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton.jsx";
import PropTypes from "prop-types";

const ContactItem = ({ imgURL, name, tag, id, onDelete }) => {
  return (
    <div className="contact-item">
      <ContactItemImage imgURL={imgURL} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};

ContactItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
