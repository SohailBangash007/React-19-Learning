import React, { useRef } from "react";

const UnControlled = () => {
   
    const userRef = useRef ();
    const passwordRef = useRef ();


    const HandleForm =(event)=>{
      event.preventDefault();
      const user = document.querySelector("#user").value;
      const password = document.querySelector("#password").value;
      console.log(user,password);
    }

    const HandleUseRef =(event)=>{
        event.preventDefault()
        const user = userRef.current.value
        const password = passwordRef.current.value
        console.log("userRef", user, password)
    }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        gap: "5px",
      }}
    >
      <h1 >UnControlled Component</h1>
      <form
        action=""
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          margin: "auto",
          width: "300px"
        }}
        onSubmit={HandleForm}
      >
        <input  type="text" placeholder="User Name" id="user" style={{padding:"10px"}}/>
        <br />
        <input type="text" placeholder="Enter Password" id="password" style={{padding:"10px"}}/>
        <br />
        <button style={{padding:"10px"}}>Submit</button>
      </form>
      <br ></br>

      <h1 >UnControlled Component With UseRef</h1>
      <form
        action=""
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          margin: "auto",
          width: "300px"

        }}
        onSubmit={HandleUseRef}
      >
        <input type="text" ref={userRef} placeholder="User Name" id="user" style={{padding:"10px"}}/>
        <br />
        <input type="text" ref={passwordRef} placeholder="Enter Password" id="password" style={{padding:"10px"}}/>
        <br />
        <button style={{padding:"10px"}}>Submit</button>
      </form>
    </div>
  );
};

export default UnControlled;
