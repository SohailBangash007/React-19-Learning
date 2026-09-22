import React from "react";

const ArrayTask = ({textColor,  grid, CardStyle}) => {
   

  const StyleArray = [
    {
      name: "Sohail Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 1,
    },

    {
      name: "Arif Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 2,
    },

    {
      name: "Subhan Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 3,
    },

    {
      name: "Numan Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 4,
    },

    {
      name: "Basit Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 5,
    },
    {
      name: "Usman Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 6,
    },
    {
      name: "Haseeb Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 7,
    },
    {
      name: "Faraz Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 8,
    },
    {
      name: "Salman Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 9,
    },
    {
      name: "Asim Bangash",
      job: "Software-Developer",
      intro:
        "A Front-End Developer is someone who creates websites and web  applications. The difference between Front-End and Back-End ",
      Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      id: 10,
    },
  ];

//   const CardStyle = 
//     {
//       border: "1px solid #cccccc3b",
//       width: "300px",
//       boxShadow: "1px 2px 3px 0px #cccccc100",
//       margin: "10px",
//       borderRadius: "10px",
//     };
  

  return (
    <div >
      <div  style={{
        
        display : grid? "flex" : "block",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        {StyleArray.map((items) => (
          <div key={items.id} style={CardStyle} >
            <div >
              <img src={items.Img} alt="" style={{ width: "300px", borderRadius: "10px" }}/>
              </div>
              <div style={{ padding: "10px", color : textColor }}>
                <h1>{items.name}</h1>
                <h2>{items.job}</h2>
                <h3>{items.intro}</h3>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayTask;
