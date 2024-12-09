// import React from "react";
// import "../Styles/AlbumSlider.css";

// const albums = [
//   { id: 1, image: "/images/album1.jpg" },
//   { id: 2, image: "/images/album2.jpg" },
//   { id: 3, image: "/images/album3.jpg" },
// ];

// const AlbumSlider = () => {
//   return (
//     <div className="album-slider">
//       {albums.map((album) => (
//         <div key={album.id} className="album-card">
//           <img src={album.image} alt="Album Cover" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AlbumSlider;



// import React, { useEffect, useState } from "react";
// import "../Styles/AlbumSlider.css";
// import axios from "axios";

// const AlbumSlider = () => {
//   const [songs, setSongs] = useState([]);

//   // Fetch songs from API
//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get("http://task-4-0pfy.onrender.com/songs");
//         // Use only the first 5 songs
//         setSongs(response.data.results.slice(0, 5));
//       } catch (error) {
//         console.error("Error fetching songs:", error);
//       }
//     };

//     fetchSongs();
//   }, []);

//   return (
//     <div className="album-slider">
//       {songs.map((song) => (
//         <div key={song._id} className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <img src={song.image} alt={song.title} className="album-image" />
//             </div>
//             <div className="flip-card-back">
//               <h3>{song.title}</h3>
//               <p>{song.artist}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AlbumSlider;



// import React, { useEffect, useState } from "react";
// import "../Styles/AlbumSlider.css";
// import axios from "axios";

// const AlbumSlider = () => {
//   const [songs, setSongs] = useState([]);

//   // Fetch songs from API
//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get("http://task-4-0pfy.onrender.com/songs");
//         // Use only the first 5 songs
//         setSongs(response.data.slice(0, 5));
//       } catch (error) {
//         console.error("Error fetching songs:", error);
//       }
//     };

//     fetchSongs();
//   }, []);

//   return (
//     <div className="album-slider">
//       {songs.map((song) => (
//         <div key={song._id} className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <img src={song.image} alt={song.title} className="album-image" />
//             </div>
//             <div className="flip-card-back">
//               <h3>{song.title}</h3>
//               <p>Artist: {song.artist}</p>
//               <p>Duration: {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, "0")} mins</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AlbumSlider;



import React, { useEffect, useState } from "react";
import "../Styles/AlbumSlider.css";
import axios from "axios";

const AlbumSlider = () => {
  const [songs, setSongs] = useState([]);

  // Fetch songs from API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://task-4-0pfy.onrender.com/songs");
        // Use only the first 5 songs
        setSongs(response.data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="album-slider">
      {songs.map((song) => (
        <div key={song._id} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={song.image} alt={song.title} className="album-image" />
            </div>
            <div className="flip-card-back">
              <h3>{song.title}</h3>
              <p>Artist: {song.artist}</p>
              <p>Duration: {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, "0")} mins</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumSlider;

