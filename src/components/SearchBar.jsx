import React from "react";

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      onChange={(e) => keywordChange(event.target.value)}
    />
  );
}

export default SearchBar;
