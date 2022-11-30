const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongDB Connected Successfully ${conn.connection.host}`);
  } catch (error) {
    console.log("Error from DataBase File", error);
  }
};

module.exports = connectDB;
