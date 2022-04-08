// app.js
require("dotenv").config({path: '../.env'});

const express = require('express');
const connectDB = require('../config/db');
//const path = require("path");
//var cors = require('cors');

//const books = require('./routes/api/book');
const app = express();
//connect database
connectDB();

//app.use(cors({ origin: true, credentials: true }));
//app.use(express.json({  extended: false}));
//app.use('/api/books',books);
app.get('/', (req, res) => res.send('Hello world!'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));