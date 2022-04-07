import React, { useRef, useState } from "react";

const Buscador = ({setBuscar}) => {
   
    const handleSubmit = (e) =>{
        e.preventDefaul()
        setBuscar(pokemon=>[search, ...pokemon])
        setBuscar("")
    }
    const searchref = useRef()
    const [search, setSearch] = useState("")

    const handleInputChange = (e) =>{
        setSearch(e.target.value)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        ref={searchref}
        name="search"
         placeholder="Buscar Pokemon..." 
         value={search}
         onChange={handleInputChange}
         />
      </form>
    </div>
  );
};

export default Buscador;
