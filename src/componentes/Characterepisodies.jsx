import React from "react";
import { useEffect, useState } from "react";
import Episode from "./Episode";
import "./Characterepisodies.css";
function Characterepisodies(props) {
  const episodiostools = props.user;
  const episodio = episodiostools["episode"];
  const [episodios,setEpisodios]= useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const data = await Promise.all(
        episodio.slice(0,5).map(url =>
          fetch(url).then(response => response.json())
        )
      );
      setEpisodios(data);
    };

    fetchEpisodes();
  }, []);

  return (
    <div className="contenedorepisodies">
      {episodios.map((episodio, index) => (
        <Episode key={index} user={episodio} />
      ))}
    </div>
  );
}


export default Characterepisodies;
