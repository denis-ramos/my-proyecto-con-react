import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

function Card(props) {
  const user = props.user;

  return (
    <div className="contenedorCarta">
      <UserDetails user={user}/>
      <ButtonSection />
    </div>
  );
}

export default Card;
