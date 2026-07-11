import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
        <h2>page not found</h2>
        <Link to='/'>go to home page</Link>
    </div>
  )
}

export default Notfound