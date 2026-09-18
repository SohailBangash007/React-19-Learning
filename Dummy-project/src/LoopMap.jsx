import React from "react";

const LoopMap = () => {
  const UserData = [
    {
      name: "SOAHIL",
      age: 21,
      id: 1,
      Email: "sohailbangssh009@gmail.com",
    },

    {
      name: "Arif Muneer",
      age: 24,
      id: 2,
      Email: "Arifbangssh009@gmail.com",
    },

    {
      name: "BasitNisar",
      age: 29,
      id: 3,
      Email: "Basitbangssh009@gmail.com",
    },

    {
      name: "Numan Arshad",
      age: 27,
      id: 4,
      Email: "Numanbangssh009@gmail.com",
    },
  ];

  return (
    <div>
      <h1>Loop in Jsx with Map Function</h1>
      <h2>Loop Data with Map Function</h2>
      <table border="2px solid black">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Id</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {UserData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.Email}</td>
              <td>{item.id}</td>
              <td>{item.age}</td>
            </tr>
          ))}
          
        </tbody>
      </table>

      <h1>Without Loop data Dummy Data</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Id</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sohail Bangash</td>
            <td>SohailBangash009@gmail.com</td>
            <td>1</td>
            <td>21</td>
          </tr>

          <tr>
            <td>Arif Muneer </td>
            <td>ArifBangash009@gmail.com</td>
            <td>2</td>
            <td>24</td>
          </tr>

          <tr>
            <td>Basit Nisar</td>
            <td>BasitBangash009@gmail.com</td>
            <td>3</td>
            <td>29</td>
          </tr>

          <tr>
            <td>Numan Arshad</td>
            <td>NumanBangash009@gmail.com</td>
            <td>4</td>
            <td>27</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoopMap;
