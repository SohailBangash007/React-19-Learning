import React, { useState } from "react";

const State = () => {

 const [count, setCount]=useState(0);
 const [RCount,setRCount]=useState(20);
 


  return (
  <div>
    <h1>counter: {count}</h1>
  <button onClick={()=>setCount(count+1)}>counter</button>
    <h1>Reverse counter: {RCount}</h1>
  <button onClick={()=>setRCount(RCount-1)}>counter</button>
  </div>
  );
};

export default State;
