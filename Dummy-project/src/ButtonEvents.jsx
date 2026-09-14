import React from 'react'




const ButtonEvents = () => {
function handler (){
 alert ("don't Click the button")
}

const Fruit=()=> {
    alert("Apple")
}

 const fruits=(name)=>{
   alert(name)
 }



  return (
    <div>
        <h1>Button Events  And Handler</h1>
        <button onClick={handler}>Click Me</button>
        <button onClick={Fruit}>Click Me</button>
        <br />
        <button onClick={()=>fruits("Apple")}>Apple</button>
        <button onClick={()=>fruits("Banana")}>Banana</button>
    </div>
  )
}

export default ButtonEvents