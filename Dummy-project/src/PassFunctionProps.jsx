import React from "react";

const PassFunctionProps = ({ DisplayName, name, GetUser }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
        gap:"20px"
      }}
    >
      <button onClick={() => DisplayName(name)}>Display Name</button>
      <button onClick={GetUser}>Function Button</button>
    </div>
  );
};

export default PassFunctionProps;
