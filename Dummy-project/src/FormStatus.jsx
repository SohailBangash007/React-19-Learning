import React from "react";
import { useFormStatus } from "react-dom";

function CustomerForms() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      
        <input
          type="text"
          placeholder="Enter User Name"
          style={{ padding: "10px" }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          style={{ padding: "10px" }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter password"
          style={{ padding: "10px" }}
        />
        <br />
        <button disabled={pending} style={{ padding: "10px", width: "205px" }}>
         {pending ? "Submitting....":"Submit"}
        </button>
      
    </div>
  );
}

const FormStatus = () => {
  const HandleSubmit = async () => {
    await new Promise(res=> setTimeout(res, 2000));
    console.log("Submit");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <h1>Use FormStatus Hooks in React js 19</h1>
      <form action={HandleSubmit}>
        <CustomerForms />
        
      </form>
    </div>
  );
};

export default FormStatus;
