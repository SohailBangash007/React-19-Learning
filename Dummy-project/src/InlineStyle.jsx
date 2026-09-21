import React, { useState } from "react";

const InlineStyle = () => {
  const [grid, setGrid] = useState();
  const [CardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "300px",
    boxShadow: "1px 2px 3px 0px #cccccc100",
    margin: "10px",
    borderRadius: "10px",
  });

  const [textColor, setTextColor] = useState("black");

  const upDateTheme = (bgColor, textColor) => {
    setCardStyle({ ...CardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Inline Style In React Js</h1>
      <div
        style={{
          display: "flex",
          padding: "20px",
          margin: "10px",
          gap: "10px",
        }}
      >
        <button onClick={() => upDateTheme("aqua", "green")}>Update Theme</button>
        <button onClick={() => upDateTheme("white", "black")}>
          Default Theme
        </button>
        <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
      </div>

      <div style={{ flexWrap: "wrap", display : grid?"flex":"block", justifyContent: "center" }}>
        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Sohail Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
        <div style={CardStyle}>
          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLG9FKrvicPUchq85jaoWELxi_H_IkxevU2hZ2kyONzBhoERjdiTqb-tr&s=10"
            alt=""
          />

          <div style={{ padding: "10px", color: textColor }}>
            <h1>Arif Bangash</h1>
            <h2>Software Developer</h2>
            <p>
              A Front-End Developer is someone who creates websites and web
              applications. The difference between Front-End and Back-End is
              that Front-End refers to how a web page looks, while back-end
              refers to how it works. You can think of Front-End as client-side
              and Back-End as server-side. The basic languages for Front-End
              Development are HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineStyle;
