import React from "react";
import "../Styles/SongCard.css";

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} />
      <h4>{song.title}</h4>
      <p>{song.artist}</p>
    </div>
  );
};

export default SongCard;
