import React, {useState} from 'react'
import "./App.css"
import Timer from "./Timer";
const App = () => {
  const [state,setState]=useState(true);

  return (
    <div>
      <button onClick={()=>setState(!state)}>
        {state ? 'Stop Timer':'Show Timer' }
      </button>
      {state && <Timer />}
    </div>
  )
}

export default App