import PropTypes from "prop-types";
import React from "react";

const ContactItemImage = ({ imgURL }) => {
  return (
    <div className="contact-item__image">
      <img src={`/images/${imgURL}`} alt="Contact Avatar" />
    </div>
  );
};

ContactItemImage.propTypes = {
  imgURL: PropTypes.string.isRequired,
};

export default ContactItemImage;
