import React, { useEffect,useRef,useState } from 'react'

const App = () => {

  const [name1,setName1]=useState("");
  const [name2,setName2]=useState("")

  const prevName=useRef("")
  useEffect(()=>{
    prevName.current=name2

  },[name2])
  function add(){
    setName2(name1);
  }

  return (
    <div>
      <input type='text' placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/>
      <button onClick={add}>click</button>
    </div>
  )
}

export default App