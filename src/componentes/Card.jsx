import React from "react";
import UserDetails from "./UserDetails";
import Picture from "./Picture";
import "./Card.css";

function Card(props) {
  const user = props.user;
  return (
    <div className="contenedorCarta">
      <Picture user={user}/>
      <UserDetails user={user}/>
      
    </div>
  );
}

export default Card;

