import React from 'react'
import Sidebar from "./Sidebar";
import Header2 from "./Header2";
import UserDetails from "../Components/UserDetails.jsx";
// import UserDetails from "./SubFolder/UserDetails";

import "../Styles/UserProfile.css";

const UserProfile = () => {
  return (
    <div className="home">
      <Header2 />
      <div className="main-content">
        <Sidebar />
        <UserDetails />
      </div>
    </div>
  )
}

export default UserProfile;