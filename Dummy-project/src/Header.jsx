import React from 'react'
import hero from "./assets/hero.png"

const Header = () => {
    function handleClick(){
        alert("function called")
    }
  return (
    <div>
        <h1>Sohail Bangash Todos</h1>
        <img src={hero} alt="" />

        <ul>
            <li>Invent new traffic Lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum Technology</li>
        </ul>
        <button onClick={handleClick}>click Me</button>
    </div>
  )
}

export default Header