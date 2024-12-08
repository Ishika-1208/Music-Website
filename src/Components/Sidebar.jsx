import React from "react";
// import { FaHome, FaList, FaMusic } from "react-icons/fa";
import "../Styles/Sidebar.css";
import Group from '../Images/Group.png'
import Group15 from '../Images/Group15.png'
import Vector from '../Images/Vector.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <div className="menu-item">
        <FaHome /> Home
      </div>
      <div className="menu-item">
        <FaList /> Browse
      </div>
      <div className="menu-item">
        <FaMusic /> Playlists
      </div> */}

        <ul>
       <li> <button className="menu-item"><img className='icons-display' src={Group} alt="home" />Home</button></li>
       <li> <button className="menu-item"><img className='icons-display' src={Group15} alt="browse" />Browse</button></li>
       <li> <button className="menu-item"><img className='icons-display' src={Vector} alt="playlists" />Playlists</button></li>
        </ul>

    </div>
  );
};

export default Sidebar;
