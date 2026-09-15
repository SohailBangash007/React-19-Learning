import React from "react";

const Card = () => {
  return (
    <div
      style={{
        width: "350px",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        fontFamily: "Arial, sans-serif",
        margin: "50px auto",
      }}
    >
      {/* Developer Image */}
      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
          alt="Developer workspace"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "25px",
        }}
      >
        <h2
          style={{
            margin: "0",
            color: "#222",
            fontSize: "28px",
          }}
        >
          Sohail Bangash
        </h2>

        <h3
          style={{
            margin: "8px 0 15px",
            color: "#6366f1",
            fontSize: "17px",
          }}
        >
          Frontend Developer
        </h3>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        >
          Hi, I’m Sohail Bangash, a passionate developer who loves building
          modern, responsive, and user-friendly web applications. I enjoy
          turning ideas into clean and creative digital experiences using
          React and modern web technologies.
        </p>

        <button
          style={{
            padding: "12px 22px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#6366f1",
            color: "#ffffff",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Card;