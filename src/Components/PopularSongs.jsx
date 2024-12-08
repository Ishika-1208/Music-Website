import React from "react";
import SongCard from "./SongCard";
import "../Styles/PopularSongs.css";

const songs = [
  { id: 1, title: "Ve Kamleya", artist: "Arijit Singh", image: "/images/song1.jpg" },
  { id: 2, title: "O Saathi", artist: "Atif Aslam", image: "/images/song2.jpg" },
  { id: 3, title: "Jatt Mehka", artist: "Yo Yo Honey Singh", image: "/images/song3.jpg" },
  { id: 4, title: "Levitating", artist: "Dua Lipa", image: "/images/song4.jpg" },
];

const PopularSongs = () => {
  return (
    <div className="popular-songs">
      <h2>Popular Songs</h2>
      <div className="song-list">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default PopularSongs;
