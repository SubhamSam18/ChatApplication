const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
    // console.log(process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log("Mongo Connected!");
  } catch (error) {
    console.log(`Connection Failed!, ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
