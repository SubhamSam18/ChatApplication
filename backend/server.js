const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const colors = require('colors');
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
connectDB();


app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use('/api/user',userRoutes); 
app.use('/api/chat',chatRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started... ${ PORT }`.yellow.bold));
