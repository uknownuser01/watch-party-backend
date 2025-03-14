const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomId: { type: String, required: true, unique: true },
    videoUrl: { type: String, required: true },
    isYouTube: { type: Boolean, default: false },
});

module.exports = mongoose.model("Room", RoomSchema);
