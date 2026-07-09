import React,{useState} from 'react'
import "./Classname.css"
const App = () => {
  const [isClicked,setIsClicked]=useState(false);


  return (
    <div>
      <button className={isClicked ? 'clicked':""} onClick={()=>setIsClicked(!isClicked)}> {
          isClicked ? "clicked":"clickme"
      }</button>
    </div>
  )
}

export default App


















/*import React,{useState} from 'react'
import "./Classname.css"
const App = () => {
  const[name,setName]=useState("");
  const[type,setType]=useState("");
  const[msg,setMsg]=useState("");

  const handleClick=()=>{
    if (name.trim()==""){
      setType("you entered nothing")
      setMsg('error')
    }else{
      setType("name looks good")
      setMsg('success')
    }
  }
  return (
    <div>
      <input type="text" placeholder='Enter Your Name'
      onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      <h2>{msg && <p className={msg}>{type}</p>}</h2>
    </div>
  )
}

export default App*/

























/*import React from 'react'
import "./Classname.css"
const App = () => {


  //const isOnline=true;
  return (
    //<div>
      //<button className={isOnline ? "active":"inactive"}>{
          //isOnline ? "Active":"inActive"
     // }</button>
   // </div>
 // 
//}
  )

export default App*/