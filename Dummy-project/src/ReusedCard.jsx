import React from 'react'

const ReusedCard = ({item}) => {
  return (
    <div style={{  
        padding: "10px",
        margin : "20px",
        width :   "400px",
        border: "2px solid black",
        borderRadius: "10px"

        }}>
      <h1>Name : <span style={{color: "green"}}>{item.name}</span></h1>
      <h3>Email : <span style={{color: "green"}}>{item.Email}</span></h3>
      <h3>Age : <span style={{color: "green"}}>{item.age}</span></h3>
    </div>
  )
}

export default ReusedCard