const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
connectDB();


app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use('/api/user',userRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server Started...", { PORT }));
