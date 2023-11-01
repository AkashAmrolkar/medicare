//const mongoose = require('mongoose');
import mongoose from 'mongoose';
const formEntrySchema = new mongoose.Schema({
  // Define your data structure here
  firstname: {
    type: String,
    required: true,
  },
  lastname:  {
    type: String,
    required: true,
  },
  email:  {
    type: String,
    required: true,
  },
  role:  {
    type: String,
    required: true,
  },
  gender:  {
    type: String,
    required: true,
  },
  profileimg:  {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

const Users = mongoose.model('Users', formEntrySchema);


export default Users;