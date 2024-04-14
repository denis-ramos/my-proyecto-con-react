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
        <h2 className="uvicacion">{user.location}</h2>
        <p className="informacion">{user.description}</p>
      </div>
    </div>
  );
};

export default UserDetails;
