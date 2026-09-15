import React, { useState } from "react";
import Card from "./Card";

const Toggle = () => {
  const [Display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Toggle Hidden and Show</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <button
          onClick={() => setDisplay(!Display)}
          style={{
            padding: "12px 28px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(99, 102, 241, 0.35)",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
          }}
        >
          {Display ? "Hidden Profile" : "Show Profile"}
        </button>
      </div>

      {Display ? <Card />  : null}
    </div>
  );
};

export default Toggle;
