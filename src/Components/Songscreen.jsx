import React from 'react'
import PlayerControls from './PlayerControls'
import Sidebar from "./Sidebar";
import Header from "./Header";

const Songscreen = () => {
  return (
    <div className="Songscreen">
      <Header />
      <div className="main-content">
        <Sidebar />
        <PlayerControls />
      </div>
    </div>
  )
}

export default Songscreen