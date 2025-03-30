const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true 
  }
});

// Create and export the model
module.exports = mongoose.model('Admin', AdminSchema);