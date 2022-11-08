import React, { useState} from "react";
import axios from "axios";

const Navbar = () => {
    return(
     <div className="bg-black flex">
        <img className="h-[30px] w-auto my-6 mx-4" src="./movie.png" alt="logo"/>
        <div className="ml-[30%] my-3">
          <input placeholder="Titulo" className="rounded-md w-[500px] h-7" />
          <button className= " rounded-md bg-yellow-300 h-7 w-20 my-3 mx-1 text-black">Buscar</button>
          <button className="rounded-md bg-yellow-300 h-7 w-20 my-3 mx-1 text-black"> Login</button>
        </div>
     </div>
    );
}

export default Navbar;