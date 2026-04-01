const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ✅ MongoDB Connection (PUT YOUR URL HERE)
mongoose.connect("mongodb://shreyansmunot:shreyans123@ac-r0w7lb0-shard-00-00.rnj9wsm.mongodb.net:27017,ac-r0w7lb0-shard-00-01.rnj9wsm.mongodb.net:27017,ac-r0w7lb0-shard-00-02.rnj9wsm.mongodb.net:27017/?ssl=true&replicaSet=atlas-b154be-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));


// ================= ROUTES =================

// 👉 Project Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/project", projectRoutes);


// ================= TEST ROUTE =================

// Basic test
app.get("/", (req, res) => {
  res.send("Freelancer Marketplace Backend Running 🚀");
});


// ================= SERVER =================

app.listen(5000, () => {
  console.log("Server running on port 5000");
});