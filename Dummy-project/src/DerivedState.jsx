import React, { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  const handleUser = () => {
    setUsers([...users,user]);
    
  };
 
  const total=users.length;
  const last=users[users.length-1];
  const unique=[... new Set(users)].length;

  return (
    <div  style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}>
      <h1>Derived State in React Js</h1>
      <div style={{padding:"20px"}}>
        <h1 style={{fontWeight:"bold"}}>Total Users : {total}</h1>
        <h1 style={{fontWeight:"bold"}}>Last Users :  {last}</h1>
        <h1 style={{fontWeight:"bold"}}>Unique Total Users : {unique}</h1>
        <input
          type="text"
          placeholder="Enter User Name"
          onChange={(event) => setUser(event.target.value)}
          style={{padding:"10px"}}
        />
        <button onClick={handleUser} style={{padding:"10px"}}>Add User</button>
      </div>
      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
};

export default DerivedState;
