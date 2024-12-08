import React from "react";
import "../Styles/Header.css";
import Search from '../Images/Search.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <input className="searchbar" type="search" placeholder="Search for song" />
      <button className="btn-outline-success" type="submit"><img className="search-img"src={Search} alt="Search" /></button>
      <Link to="/signup"><button className="signup">Sign up</button></Link>
      <button className="login">Login</button>
    </div>
  );
};

export default Header;
