import React from 'react'
import "./ButtonSection.css"
function ButtonSection(props) {
  const botones=props.botones
  return (
    <div className="botones">
  {
    botones.map(
      (boton)=> <form action={boton.url}> <button className="boton1"  onclick={boton.url}>{boton.name}</button></form>
    )
    /*
      <button className="boton1" onClick="">Github</button>
      <button className="boton1">Facebook</button>
      <button className="boton1">LinkedIn</button>
      <button className="boton1">Twitter</button>
      <button className="boton1">Instagram</button> 
    */
    
  }
  </div>
  )
}

export default ButtonSection