// import React from "react";
// import "../Styles/Sidebar.css";
// import Group from '../Images/Group.png'
// import Group15 from '../Images/Group15.png'
// import Vector from '../Images/Vector.png'

// const Sidebar = () => {
//   return (
//     <div className="sidebar">

//         <ul>
//        <li> <button className="menu-item"><img className='icons-display' src={Group} alt="home" />Home</button></li>
//        <li> <button className="menu-item"><img className='icons-display' src={Group15} alt="browse" />Browse</button></li>
//        <li> <button className="menu-item"><img className='icons-display' src={Vector} alt="playlists" />Playlists</button></li>
//         </ul>

//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../Styles/Sidebar.css";
import Group from "../Images/Group.png";
import Group15 from "../Images/Group15.png";
import Vector from "../Images/Vector.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className="menu-item">
            <img className="icons-display" src={Group} alt="home" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/browse" className="menu-item">
            <img className="icons-display" src={Group15} alt="browse" />
            Browse
          </Link>
        </li>
        <li>
          <Link to="/playlists" className="menu-item">
            <img className="icons-display" src={Vector} alt="playlists" />
            Playlists
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
