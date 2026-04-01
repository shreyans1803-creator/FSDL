const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String // freelancer or client
});

module.exports = mongoose.model("User", userSchema);