import React, { useState } from "react"

function App1(props) {
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value);
    
  }

  return (
    <input 
      type="text"
      name="firstName" 
      onChange={ handleChange }  
      value={name} />
  )
}
export default App1

