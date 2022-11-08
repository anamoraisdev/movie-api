import React, { useState, useEffect } from "react";

const Banner = () => {
    const [slideAtivo, setSlideAtivo] = useState(1);
    const ativarSlide = (id) => {
        esconderImagemAtual();
        if (id === 1) {
            const imagem = document.getElementById("img-1");
            imagem.classList.remove("hidden");
        } else if (id === 2) {
            const imagem = document.getElementById("img-2");
            imagem.classList.remove("hidden");
        } else {
            const imagem = document.getElementById("img-3");
            imagem.classList.remove("hidden");  
        }
        
    }

    const esconderImagemAtual = () => {
        const imagem1 = document.getElementById("img-1");
        const imagem2 = document.getElementById("img-2");
        const imagem3 = document.getElementById("img-3");
        if (!imagem1.classList.contains("hidden")) {
            imagem1.classList.add("hidden");
        } else if (!imagem2.classList.contains("hidden")){
            imagem2.classList.add("hidden");
        } else {
            imagem3.classList.add("hidden");
        }
    }
    const marcarInput = (event) => {
        const input1 = document.getElementById("radio-1")
        const input2 = document.getElementById("radio-2")
        const input3 = document.getElementById("radio-3")

        if (parseInt(event.name) === 1){
            input1.checked = true
            input2.checked = false
            input3.checked = false
        } else if (parseInt(event.name) === 2) {
            input1.checked = false
            input2.checked = true
            input3.checked = false
        } else {
            input1.checked = false
            input2.checked = false
            input3.checked = true
        }

    }

    return (
        <div className="mx-0 my-auto w-full h-[50%] overflow-hidden">
            <div className="">
                <img id="img-1" name="1" className="w-full h-auto" src="./img1.png" alt="image-banner-1"/>
                <img id="img-2" name="2" className="w-full h-auto hidden" src="./img2.png" alt="image-banner-2"/>
                <img id="img-3" name="3" className="w-full h-auto hidden" src="./img3.png" alt="image-banner-3"/>
                
                <div className="absolute w-screen h-[50%] mb-[4%] flex justify-center bottom-0">
                    <input className="" type="radio" name="1" id="radio-1" onClick={(event) => {
                        ativarSlide(parseInt(event.target.name));
                        marcarInput (event.target)
                        }} checked={true}></input>
                    <input className="" type="radio" name="2"id="radio-2" onClick={(event) => {
                        ativarSlide(parseInt(event.target.name))
                        marcarInput(event.target)
                    }} ></input>
                    <input className="" type="radio" name="3" id="radio-3" onClick={(event) => {
                        ativarSlide(parseInt(event.target.name))
                        marcarInput(event.target)
                    }} ></input>
                </div>
            </div>
        </div>
    );
}
export default Banner;