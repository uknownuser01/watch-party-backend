import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const navigate = useNavigate();

    const createRoom = async () => {
        const isYouTube = videoUrl.includes("youtube.com");
        const roomId = Math.random().toString(36).substr(2, 6);

        await axios.post("http://localhost:5000/api/rooms/create", { roomId, videoUrl, isYouTube });
        navigate(`/room/${roomId}`);
    };

    return (
        <div>
            <h2>Create a Room</h2>
            <input type="text" placeholder="Paste YouTube or Video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            <button onClick={createRoom}>Create Room</button>
        </div>
    );
};

export default CreateRoom;
