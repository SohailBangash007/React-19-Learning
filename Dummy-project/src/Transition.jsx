import React, { useState, useTransition } from "react";

const Transition = () => {
  //   const [pending, setPending] = useState(false);

  const [pending, startTransition] = useTransition(false);
  // How to use  with UseState
  //   const HandleClick =async () => {
  //     setPending(true);
  //    await new Promise((res) => setTimeout(res, 2000));

  //     //

  //     setPending(false);
  //   };

  const HandleClick = async () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
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
      <h1>Use Transition Hooks With React Js 19</h1>
      {
        pending ?
        <img src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif" alt=""
        style={{background:"black", padding:"5px", width:"200px", gap:"12px"}} /> : null
      }
      <button
        style={{ padding: "15px", width: "170px", margin:"12px" }}
        disabled={pending}
        onClick={HandleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default Transition;
