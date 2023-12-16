require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");
const socket = require("socket.io");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoute");
const roomRoutes = require("./routes/RoomRoute");
const Document = require('./models/DocModel');
const docRoutes = require('./routes/DocRoute');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors());

// MongoDB 연결
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("DB Connection Successfull");
}).catch((error) => {
  console.log(error.message);
});

app.use("/api/auth", userRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/doc", docRoutes);
app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
});

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(204).send();
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

