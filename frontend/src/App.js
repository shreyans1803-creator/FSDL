import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    budget: "",
    postedBy: ""
  });

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/project");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/project/add", form);

    alert("Project Posted 🚀");

    fetchProjects();
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "20px" }}>
      
      <h1 style={{ color: "#2c3e50" }}>Freelancer Marketplace</h1>

      <div style={{
        background: "#f4f4f4",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}>
        <h3>Post a Project</h3>

        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Project Title" onChange={handleChange} /><br /><br />
          <input name="description" placeholder="Description" onChange={handleChange} /><br /><br />
          <input name="budget" type="number" placeholder="Budget" onChange={handleChange} /><br /><br />
          <input name="postedBy" placeholder="Posted By" onChange={handleChange} /><br /><br />

          <button style={{
            background: "#3498db",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Post Project
          </button>
        </form>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Available Projects</h2>

      {projects.map((p, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          margin: "10px auto",
          padding: "15px",
          width: "300px",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)"
        }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p><b>Budget:</b> ₹{p.budget}</p>
          <p style={{ color: "gray" }}>Posted by: {p.postedBy}</p>
        </div>
      ))}

    </div>
  );
}

export default App;