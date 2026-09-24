import React, { useRef } from "react";

const UseRefHooks = () => {
  const InputRef = useRef(null);
  const H1Ref = useRef(null);

  const HandlerInput = () => {
    console.log("This  is UseRef Hooks");
    InputRef.current.focus();
    InputRef.current.placeholder="Enter Password";
    InputRef.current.value="12345678";
    InputRef.current.style.color="green";
  };
  const Toggle =()=>{
    if(InputRef.current.style.display!="none"){
      InputRef.current.style.display="none"
    }else{
      InputRef.current.style.display="inline"
    }

  };

  const H1Handler=()=>{
  H1Ref.current.style.color="red"
  }

  return (
    <div>
      <h1>How Use in UseRef Hooks</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          columnGap: "10px",
          width: "300px",
          padding: "15px",
          margin: "auto",
          gap: "20px",
        }}
      >
        <button onClick={Toggle} style={{backgroundColor: "aqua", padding:"10px"}}>Toggle</button>
        <input ref={InputRef} type="text" placeholder="Enter User Name" style={{ padding:"10px"}}/>
        <button onClick={HandlerInput} style={{backgroundColor: "aqua",  padding:"10px"}}>Submit the User Name</button>

        <h1 ref={H1Ref}>Code Step By Step</h1>
        <button onClick={H1Handler} style={{ padding:"10px"}}>Change the Text Color</button>
      </div>
    </div>
  );
};

export default UseRefHooks;
