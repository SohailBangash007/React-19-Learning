import React, { useState } from 'react'

const InputField = () => {
    const [Val, setVal]=useState("Sohail-Bangash")
  return (
    <div>
        <h1>Get Input Field Value</h1>
        <input type="text" placeholder='Enter User Name'value={Val} onChange={(event)=>setVal(event.target.value)} style={{color:"black",
    border: "5px solid black", width:"300px", margin:"50px", padding: "20px"}}/>
        <h1>{Val}</h1>
        <button   style={{
            padding: "12px 28px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(99, 102, 241, 0.35)",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
          }} onClick={()=>setVal("")}>Clear The Input Field</button>
        </div>
  )
}

export default InputField