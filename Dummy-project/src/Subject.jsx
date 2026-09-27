import React, { useContext } from 'react'
import { DataContext } from './CreateContext'

const Subject = () => {
    const Data = useContext(DataContext);
  return (
    <div style={{backgroundColor:"gainsboro", padding:10}}>
       <h1>Subject is : {Data}</h1>

    </div>
  )
}

export default Subject