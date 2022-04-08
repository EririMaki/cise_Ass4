const mongoose = require('mongoose');
require("dotenv").config();

const config = require('config');
//const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
        process.env.mongoURI,
      { useNewUrlParser: true }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;