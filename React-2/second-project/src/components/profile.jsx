import React from 'react'
import "./profile.css"
const profile = () => {
  const name="Charan";
  const age=21;
  const country="india";

  return (
    <div class="card">
      <h3>Name:{name}</h3>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
    </div>
  )
}

export default profile