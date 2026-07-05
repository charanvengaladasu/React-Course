import React from 'react'

const Child = ({count,counter}) => {
    const incrementButton=()=>{
        counter(count+1)
    }
    const decrementButton=()=>{
        counter(count-1)
    }
    const resetButton=()=>{
        counter(count*0)
    }
  return (
    <div>
        <button onClick={incrementButton}>Click+1</button>
        <button onClick={decrementButton}>Click-1</button>
        <button onClick={resetButton}>reset</button>
    </div>
  )
}

export default Child