// import React from "react";
// import "../Styles/Header.css";
// import Search from '../Images/Search.png'
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="header">
//       <input className="searchbar" type="search" placeholder="Search for song" />
//       <button className="btn-outline-success" type="submit"><img className="search-img"src={Search} alt="Search" /></button>
//       <Link to="/signup"><button className="signup-btn">Sign up</button></Link>
//       <Link to="/login"><button className="login-btn">Login</button></Link>
//     </div>
//   );
// };

//  export default Header;

// import React, { useState } from "react";
// import "../Styles/Header.css";
// import Search from '../Images/Search.png';
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const Header = () => {
//   const [query, setQuery] = useState(""); // Search query
//   const [results, setResults] = useState([]); // Search results
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Handle search input change
//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   // Perform API search
//   const handleSearch = async () => {
//     if (!query) {
//       alert("Please enter a search term.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Replace `YOUR_API_ENDPOINT` with your actual search API endpoint
//       const response = await axios.get("https://task-4-0pfy.onrender.com/song/search?query=(title/artist)", {
//         params: { query }, // Pass the query as a parameter
//       });
//       setResults(response.data.results || []); // Assuming API returns a "results" array
//     } catch (err) {
//       setError("Failed to fetch search results. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="header">
//       {/* Search Bar */}
//       <input
//         className="searchbar"
//         type="search"
//         placeholder="Search for a song"
//         value={query}
//         onChange={handleInputChange}
//       />
//       <button className="btn-outline-success" onClick={handleSearch}>
//         <img className="search-img" src={Search} alt="Search" />
//       </button>

//       {/* Links for Signup and Login */}
//       <Link to="/signup"><button className="signup-btn">Sign up</button></Link>
//       <Link to="/login"><button className="login-btn">Login</button></Link>

//       {/* Search Results */}
//       <div className="search-results">
//         {loading && <p>Loading...</p>}
//         {error && <p className="error">{error}</p>}
//         {results.length > 0 && (
//           <ul className="results-list">
//             {results.map((result, index) => (
//               <li key={index} className="result-item">
//                 <img src={result.image} alt={result.title} className="result-image" />
//                 <div className="result-details">
//                   <h3 className="result-title">{result.title}</h3>
//                   <p className="result-artist">Artist: {result.artist}</p>
//                   <p className="result-duration">Duration: {result.duration}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import "../Styles/Header.css";
// import Search from '../Images/Search.png';
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const Header = () => {
//   const [query, setQuery] = useState(""); // Search query
//   const [searchResults, setSearchResults] = useState([]); // Search results
//   const [latestSongs, setLatestSongs] = useState([]); // Latest songs
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch latest songs on component mount
//   useEffect(() => {
//     const fetchLatestSongs = async () => {
//       try {
//         const response = await axios.get("https://task-4-0pfy.onrender.com/songs"); // Latest songs API
//         setLatestSongs(response.data.results || []); // Assuming API returns a "results" array
//       } catch (err) {
//         console.error("Error fetching latest songs:", err);
//         setError("Failed to load latest songs.");
//       }
//     };

//     fetchLatestSongs();
//   }, []);

//   // Handle search input change
//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   // Perform API search
//   const handleSearch = async () => {
//     if (!query.trim()) {
//       alert("Please enter a search term.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // const response = await axios.get("https://task-4-0pfy.onrender.com/song/search", {
//          const response = await axios.get("https://task-4-0pfy.onrender.com/songs/search", {

//         params: { query }, // Pass the search query dynamically
//       });

//       setSearchResults(response.data.results || []);
//     } catch (err) {
//       console.error("Error fetching search results:", err);
//       setError("Failed to fetch search results. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="header">
//       {/* Search Bar */}
//       <div className="search-container">
//         <input
//           className="searchbar"
//           type="search"
//           placeholder="Search by title or artist"
//           value={query}
//           onChange={handleInputChange}
//         />
//         <button className="btn-outline-success" onClick={handleSearch}>
//           <img className="search-img" src={Search} alt="Search" />
//         </button>
//       </div>

//       {/* Links for Signup and Login */}
//       <div className="auth-buttons">
//         <Link to="/signup">
//           <button className="signup-btn">Sign up</button>
//         </Link>
//         <Link to="/login">
//           <button className="login-btn">Login</button>
//         </Link>
//       </div>

//       {/* Search Results */}
//       <div className="search-results">
//         <h2>Search Results</h2>
//         {loading && <p>Loading...</p>}
//         {error && <p className="error">{error}</p>}
//         {searchResults.length > 0 ? (
//           <ul className="results-list">
//             {searchResults.map((result) => (
//               <li key={result.id} className="result-item">
//                 <img src={result.image} alt={result.title} className="result-image" />
//                 <div className="result-details">
//                   <h3 className="result-title">{result.title}</h3>
//                   <p className="result-artist">Artist: {result.artist}</p>
//                   <p className="result-duration">Duration: {result.duration}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           query && !loading && <p>No results found for "{query}".</p>
//         )}
//       </div>

//       {/* Latest Songs */}
//       <div className="latest-songs">
//         <h2>Latest Songs</h2>
//         {latestSongs.length > 0 ? (
//           <ul className="results-list">
//             {latestSongs.map((song) => (
//               <li key={song.id} className="result-item">
//                 <img src={song.image} alt={song.title} className="result-image" />
//                 <div className="result-details">
//                   <h3 className="result-title">{song.title}</h3>
//                   <p className="result-artist">Artist: {song.artist}</p>
//                   <p className="result-duration">Duration: {song.duration}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No latest songs available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;



// import React, { useState } from "react";
// import "../Styles/Header.css";
// import Search from "../Images/Search.png";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import logo from '../Images/logo.png'

// const Header = () => {
//   const [query, setQuery] = useState(""); // Search query
//   const [searchResults, setSearchResults] = useState([]); // Search results
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Handle search functionality
//   const handleSearch = async () => {
//     if (!query.trim()) {
//       alert("Please enter a search term.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get("https://task-4-0pfy.onrender.com/songs/search", {
//         params: { query }, // Pass the search term dynamically
//       });
//       setSearchResults(response.data.results || []);
//     } catch (err) {
//       console.error("Error fetching search results:", err.message);
//       setError("Failed to fetch search results. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="header">
//       {/* Search Bar */}
//       <div className="search-container">
//         <img src={logo} alt="logo" className="logo"/>
//         <input
//           className="searchbar"
//           type="search"
//           placeholder="Search for song (title or artist)"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)} // Update query state on input change
//         />
//         <button className="btn-outline-success" onClick={handleSearch}>
//           <img className="search-img" src={Search} alt="Search" />
//         </button>
//       </div>

//       {/* Signup and Login Links */}
//       <Link to="/signup">
//         <button className="signup-btn">Sign up</button>
//       </Link>
//       <Link to="/login">
//         <button className="login-btn">Login</button>
//       </Link>

//       {/* Search Results */}
//       <div className="search-results">
//         {loading && <p>Loading...</p>}
//         {error && <p className="error">{error}</p>}
//         {searchResults.length > 0 ? (
//           <ul className="results-list">
//             {searchResults.map((result, index) => (
//               <li key={index} className="result-item">
//                 <img src={result.image} alt={result.title} className="result-image" />
//                 <div className="result-details">
//                   <h3 className="result-title">{result.title}</h3>
//                   <p className="result-artist">Artist: {result.artist}</p>
//                   <p className="result-duration">Duration: {result.duration}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           query && !loading && <p>No results found for "{query}".</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;




import React, { useState } from "react";
import "../Styles/Header.css";
import Search from "../Images/Search.png";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../Images/logo.png";

const SearchSongs = () => {
  const [query, setQuery] = useState(""); // Search query state
  const [searchResults, setSearchResults] = useState([]); // Search results state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSearch = async () => {
    console.log("Searching...");

    // Validate the input query
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Send a GET request to the API with the search query as a parameter
      const response = await axios.get("https://task-4-0pfy.onrender.com/songs/search", {
        params: { query },
      });
      console.log(response.data);
      
      console.log(response.data.results);
      
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
      <img src={logo} alt="logo" className="logo" />
      <div className="search-container">
        <input
          className="searchbar"
          type="search"
          placeholder="Search for song (title or artist)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn-outline-success" onClick={handleSearch}>
          <img className="search-img" src={Search} alt="Search" />
        </button>
      </div>
      <Link to="/signup">
        <button className="signup-btn">Sign up</button>
      </Link>
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
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

export default SearchSongs;


