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




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SongCard from "./SongCard"; 
// import "../Styles/PopularSongs.css";

// const PopularSongs = () => {
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get("http://task-4-0pfy.onrender.com/songs");
//         console.log("Fetched songs data:", response.data);

//         // Adjust if response structure differs
//         setSongs(response.data.results || []);
//       } catch (err) {
//         console.error("Error fetching popular songs:", err.response || err.message || err);
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
//           songs.map((song, index) => (
//             <SongCard key={song.id || index} song={song} />
//           ))
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
//         const response = await axios.get("/songs")
//         //   headers: {
//         //     "Content-Type": "application/json",
//         //   },
//         //   withCredentials: false, // Allow credentials (cookies, etc.)
//         // });

//         // Log the response data to the console for debugging
//         console.log("Fetched songs data:", response.data);

//         // Assuming the songs are in response.data (e.g., response.data.results)
//         setSongs(response.data || []);
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
//           songs.map((song) => (
//             <SongCard key={song._id} song={song} /> // Pass the song object to SongCard
//           ))
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
//   const [currentSongUrl, setCurrentSongUrl] = useState(null); // URL of the currently playing song

//   // Fetch songs from API on component mount
//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get("/songs");
//         console.log("Fetched songs data:", response.data);
//         setSongs(response.data || []);
//       } catch (err) {
//         console.error("Error fetching popular songs:", err);
//         setError("Failed to fetch popular songs. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSongs();
//   }, []);

//   // Function to handle song click
//   const handleSongClick = (songUrl) => {
//     setCurrentSongUrl(songUrl); // Update the current song URL
//   };

//   return (
//     <div className="popular-songs">
//       <h2>Popular Songs</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}
//       <div className="song-list">
//         {songs.length > 0 ? (
//           songs.map((song) => (
//             <SongCard
//               key={song._id}
//               song={song}
//               onClick={() => handleSongClick(song.url)} // Handle click to play song
//             />
//           ))
//         ) : (
//           !loading && <p>No songs available.</p>
//         )}
//       </div>

//       {/* Audio Player */}
//       {currentSongUrl && (
//         <div className="audio-player">
//           <audio controls autoPlay>
//             <source src={currentSongUrl} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PopularSongs;



import React, { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "./SongCard";
import "../Styles/PopularSongs.css";

const PopularSongs = () => {
  const [songs, setSongs] = useState([]); // State for songs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [currentSongUrl, setCurrentSongUrl] = useState(null); // Current song URL

  // Fetch songs from the API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/songs");
        console.log(response.data);
        setSongs(response.data || []);
      } catch (err) {
        setError("Failed to fetch songs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  // Handle song click
  const handleSongClick = (songUrl) => {
    console.log("song",songUrl)
    setCurrentSongUrl(songUrl); // Set the current song URL
  };

  return (
    <div className="popular-songs">
      <h2>Popular Songs</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="song-list">
        {songs.length > 0 ? (
          songs.map((song) => (
            <SongCard
              key={song._id}
              song={song}
              onClick={() => handleSongClick(song.url)} 
            />
          ))
        ) : (
          !loading && <p>No songs available.</p>
        )}
      </div>

      {currentSongUrl && (
        <audio controls autoPlay>
          <source src={currentSongUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default PopularSongs;
