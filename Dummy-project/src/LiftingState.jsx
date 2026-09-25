import React from 'react'

const LiftingState = ({setAddUser}) => {
  return (
    <div>
       <h1 style={{display:"flex", justifyContent:"center", alignItems:"center",fontWeight:"bold", fontSize:"40px"}}>Lifting State up in React Js </h1>
       <h1  style={{display:"flex", justifyContent:"center", alignItems:"center",fontWeight:"bold", fontSize:"40px"}}>Add User</h1>
       <input type="text" placeholder='Enter User Name' onChange={(event)=>setAddUser(event.target.value)}
       style={{display:"flex", justifyContent:"center", alignContent:"center",fontWeight:"bold", fontSize:"40px", margin:"auto"}}/>
       <hr />
    </div>
  )
}

export default LiftingState