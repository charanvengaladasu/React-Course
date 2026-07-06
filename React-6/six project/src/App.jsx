import React,{useState} from 'react'
import './App.css'
const App = () => {
  const [text,setText]=useState("");

  return (
    <div>
      <input type='text' id='input' placeholder='enter name'
      onChange={(e)=>setText(e.target.value)}/>
      <h2>{text}</h2>
    </div>
  )
}

export default App