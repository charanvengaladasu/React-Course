import React,{useState} from 'react'
import './App.css'
const App = () => {
  const [showPassword,setShowPassword]=useState(false)

  return (
    <div>
      <input 
      type={showPassword ? 'text' : 'password'} placeholder='enter password'/>
      <button onClick={()=>setShowPassword(!showPassword)}>
        {
          showPassword ? 'hide' : 'show'
        }
      </button>
    </div>
  )
}

export default App