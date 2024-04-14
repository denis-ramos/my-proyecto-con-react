import Card from "./componentes/Card";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://661037cf0640280f219c98cc.mockapi.io/api/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      {console.log(users)}
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}

    </div>
  );
}

export default App;
