const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content : {
    type : String
  },
  room: {
    type: String
  },
});


module.exports = mongoose.model("Document", docSchema);