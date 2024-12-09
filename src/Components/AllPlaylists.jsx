import axios from "axios";
import React, { useEffect, useState } from "react";

const AllPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

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

  return (
    <div>
      <h3>All Playlists</h3>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlaylists;
