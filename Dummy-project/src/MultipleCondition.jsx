import React, { useState } from "react";

const MultipleCondition = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "25px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2
          style={{
            color: "#333",
            marginBottom: "10px",
            fontSize: "28px",
          }}
        >
          Multiple Condition
        </h2>

        {/* Counter */}
        <h1
          style={{
            fontSize: "60px",
            margin: "10px 0 20px",
            color: "#6366f1",
            fontWeight: "bold",
          }}
        >
          {count}
        </h1>

        {/* Button */}
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "13px 30px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(99, 102, 241, 0.35)",
            marginBottom: "25px",
          }}
        >
          Click The Button AND see the Magic
        </button>

        {/* Conditions */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f5f3ff",
            borderRadius: "15px",
            border: "2px solid #ddd6fe",
          }}
        >
          {count === 1 ? (
            <h1 style={{ color: "#6366f1", margin: 0 }}>
              Sohail Bangash
            </h1>
          ) : count === 2 ? (
            <h1 style={{ color: "#ec4899", margin: 0 }}>
              Arif Bangash
            </h1>
          ) : count === 3 ? (
            <h1 style={{ color: "#14b8a6", margin: 0 }}>
              Basit Bangash
            </h1>
          ) : count === 4 ? (
            <h1 style={{ color: "#f59e0b", margin: 0 }}>
              Subhan Bangash
            </h1>
          ) : count === 5 ? (
            <h1 style={{ color: "#ef4444", margin: 0 }}>
              Ahsaan Bangash
            </h1>
          ) : count === 6 ? (
            <h1 style={{ color: "#8b5cf6", margin: 0 }}>
              Manan Bangash
            </h1>
          ) : (
            <h1 style={{ color: "#6b7280", margin: 0 }}>
              The condition is False
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultipleCondition;
