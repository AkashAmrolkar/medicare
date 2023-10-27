const mongoose = require('mongoose');

const formEntrySchema = new mongoose.Schema({
  // Define your data structure here
  firstname: String,
  lastname: String,
  email: String,
  role: String,
  gender: String,
  // Add more fields as needed
});

const Users = mongoose.model('Users', formEntrySchema);

module.exports = Users;