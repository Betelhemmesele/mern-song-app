const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  file_url: {
    type: String, // URL or path to the music file
    required: true,
  }
});

module.exports = mongoose.model('Song', songSchema);
