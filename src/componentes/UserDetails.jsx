import React from "react";
import foto from "../assets/avatar-jessica.jpeg";
import "./UserDetails.css";
function UserDetails() {
  return (
    <div className="contenedor">
      <div className="contenedorImagen">
        <img className="imagen" src={foto} alt="imagen1"></img>
      </div>
      <div className="contenedorLetras">
        <h1 className="nombre">Jessica Randall</h1>
        <h2 className="uvicacion">London, United Kingdom</h2>
        <p className="informacion">"Front-end developer and avid reader"</p>
      </div>
    </div>
  );
}

export default UserDetails;
