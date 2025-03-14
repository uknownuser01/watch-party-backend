import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import YouTube from "react-youtube";

const socket = io("http://localhost:5000");

const Room = () => {
    const { roomId } = useParams();
    const [videoUrl, setVideoUrl] = useState("");
    const [isYouTube, setIsYouTube] = useState(false);
    const [chat, setChat] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/api/rooms/${roomId}`).then(res => {
            setVideoUrl(res.data.videoUrl);
            setIsYouTube(res.data.isYouTube);
        });

        socket.emit("joinRoom", roomId);
        socket.on("receiveMessage", (data) => setChat((prev) => [...prev, data]));

        return () => socket.disconnect();
    }, [roomId]);

    const sendMessage = () => {
        socket.emit("sendMessage", { roomId, message });
        setChat([...chat, { message }]);
        setMessage("");
    };

    return (
        <div>
            <h2>Room {roomId}</h2>
            {isYouTube ? (
                <YouTube videoId={new URL(videoUrl).searchParams.get("v")} />
            ) : (
                <video src={videoUrl} controls />
            )}
            <div>
                <h3>Chat</h3>
                {chat.map((msg, index) => <p key={index}>{msg.message}</p>)}
                <input value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Room;
