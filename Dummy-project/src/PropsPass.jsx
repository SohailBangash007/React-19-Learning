import React from "react";

const PropsPass = ({children,color}) => {
  return (
    <div
      style={{
        color: color,
        border: "5px solid black",
        width: "300px",
        margin: "50px",
        padding: "20px",
      }}
    >
     {children}
    </div>
  );
};

export default PropsPass;
