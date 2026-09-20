import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    // CallOnce();
    countFunction();
  }, [count]);

  useEffect(() => {
     CallOnce();
    
  }, []);

  function CallOnce() {
    console.log("CallOnce Function called");
  }

  function countFunction() {
    console.log("Counter Function Called", count);
  }
  


  return (
    <div>
      <h1>UseEffect Hooks</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <h1>Count : {count}</h1>
      <button onClick={() => setData(data + 1)}>Data</button>
      <h1>data : {data}</h1>
    </div>
  );
};

export default Hooks;
