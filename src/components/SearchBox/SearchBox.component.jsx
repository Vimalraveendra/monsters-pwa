import React from "react";
import "./SearchBox.styles.css";

const SearchBox = ({ onSearchChange, searchText, placeholder, className }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      value={searchText}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;