const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomID: {
    type : String,
    required : true, 
    unique: true
  },
  password: {
    type: String,
    min: 4
  }
});


module.exports = mongoose.model("Room", roomSchema);