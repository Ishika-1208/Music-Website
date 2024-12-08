import React from "react";
import { FaHome, FaList, FaMusic } from "react-icons/fa";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-item">
        <FaHome /> Home
      </div>
      <div className="menu-item">
        <FaList /> Browse
      </div>
      <div className="menu-item">
        <FaMusic /> Playlists
      </div>
    </div>
  );
};

export default Sidebar;
