import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

function Card(props) {
  const user = props.user;
  const dio=user['Social-Links'];
  return (
    <div className="contenedorCarta">
      <UserDetails user={user}/>
      <ButtonSection botones={dio}/>
    </div>
  );
}

export default Card;

