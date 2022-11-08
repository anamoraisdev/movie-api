import React, { useState} from "react";
import axios from "axios";

const Navbar = () => {
    const chaveDaApi = "1543b608e0b28fa4e7a8d268f23f019f"
    const [titulo, setTitulo] = useState('')
    const [resultado, setResultado] = useState()
  
    const procurarFilme = async (titulo) => {
      const resposta = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${chaveDaApi}&language=en-US&query=${titulo}&page=1&include_adult=false`)
      setResultado(resposta.data.results)
    }
    return(
     <div className="bg-black flex ">
        <img className="h-[60px] w-auto px-4 py-3" src="./logo.png" alt="logo"/>
        <input placeholder="Titulo" className="rounded-md w-[500px] h-7 my-3 " onChange={(event) => {
        setTitulo(event.target.value);
        console.log(titulo)
        }} />
        <div className="items-end">
          <button className= " roundend-md bg-yellow-300 h-7 w-20 my-3 mx-1 text-black" onClick={() => procurarFilme(titulo)}>Buscar</button>
          <button className="roundend-md bg-yellow-300 h-7 w-20 my-3 mx-1 text-black"> Login</button>
        </div>
        {resultado && resultado.map((filme) => (
          <div className="text-center w-[200px]" key={filme.title}>
            <img className="w-full h-auto object-cover" src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
            <h1 className="text-xl shadow-xl">{filme.title}</h1>
          </div>
        ))}
     </div>
    );
}

export default Navbar;