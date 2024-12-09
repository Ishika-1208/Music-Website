import axios from "axios";
import React, { useState } from "react";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePlaylist = async () => {
    try {
      const response = await axios.post("http://task-4-0pfy.onrender.com/createOrFind", {
        name,
        description,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error creating playlist:", error);
    }
  };

  return (
    <div>
      <h3>Create Playlist</h3>
      <input
        type="text"
        placeholder="Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreatePlaylist}>Create</button>
    </div>
  );
};

export default CreatePlaylist;
