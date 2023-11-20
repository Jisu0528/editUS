require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const userRoutes = require("./routes/userRoute");

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,
};

app.use(cors(corsOptions));

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
app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
