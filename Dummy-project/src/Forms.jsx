import React, { useState } from 'react'

const Forms = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    marginTop: "8px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none"
  };

  const buttonStyle = {
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "8px 5px 0 0"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        style={{
          width: "350px",
          padding: "35px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "25px"
          }}
        >
          User Form
        </h2>

        <label style={{ color: "#555", fontWeight: "bold" }}>
          User Name
        </label>

        <input
          type="text"
          placeholder="Enter User Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <label style={{ color: "#555", fontWeight: "bold" }}>
          Password
        </label>

        <input
          type="password"
          placeholder="Enter User Password"
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <label style={{ color: "#555", fontWeight: "bold" }}>
          Email
        </label>

        <input
          type="email"
          placeholder="Enter User Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              ...buttonStyle,
              backgroundColor: "#667eea",
              color: "white"
            }}
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => {
              setName("");
              setEmail("");
              setPassword("");
            }}
            style={{
              ...buttonStyle,
              backgroundColor: "#f1f1f1",
              color: "#333"
            }}
          >
            Clear
          </button>
        </div>

        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            backgroundColor: "#f7f7f7",
            borderRadius: "10px"
          }}
        >
          <h3 style={{ color: "#667eea", margin: "5px 0" }}>
            Name: {Name}
          </h3>

          <h3 style={{ color: "#667eea", margin: "10px 0" }}>
            Password: {Password}
          </h3>

          <h3 style={{ color: "#667eea", margin: "10px 0 5px" }}>
            Email: {Email}
          </h3>
        </div>
      </form>
    </div>
  )
}

export default Forms
