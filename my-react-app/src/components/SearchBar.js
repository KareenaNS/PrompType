import { useState } from "react";
import React from "react";
import "../App.css";

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', query);
  };
  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-bar"
      />
      <button type="submit" className="search-button">
        <img src="/go.gif" className="search-arrow" alt="slogan" />
      </button>
    </form>
  );
}
export default SearchBar;