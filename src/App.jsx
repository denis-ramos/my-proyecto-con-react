import Card from "./componentes/Card";
import { useEffect, useState } from "react";

function aletoriedad() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 857)); // Puedes ajustar el rango según tus necesidades
  }
  
  numeros.toString();
  return numeros;
}

//const hol1=["1","67"] el fetch se aplica a un vector y el fetech solo toamara loq ue se esta dentro del vector
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/"+aletoriedad())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users)
  return (
    <div>
      
      {users.map((personajes) => (
        <Card key={personajes.id} user={personajes} />
      ))}

    </div>
  );
}

export default App;
