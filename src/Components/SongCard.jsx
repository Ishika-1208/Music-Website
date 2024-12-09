// import React from "react";
// import "../Styles/SongCard.css";

// const SongCard = ({ song }) => {
//   return (
//     <div className="song-card">
//       <img src={song.image} alt={song.title} />
//       <h4>{song.title}</h4>
//       <p>{song.artist}</p>
//     </div>
//   );
// };

// export default SongCard;



// import React from "react";
// import "../Styles/SongCard.css";

// const SongCard = ({ song }) => (
//   <div className="song-card">
//     <img src={song.image} alt={song.title} className="song-image" />
//     <div className="song-details">
//       <h3 className="song-title">{song.title}</h3>
//       <p className="song-artist">Artist: {song.artist}</p>
//     </div>
//   </div>
// );

// export default SongCard;



import React from "react";
import "../Styles/SongCard.css";

const SongCard = ({ song }) => (
  <div className="song-card">
    <img src={song.image} alt={song.title} className="song-image" />
    <div className="song-details">
      <h3 className="song-title">{song.title}</h3>
      <p className="song-artist">Artist: {song.artist}</p>
      <p className="song-duration">Duration: {song.duration}</p>
    </div>
  </div>
);

export default SongCard;

