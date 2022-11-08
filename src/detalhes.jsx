import React, {useState} from "react";

const Detalhes = ({props}) =>{
    console.log(this)
    return(
        <div>
            <div className="flex w-[40%]">
                <div>
                    <img src="" alt=""></img>
                </div>
                <div>
                    <h1>O poderoso chefão</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis? Nihil consectetur iste modi consequatur? Illo numquam corrupti consectetur aliquid optio sint ad, sequi modi libero obcaecati dignissimos cum voluptatibus.</p>
                </div>
            </div>
          
            <div>
                <form>
                    <label>Deixe um comentario sobre filme</label>
                    <textarea></textarea>
                </form>
            </div>
        </div>
    );
}
export default Detalhes;