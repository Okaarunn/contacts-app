import PropTypes from "prop-types";
import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      <FaRegTrashAlt />
    </button>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
