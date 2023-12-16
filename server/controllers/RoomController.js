const Room = require("../models/RoomModel");

module.exports.createRoomID = async (req, res) => {
  try {
    const { roomID } = req.body;
    const newRoom = new Room({ roomID });
    await newRoom.save();
    res.json(newRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.joinRoom = async (req, res) => {
  try {
    const { roomID } = req.body;
    const room = await Room.findOne({ roomID });
    if (!room) {
      return res.json({ msg: "Incorrect roomId", status: false });
    }
    await Room.updateOne({roomID});
    return res.json({ status: true, room });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};