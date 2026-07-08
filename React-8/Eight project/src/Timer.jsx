import React,{useEffect,useState} from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(0);

    useEffect(()=>{
        const seconds=setInterval(()=>{
            setTimer((prev)=>prev+1)
         },1000)
  
    return (()=>{
        clearInterval(seconds)
    })
    },[])

  return (
    <div>{timer}</div>
  )
}

export default Timer