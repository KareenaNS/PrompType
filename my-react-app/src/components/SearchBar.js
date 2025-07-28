import { useState } from "react";
import "../App.css";
import {useNavigate} from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      navigate(`/results?q=${encodeURIComponent(query)}`);
    }
  };
  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="e.g., Responsive login form with remember me"
        className="search-bar"
      />
      <button type="submit" className="search-button">
        <img src={`${process.env.PUBLIC_URL}/go.gif`} className="search-arrow" alt="slogan" />
      </button>
    </form>
  );
}
export default SearchBar;