import React, { useState, useEffect } from "react";
import axios from "axios";

const AddToPlaylist = ({ songId }) => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get("http://task-4-0pfy.onrender.com/all");
        setPlaylists(response.data);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchPlaylists();
  }, []);

  const handleAddToPlaylist = async () => {
    try {
      const response = await axios.post("http://task-4-0pfy.onrender.com/addToPlaylist", {
        playlistId: selectedPlaylist,
        songId,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error adding song to playlist:", error);
    }
  };

  return (
    <div>
      <h3>Add Song to Playlist</h3>
      <select onChange={(e) => setSelectedPlaylist(e.target.value)}>
        <option value="">Select Playlist</option>
        {playlists.map((playlist) => (
          <option key={playlist._id} value={playlist._id}>
            {playlist.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddToPlaylist}>Add</button>
    </div>
  );
};

export default AddToPlaylist;
