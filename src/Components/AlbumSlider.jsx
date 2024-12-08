import React from "react";
import "../Styles/AlbumSlider.css";

const albums = [
  { id: 1, image: "/images/album1.jpg" },
  { id: 2, image: "/images/album2.jpg" },
  { id: 3, image: "/images/album3.jpg" },
];

const AlbumSlider = () => {
  return (
    <div className="album-slider">
      {albums.map((album) => (
        <div key={album.id} className="album-card">
          <img src={album.image} alt="Album Cover" />
        </div>
      ))}
    </div>
  );
};

export default AlbumSlider;
