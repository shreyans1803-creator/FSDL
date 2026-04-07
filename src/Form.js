import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!data.name || !data.email || !data.age) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (!data.email.includes("@")) {
      setError("Invalid email format");
      setSuccess("");
      return;
    }

    if (data.age < 18) {
      setError("Age must be 18+");
      setSuccess("");
      return;
    }

    // Success
    setError("");
    setSuccess("Form submitted successfully!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>

        <p style={{ color: "red" }}>{error}</p>
        <p style={{ color: "green" }}>{success}</p>
      </form>
    </div>
  );
}

export default Form;