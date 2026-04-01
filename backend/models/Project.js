const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  postedBy: String
});

module.exports = mongoose.model("Project", projectSchema);