import React from 'react'
import './App.css'
export const App = () => {
  const isLoggedin=true;

  /*let display;
  if (isLoggedin===true){
    display="logout";
  }else{
    display='login';
  }*/
  return (
    <div>
      {isLoggedin ? <button>logout</button>:<button>login</button>}
    </div>
  )
}

export default App