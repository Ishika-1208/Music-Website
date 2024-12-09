// import React from "react";
// import SongCard from "./SongCard";
// import "../Styles/PopularSongs.css";

// const songs = [
//   { id: 1, title: "Ve Kamleya", artist: "Arijit Singh", image: "/images/song1.jpg" },
//   { id: 2, title: "O Saathi", artist: "Atif Aslam", image: "/images/song2.jpg" },
//   { id: 3, title: "Jatt Mehka", artist: "Yo Yo Honey Singh", image: "/images/song3.jpg" },
//   { id: 4, title: "Levitating", artist: "Dua Lipa", image: "/images/song4.jpg" },
// ];

// const PopularSongs = () => {
//   return (
//     <div className="popular-songs">
//       <h2>Popular Songs</h2>
//       <div className="song-list">
//         {songs.map((song) => (
//           <SongCard key={song.id} song={song} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularSongs;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SongCard from "./SongCard";
// import "../Styles/PopularSongs.css";

// const PopularSongs = () => {
//   const [songs, setSongs] = useState([]); // State to store popular songs
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch songs from API on component mount
//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get("http://task-4-0pfy.onrender.com/songs");
        
//         setSongs(response.data.results || []); // Assuming "results" contains the song list
//       } catch (err) {
//         console.error("Error fetching popular songs:", err);
//         setError("Failed to fetch popular songs. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSongs();
//   }, []);

//   return (
//     <div className="popular-songs">
//       <h2>Popular Songs</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}
//       <div className="song-list">
//         {songs.length > 0 ? (
//           songs.map((song) => <SongCard key={song.id} song={song} />)
//         ) : (
//           !loading && <p>No songs available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopularSongs;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SongCard from "./SongCard"; // Make sure SongCard is correctly defined
// import "../Styles/PopularSongs.css";

// const PopularSongs = () => {
//   const [songs, setSongs] = useState([]); // State to store popular songs
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch songs from API on component mount
//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get("http://task-4-0pfy.onrender.com/songs");
        
//         // Log the response data to the console for debugging
//         console.log("Fetched songs data:", response.data);

//         // Assuming "results" contains the song list
//         setSongs(response.data.results || []);
//       } catch (err) {
//         console.error("Error fetching popular songs:", err);
//         setError("Failed to fetch popular songs. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSongs();
//   }, []);

//   return (
//     <div className="popular-songs">
//       <h2>Popular Songs</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}
//       <div className="song-list">
//         {songs.length > 0 ? (
//           songs.map((song) => <SongCard key={song.id} song={song} />) // Pass the song as a prop
//         ) : (
//           !loading && <p>No songs available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopularSongs;




import React, { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "./SongCard"; // Make sure SongCard is correctly defined
import "../Styles/PopularSongs.css";

const PopularSongs = () => {
  const [songs, setSongs] = useState([]); // State to store popular songs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch songs from API on component mount
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://task-4-0pfy.onrender.com/songs", {
          withCredentials: true, // Allow credentials (cookies, etc.)
        });
        
        // Log the response data to the console for debugging
        console.log("Fetched songs data:", response.data);

        // Assuming "results" contains the song list
        setSongs(response.data.results || []);
      } catch (err) {
        console.error("Error fetching popular songs:", err);
        setError("Failed to fetch popular songs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="popular-songs">
      <h2>Popular Songs</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="song-list">
        {songs.length > 0 ? (
          songs.map((song) => <SongCard key={song.id} song={song} />) // Pass the song as a prop
        ) : (
          !loading && <p>No songs available.</p>
        )}
      </div>
    </div>
  );
};

export default PopularSongs;