import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  // Fetch books
  const getBooks = async () => {
    const res = await fetch("http://localhost:3000/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Add book
  const addBook = async () => {
    await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, author })
    });

    setName("");
    setAuthor("");
    getBooks();
  };

  // Delete book
  const deleteBook = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE"
    });
    getBooks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Manager (MERN)</h1>

      <input
        placeholder="Book Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={addBook}>Add Book</button>

      <ul>
        {books.map((b) => (
          <li key={b._id}>
            {b.name} - {b.author}
            <button onClick={() => deleteBook(b._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;