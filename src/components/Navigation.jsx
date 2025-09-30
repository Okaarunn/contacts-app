import React from "react";
import { FiHome, FiPlusCircle, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <h2>{name}</h2>
        </li>
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FiPlusCircle />
          </Link>
        </li>

        <li>
          <button onClick={logout}>
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}
Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
};
