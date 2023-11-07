require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB 연결
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB Connection Successfull");
}).catch((error) => {
  console.log(error.message);
});

app.use("/api/auth", userRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
