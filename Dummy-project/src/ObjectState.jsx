import React, { useState } from "react";

const ObjectState = () => {
  const [data, setData] = useState({
    name: "Sohail khan",
    address: {
    city: "Kohat",
    country: "Pakistan",
}
  });

  const handleName=(val)=>{
     data.name=val
    
    setData({...data})
  }

  const handleCity=(val)=>{
    data.address.city=val;
    
    setData({...data,address:{...data.address}})
  }

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        Updating Object in State
      </h1>
     <input type="text" placeholder="Enter User Name" onChange={(event)=>handleName(event.target.value)} 
      style={{display:"flex", justifyContent:"center", alignContent:"center",fontWeight:"bold", fontSize:"20px", margin:"auto"}}
     />
     <input type="text" placeholder="Enter City" onChange={(event)=>handleCity(event.target.value)} 
      style={{display:"flex", justifyContent:"center", alignContent:"center",fontWeight:"bold", fontSize:"20px", margin:"auto"}}
     />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
          marginTop:"5px"
        }}
      >
        Name : {data.name}
      </h1>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "medium",
          fontSize: "20px",
        }}
      >
        Address : {data.address.city}
      </h1>
      
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "medium",
          fontSize: "20px",
        }}
      >
        Address : {data.address.country}
      </h1>
      
      
    </div>
  );
};

export default ObjectState;
