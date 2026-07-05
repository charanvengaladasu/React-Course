//hide text toggle
import React,{useState} from 'react'
import './App.css'
const App = () => {
  const [show , setShow]=useState(false)

  const clickButton=()=>{
    /*if(show===true){
      setShow(false)
    }else{
      setShow(true)
    }*/
   setShow(!show)
  }


  return (
    <div>


      <button onClick={clickButton}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>message received</p>}
    </div>
  )
}

export default App