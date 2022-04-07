import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/Home.css"
import Cards from "./Cards";
import Pokeinfo from "./Pokeinfo";

const Home = () => {

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [anteriorUrl, setAnteriorUrl] = useState();
  const [siguienteUrl, setSiguienteUrl] = useState();
  const [pokeDex, setPokeDex]=useState()

  const pokeFun = async () => {
    setLoading(true);
    const result = await axios.get(url);
    setAnteriorUrl(result.data.previous);
    setSiguienteUrl(result.data.next);
    getPokemon(result.data.results);
    setLoading(false);
  };

  const getPokemon = async (result) => {
    result.map(async (item) => {
      const res = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, res.data];
        state.sort((a,b) =>a.id>b.id?1:-1);
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
     //eslint-disable-next-line
  },[url])

  return (
    <div>
      

      <div className="container">
        <div className="left-content">
          <Cards pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)} />
          <div className="btn-group">

            { anteriorUrl && <Button className="m-2 btn btn" onClick={()=>{
              setPokeData([])
              setUrl(anteriorUrl)
            }}>Anterior</Button>

            }

            { siguienteUrl && <Button className="m-2 btn btn" onClick={()=>{
              setPokeData([])
              setUrl(siguienteUrl)
            }}>Siguiente</Button>
            }
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </div>
  );
};

export default Home;
