const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, name: "Harry Potter", author: "J.K Rowling" }
];

// ✅ GET
app.get("/books", (req, res) => {
  res.json(books);
});

// ✅ POST
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    name: req.body.name,
    author: req.body.author
  };

  books.push(newBook);
  res.json(newBook);
});

// ✅ 👉 ADD DELETE HERE
app.delete("/books/:id", (req, res) => {
  books = books.filter(book => book.id != req.params.id);
  res.json({ message: "Book deleted successfully" });
});

// ✅ SERVER (always last)
app.listen(3000, () => {
  console.log("Server running on port 3000");
});