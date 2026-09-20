import React, { useState } from "react";
import Header from "./Header";
import Functional from "./Functional";
import ButtonEvents from "./ButtonEvents";
import State from "./State";
import Toggle from "./Toggle";
import MultipleCondition from "./MultipleCondition";
import Props from "./Props";
import StudentName from "./StudentName";
import DefaultProps from "./DefaultProps";
import PropsPass from "./PropsPass";
import InputField from "./InputField";
import Forms from "./Forms";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import LoopMap from "./LoopMap";
import ReuseComponent from "./ReuseComponent";
import ClockTask from "./ClockTask";
import NestedLoop from "./NestedLoop";
import Hooks from "./Hooks";
import Counter from "./Counter";
import InlineStyle from "./InlineStyle";

const App = () => {
  let userObj = {
    name: "Sohail Bangash",
    Email: "SohailBangash009@mail.com ",
    Address: "abc road  rawalpindi",
    age: 21,
  };

  let userObj2 = {
    name: "Sohail Bangash",
    Email: "SohailBangash009@mail.com ",
    Address: "abc road  rawalpindi",
    age: 21,
  };

  let userObj3 = {
    name: "Sohail Bangash",
    Email: "SohailBangash009@mail.com ",
    Address: "abc road  rawalpindi",
    age: 21,
  };

  const [student, setStudent] = useState("");
  const [color, setColor] = useState("green");
  const [counter, setCounter] = useState(0);
  const [Data, setData] = useState(0);
  const [Display, setDisplay] = useState("");

  return (
    <div>
      <Header />
      <Functional />
      <ButtonEvents />
      <State />
      <Toggle />
      <MultipleCondition />
      <button
        onClick={() => setStudent("Arif Muneer")}
        style={{ marginTop: "10px", paddingTop: "10px", textAlign: "center" }}
      >
        update Student Name
      </button>

      {student && <StudentName text1={"sohail khan"} />}

      <Props name={userObj} />
      <Props name={userObj2} />
      <Props name={userObj3} />
      <DefaultProps name="SOhail Bangash" />
      <DefaultProps name="Subhan" />

      <PropsPass color="blue">
        <h1>Front-end Developer</h1>
      </PropsPass>

      <PropsPass color="red">
        <h1>Back-end Developer</h1>
      </PropsPass>

      <PropsPass color="green">
        <h1>Full-Stack Developer</h1>
      </PropsPass>

      <PropsPass>
        <h1>Software Developer</h1>
      </PropsPass>

      <InputField />
      <Forms />
      <Checkbox />
      <RadioButton />
      <LoopMap />
      <ReuseComponent />
      <div>
        <ClockTask color={color} />
        <select
          onChange={(event) => setColor(event.target.value)}
          style={{
            margin: "40px",
            padding: "15px",
            width: "170px",
            background: "grey",
            fontSize: "20px",
            fontWeight: "40px",
          }}
        >
          <option value="green">Green</option>
          <option value="black">black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="orange">orange</option>
        </select>
      </div>
      <NestedLoop />
      <Hooks />
     {
      Display    ?   <Counter counter={counter} Data={Data}  /> : null
     }
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setData(Data + 1)}>Data</button>
       <button onClick={() => setDisplay(!Display)}>Toggle</button>
        
         <InlineStyle /> 
       
     
    
    </div>
  );
};

export default App;
