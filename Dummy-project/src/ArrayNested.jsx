import React from "react";
import StudentNested from "./StudentNested";

const ArrayNested = ({ user }) => {
  return (
    <div
      style={{
        background: "#ccc",
        padding: "20px",
        borderBottom: "2px solid black",
        margin: "40px",
        borderRadius: "20px",
      }}
    >
      <h1>Name : {user.name}</h1>
      <ul>
        <li>
          <h3>City : {user.city}</h3>
        </li>
        <li>
          <h3>Website : {user.website}</h3>
        </li>
        <li>
          <StudentNested student={user.student} />
        </li>
      </ul>
    </div>
  );
};

export default ArrayNested;
