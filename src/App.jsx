import Card from "./componentes/Card";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://66180f3b9a41b1b3dfbc28b2.mockapi.io/api/v1/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}

    </div>
  );
}

export default App;
