import React from 'react'
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import UserDetails from "./Userdetails";

const ProfilePage = () => {
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

export default ProfilePage