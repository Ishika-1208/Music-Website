
import React, { useState } from "react";
import "../Styles/Header.css";
import Search from "../Images/Search.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [query, setQuery] = useState(""); // Search query
  const [searchResults, setSearchResults] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle search functionality
  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://task-4-0pfy.onrender.com/songs/search", {
        params: { query }, // Pass the search term dynamically
      });
      setSearchResults(response.data.results || []);
    } catch (err) {
      console.error("Error fetching search results:", err.message);
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="header">
      {/* Search Bar */}
      <div className="search-container">
        <input
          className="searchbar"
          type="search"
          placeholder="Search for song (title or artist)"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        />
        <button className="btn-outline-success" onClick={handleSearch}>
          <img className="search-img" src={Search} alt="Search" />
        </button>
      </div>

      {/* Signup and Login Links */}
      <Link to="/signup">
        <button className="signup-btn">Sign up</button>
      </Link>
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>

      {/* Search Results */}
      <div className="search-results">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {searchResults.length > 0 ? (
          <ul className="results-list">
            {searchResults.map((result, index) => (
              <li key={index} className="result-item">
                <img src={result.image} alt={result.title} className="result-image" />
                <div className="result-details">
                  <h3 className="result-title">{result.title}</h3>
                  <p className="result-artist">Artist: {result.artist}</p>
                  <p className="result-duration">Duration: {result.duration}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          query && !loading && <p>No results found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default Header;

