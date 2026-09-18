import React, { useState } from "react";

const Checkbox = () => {
    const [skills, setSkills]=useState([]);

    const handlerCheckbox=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=> item!= event.target.value)])
        }
    }



  return (
    <div
      style={{
        color: "green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "40px",
        fontSize: "20px",
      }}
    >
      <h1>Select Your Skills</h1>

      <div style={{ display: "flex", flexDirection: "row", gap:"10px" }}>
        <input onChange={handlerCheckbox} type="checkbox" id="php"  value="PHP"/>
        <label htmlFor="php">PHP</label>
        <input onChange={handlerCheckbox} type="checkbox" id="JS"  value="JS"/>
        <label htmlFor="JS">JS</label>
        <input onChange={handlerCheckbox} type="checkbox" id="node"  value="node"/>
        <label htmlFor="node">Node</label>
        <input onChange={handlerCheckbox} type="checkbox" id="java"  value="java"/>
        <label htmlFor="java">Java</label>
      </div>
      <h1>Selected language : {skills}</h1>
    </div>
  );
};

export default Checkbox;
