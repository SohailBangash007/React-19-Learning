import React from "react";

const StudentNested = ({ student }) => {
  return (
    <div>
      <h2>Student</h2>
      {student.map((student) => (
        <ul>
          <li>
            <h3>Name : {student.name}</h3>
          </li>
          <li>
            <h3>Email : {student.email}</h3>
          </li>
          <li>
            <h3>Age : {student.age}</h3>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default StudentNested;
