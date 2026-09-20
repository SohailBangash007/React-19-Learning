import React, { useEffect } from "react";

const Counter = ({ counter, setCounter, Data, setData }) => {
  useEffect(() => {
    handleCounter();
  }, [counter]);

  useEffect(() => {
    handleData();
  }, [Data]);

  const handleCounter = () => {
    console.log("handle counter Function is Called ");
  };

  const handleData = () => {
    console.log("Handle Data Calling Function");
  };

  return (
    <div>
      <h1>Counter handle with Props and UseEffect used</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <h2>Data Value : {Data} </h2>
      <button onClick={() => setData(Data + 1)}>Data</button>
    </div>
  );
};

export default Counter;
