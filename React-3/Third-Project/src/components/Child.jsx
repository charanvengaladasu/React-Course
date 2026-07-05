import React from 'react'
import "./Child.css"

const Child = (prop) => {
  return (
    <div className='cards'>
        <div className='Card'>
            <img src={prop.pizza1} alt="" />
            <h3>{prop.title1}</h3>
            <p>{prop.Price1}</p>
            <button>Order Now</button>
        </div>
        <div className='Card'>
            <img src={prop.pizza2} alt="" />
            <h3>{prop.title2}</h3>
            <p>{prop.Price2}</p>
            <button>Order Now</button>
        </div>
        <div className='Card'>
            <img src={prop.pizza3} alt="" />
            <h3>{prop.title3}</h3>
            <p>{prop.Price3}</p>
            <button>Order Now</button>
        </div>

    </div>
  )
}

export default Child