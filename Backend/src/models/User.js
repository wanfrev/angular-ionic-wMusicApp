const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  viewedTracks: [
    {
      id: String,
      name: String,
      artists: String,
      album: String,
      releaseDate: String,
      imageUrl: String,
    },
  ]
});

module.exports = mongoose.model('User', UserSchema);
