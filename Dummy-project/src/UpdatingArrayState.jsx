import React, { useState } from "react";

const UpdatingArrayState = () => {
  const [data, setData] = useState(["Sohail", "Arif", "Numan"]);
  const [dataDetail, setDataDetail]=useState([
    {name: "Sohail", Age: "21"},
    {name: "Arif", Age: "29"},
    {name: "Numan", Age: "28"},
])

  const handleName = (name) => {
    data[data.length - 1] = name;
    setData([...data]);
  };

  const handleAge = (Age) => {
    dataDetail[dataDetail.length - 1].Age = Age;
    setDataDetail([...dataDetail]);
  };
  return (
    <div>
      <h1>Updating Array in State with React jS</h1>
      <input
        type="text"
        placeholder="Enter User Name"
        onChange={(e) => handleName(e.target.value)}
      />
      {data.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
      <hr />
      <input
        type="text"
        placeholder="Enter User Age"
        onChange={(e) => handleAge(e.target.value)}
      />
      {
        dataDetail.map((item,index)=>(
          <h3 key={index}>{item.name},{item.Age}</h3>
        ))
      }
    </div>
  );
};

export default UpdatingArrayState;
