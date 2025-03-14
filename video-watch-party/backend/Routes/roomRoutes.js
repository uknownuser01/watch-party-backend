const express = require("express");
const router = express.Router();
const Room = require("../models/room");


router.post("/create", async (req, res) => {
    try {
        const { roomId, videoUrl } = req.body;
        const newRoom = new Room({ roomId, videoUrl });
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:roomId", async (req, res) => {
    try {
        const room = await Room.findOne({ roomId: req.params.roomId });
        if (!room) return res.status(404).json({ message: "Room not found" });
        res.json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
