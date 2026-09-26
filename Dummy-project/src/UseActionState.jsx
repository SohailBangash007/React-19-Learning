import React, { useActionState } from "react";

const UseActionState = () => {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise(res=>setTimeout(res,2000));
    if (name && password) {
      return { massage: "Data Submitted", name,password };
    } else {
      return { error: "Field to Submit, Enter Right Data",name,password  };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

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
      <h1>UseAction State use In React Js</h1>
      <form action={action}>
        <input type="text" placeholder="Enter name" name="name" />
        <br />
        <input type="text" placeholder="Enter password" name="password" />
        <br />
        <button
          disabled={pending}
          style={{ padding: "15px", width: "170px", margin: "12px" }}
        >
          Submit Data
        </button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.massage && <span style={{ color: "green" }}>{data?.massage}</span>}

      <h2> Name : {data?.name}</h2>
      <h2> Password : {data?.password}</h2>
    </div>
  );
};

export default UseActionState;
