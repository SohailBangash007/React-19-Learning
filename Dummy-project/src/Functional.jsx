import React from "react";

const Functional = () => {
  const name = "Sohail Bangash";
  const userObj = {
    name: "Sohail Bangash",
    Email: "sohailbangash007@gmail.com",
    Age: 29,
    Address: "abc xyz",
  };

  let x = 10;
  let y = 20;

  function Fruit() {
    return "Apple";
  }
  let path =
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D";

  function operation(a, b, ab) {
    if (ab == "+") {
      return a + b;
    } else if (ab == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }

  return (
    <div>
      <h1>{userObj.name}</h1>
      <p>{userObj.Email}</p>

      <div>
        <h2>{x + y}</h2>
        <p>{Fruit()}</p>
      </div>
      <h2>{operation(10, 20, "")}</h2>
      <h1>{userObj.Address}</h1>
      <input type="text" value={name} />
      <hr />
      <img src={path} />
    </div>
  );
};

export default Functional;
