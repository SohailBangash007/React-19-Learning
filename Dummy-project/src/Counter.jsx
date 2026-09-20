import React, { useEffect } from "react";

const Counter = ({ counter, Data }) => {
  useEffect(() => {
    handleCounter();
  }, [counter]);

  useEffect(() => {
    handleData();
  }, [Data]);

  useEffect(() => {
    return () => {
      console.log("This is Hidden Function Called");
    };
  }, []);

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

      <h2>Data Value : {Data} </h2>
    </div>
  );
};

export default Counter;
