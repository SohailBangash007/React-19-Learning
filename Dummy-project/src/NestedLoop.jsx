import React from "react";
import ArrayNested from "./ArrayNested";

const NestedLoop = () => {
  const UserSchool = [
    {
      name: "Sohail-Bangash",
      city: "Kohat",
      website: "www.IIT.com",
      student: [
        {
          name: "subhan",
          age: "22",
          email: "Subhan008@gmail.com",
        },

        {
          name: "Ahsan",
          age: "20",
          email: "Ahsan007@gmail.com",
        },

        {
          name: "Manan",
          age: "19",
          email: "Manan006@gmail.com",
        },
      ],
    },

    {
      name: "Numan-Bangash",
      city: "Kohat",
      website: "www.B.com.com",
      student: [
        {
          name: "Salman-Bangash",
          age: "15",
          email: "Salman002@gmail.com",
        },

        {
          name: "Usman-Bangash",
          age: "17",
          email: "Usman001@gmail.com",
        },

        {
          name: "Aman-Bangash",
          age: "18",
          email: "Aman003@gmail.com",
        },
      ],
    },

    {
      name: "Arif-Bangash",
      city: "Kohat",
      website: "www.BsCs.com",
      student: [
        {
          name: "Kashif-muneer",
          age: "27",
          email: "Kashif010@gmail.com",
        },

        {
          name: "Muneer-Arshad",
          age: "40",
          email: "Muneer007@gmail.com",
        },

        {
          name: "yousaf-Arif",
          age: "02",
          email: "yousaf009@gmail.com",
        },
      ],
    },

    {
      name: "zafar-Bangash",
      city: "Kohat",
      website: "www.FA.com",
      student: [
        {
          name: "Hameed",
          age: "30",
          email: "Hameed333@gmail.com",
        },

        {
          name: "Wajid",
          age: "29",
          email: "Wajid002@gmail.com",
        },

        {
          name: "Ahtesham",
          age: "17",
          email: "Ahtesham711@gmail.com",
        },
      ],
    },
  ];

  return (
  <div>
   <h1>Array Nested Looping with component</h1>
   {
    UserSchool.map((user,index)=>(
        <div key={index}>
          <ArrayNested user={user}/>
        </div>
    ))
   }
</div>
)
};

export default NestedLoop;
