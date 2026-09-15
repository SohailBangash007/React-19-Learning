import React from 'react'
import Header from './Header'
import Functional from './Functional'
import ButtonEvents from './ButtonEvents'
import State from './State'
import Toggle from './Toggle'
import MultipleCondition from './MultipleCondition'
import Props from './Props'

const App = () => {
  return (
    <div>
     
      <Header />
      <Functional />
      <ButtonEvents />
      <State />
      <Toggle />
      <MultipleCondition />
      <Props text1={"Hey This is Sohail Bangash"} name={"Sohail Bngash"}/>
      
    </div>
  )
}

export default App