import React, {useEffect, useState} from "react";
import axios from "axios";
import '../styles/globals.css';
import { Link } from "react-router-dom";

const Menu = () => {
    const chaveDaApi = "1543b608e0b28fa4e7a8d268f23f019f"
    const [generos,setGeneros] = useState([])
    const [filmes, setFilmes] = useState([])

    const pegarGenero = async() => {
        const resposta = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${chaveDaApi}&language=pt-BR`)
        setGeneros(resposta.data.genres)
    }

    const pegarFilmes = async(id) => {
        const resposta = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${chaveDaApi}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
        setFilmes(resposta.data.results)
    }

    useEffect(() => {
        pegarGenero()
    }, [])

    return(
        <div className="w-[11%] h-full">
            <div className="bg-black text-yellow-100 text-md flex flex-col justify-start py-7">
                <h1 className="text-start text-2xl mx-3 my-1">Generos</h1>
                {generos && generos.map((genero)=> (
                <button key={genero.id} className="text-start mx-3 my-1 " onClick={() => pegarFilmes(genero.id)}>{genero.name}</button>
                ))}
            </div>
            <div className="flex flex-wrap w-full justify-center gap-10">
                {filmes && filmes.map((filme) => (
                    <Link to="/detalhes" key={filme.title}>
                    <div className="w-[200px] h-[400px] text-center ">
                    <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} className="w-full h-auto object-cover"/>
                    <h1 className="text-xl">{filme.title}</h1>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Menu;