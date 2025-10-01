import React from "react";
import { LocaleConsumer } from "../context/LocaleContext";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <input
            type="text"
            className="search-bar"
            placeholder={
              locale === "id" ? "Cari berdasarkan nama" : "Search by name"
            }
            value={keyword}
            onChange={(e) => keywordChange(e.target.value)}
          />
        );
      }}
    </LocaleConsumer>
  );
}

SearchBar.prototype = {
  keyword: PropTypes.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
