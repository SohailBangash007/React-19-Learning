import React, { useState } from "react";
import ArrayTask from "./ArrayTask";

const InlineStyle = () => {
  const [grid, setGrid] = useState(true);
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
        <div >
           <ArrayTask textColor={textColor}  grid={grid} CardStyle={CardStyle}/>
        </div>
     
    </div>
  );
};

export default InlineStyle;
