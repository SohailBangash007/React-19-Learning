import React, { useState } from 'react'
import Header from './Header'
import Functional from './Functional'
import ButtonEvents from './ButtonEvents'
import State from './State'
import Toggle from './Toggle'
import MultipleCondition from './MultipleCondition'
import Props from './Props'
import StudentName from './StudentName'
import DefaultProps from './DefaultProps'
import PropsPass from './PropsPass'
import InputField from './InputField'
import Forms from './Forms'
import Checkbox from './Checkbox'
import RadioButton from './RadioButton'
import LoopMap from './LoopMap'

const App = () => {

  let userObj={

    name: "Sohail Bangash",
    Email : "SohailBangash009@mail.com ",
    Address : "abc road  rawalpindi",
    age: 21,
  }
  
  let userObj2={

    name: "Sohail Bangash",
    Email : "SohailBangash009@mail.com ",
    Address : "abc road  rawalpindi",
    age: 21,
  }
  
  let userObj3={

    name: "Sohail Bangash",
    Email : "SohailBangash009@mail.com ",
    Address : "abc road  rawalpindi",
    age: 21,
  }

  const [student, setStudent]=useState("")
  



  return (
    <div>
     
      <Header />
      <Functional />
      <ButtonEvents />
      <State />
      <Toggle />
      <MultipleCondition />
      <button onClick={()=>setStudent("Arif Muneer")}
       style={{marginTop: "10px", paddingTop: "10px", textAlign: "center"}}>update Student Name</button>

     { student && <StudentName text1={"sohail khan"}/>}


      <Props name={userObj}/>
      <Props name={userObj2}/>
      <Props name={userObj3}/>
       <DefaultProps name="SOhail Bangash"/>
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

       <PropsPass >
       <h1>Software Developer</h1>
       </PropsPass>

       <InputField />
       <Forms />
       <Checkbox />
       <RadioButton />
       <LoopMap />

    </div>
  )
}

export default App