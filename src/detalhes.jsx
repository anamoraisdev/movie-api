import React, {useState} from "react";

const Detalhes = ({props}) =>{
    console.log(this)
    return(
        <div>
            <div className="flex flex-row">
                <div className="w-[65%] mx-4 my-6">
                    <h1 className="text-3xl">O poderoso chefão</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                    <ul className="py-5">
                        <li>Autor:</li>
                        <li>Diretor:</li>
                        <li>ELenco:</li>
                        <li>Produção:</li>
                        <li>Sonoplastia:</li>
                        <li>Direção de imagem:</li>
                        <li>Direção de efeitos especiais:</li>
                        <li>Indrumentaria:</li>
                        <li>Cenografia:</li>
                        <li>Direção artistica:</li>
                        <li>Direção de filmagem:</li>
                        <li>Edição:</li>
                    </ul>
                </div>
                <div className="w-[35%] bg-yellow-300 h-[560px]">
                    <img className=""src="" alt=""></img>
                </div>

            </div>

            <div className="bg-slate-50 w-[200px] h-[250px] flex flex-col">
                <img src="" alt="foto-do-ator"/>
                <h1 className="">nome do personagem</h1>
                <p>nome do ator</p>
            </div>

            <form className="flex flex-col">
                 <label>Compartilhe sua opinião sobre o filme!</label>
                <textarea className="Border-3 bg-slate-300 rounded-lg"></textarea>
            </form>
         
        </div>
    );
}
export default Detalhes;