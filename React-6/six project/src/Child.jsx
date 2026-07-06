import React,{useState} from 'react'



const Child = () => {
    const [name,setName]=useState('');
    const [submit,setSubmit]=useState('')

    const clickButton=(event)=>{
        event.preventDefault();
        setSubmit(name)


    }
  return (
    <div>
        <form onSubmit={clickButton}>
            <input type='text' placeholder='type text' 
            onChange={(e)=>setName(e.target.value)}/>
            <bytton type="click">click</bytton>
        </form>
        <h2>{submit}</h2>
    </div>
  )
}

export default Child