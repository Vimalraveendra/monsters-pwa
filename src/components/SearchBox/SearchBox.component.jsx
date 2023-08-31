import React from "react";
import "./SearchBox.styles.css";

const SearchBox = ({  handleOnChangeText, searchText, placeholder, className }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      value={searchText}
      onChange={ handleOnChangeText}
    />
  );
};

export default SearchBox;