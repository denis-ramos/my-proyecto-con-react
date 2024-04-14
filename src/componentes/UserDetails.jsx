import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  
  const user = props.user;

  return (
    <div className="contenedor">
      <div className="contenedorImagen">
        <img className="imagen" src={user.avatar} alt="Avatar" />
      </div>
      <div className="contenedorLetras">
        <h1 className="nombre">{user.name}</h1>
        <h2 className="uvicacion">{user.city}</h2>
        <p className="informacion">{user.descripcion}</p>
      </div>
    </div>
  );
};

export default UserDetails;
