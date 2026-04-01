const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Add project
router.post("/add", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.send("Project Posted ✅");
});

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;