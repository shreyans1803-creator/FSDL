const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/bookDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ✅ Schema
const bookSchema = new mongoose.Schema({
  name: String,
  author: String
});

const Book = mongoose.model("Book", bookSchema);

// ✅ GET
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// ✅ POST
app.post("/books", async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author
  });

  await book.save();
  res.json(book);
});

// ✅ DELETE
app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// ✅ START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});