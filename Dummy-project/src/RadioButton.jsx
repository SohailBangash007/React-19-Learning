import React, { useState } from 'react'

const RadioButton = () => {
  const [gender, setGender]=useState("male");
  const [city, setCity]=useState("Islamabad");
  return (

    <div style={{color : "blue", margin: "40px", padding: "30px", fontSize: "20px", fontWeight: "40px"}}>
      <h1>handle Radio Button</h1>
       <div>
        <input checked={gender == "male"}  type="radio" id='male' name='gender' value="male"  onChange={(event)=>setGender(event.target.value)}/>
        <label htmlFor="male"  >Male</label>
        <input checked={gender == "female"} type="radio" id='female' name='gender' value="female" onChange={(event)=>setGender(event.target.value)} />
        <label htmlFor="female"  >Female</label>
        <h1>Gender Selected : {gender}</h1>
       </div>
           <br /><br />
           <h2>Selected City</h2>
       <select defaultValue="Islamabad" onChange={(event)=>setCity(event.target.value)}>
        <option value="Rawalpindi">Rawalpindi</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
       </select>

       <h1>Selected City : {city}</h1>

      
    </div>
  )
}

export default RadioButton