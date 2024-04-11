import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import foto from './assets/avatar-jessica.jpeg';;
import "./App.css";

function App() {
  return (
    <>
      
      <div class="todo_junto">
        <div id="cart" class="concard">
          <div class="contener">
            <div class="imgen">
              <img src={foto} alt="imagen1"></img>
            </div>
            <div class="letras1">
              <h1>Jessica Randall</h1>
              <h2>London, United Kingdom</h2>
              <p>"Front-end developer and avid reader"</p>
            </div>
            <div class="botones">
              <button class="boton1">Github</button>
              <button class="boton1">Frontend Mentor</button>
              <button class="boton1">LinkedIn</button>
              <button class="boton1">Twitter</button>
              <button class="boton1">Instagram</button>
            </div>
          </div>
        </div>
      </div>
      <script src="index.js"></script>
    </>
  );
}

export default App;
