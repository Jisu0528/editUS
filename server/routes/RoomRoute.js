const {
  createRoomID,
  joinRoom
} = require("../controllers/RoomController");

const router = require("express").Router();

router.post("/createRoom", createRoomID);
router.post("/JoinRoom", joinRoom);

module.exports = router; 