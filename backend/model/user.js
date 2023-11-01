//const mongoose = require('mongoose');
import mongoose from 'mongoose';
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


export default Users;