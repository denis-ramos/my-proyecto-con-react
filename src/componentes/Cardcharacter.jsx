import React from 'react'
import "./Cardcharacter.css";
import Picturecharacter from "./Picturecharacter";
import CharacterS_T from './CharacterS_T';
import Characterepisodies from './Characterepisodies';
function Cardcharacter(props) {
const user = props.user;
  return (
    <div className="contenedorcharacter">
    <Picturecharacter user={user}/>
    <CharacterS_T user={user}/>
    <Characterepisodies user={user}/>
    <button className='HOME'>HOME</button>
    </div>

  );
}

export default Cardcharacter