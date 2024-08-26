const mongoose = require('mongoose');
require('dotenv').config();

// const mongooseUrl = process.env.mongoURLlocal;
const mongooseUrl = process.env.mongoURLserver;

mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});


db.on('disconnected', () => {
  console.log('DisConnected to MongoDB');
});


module.exports = db;
