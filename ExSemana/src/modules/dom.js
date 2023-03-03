import filmes from "./cadastros.js";
import { trueFalse } from "./cadastros.js";

export function gerarPatioDeCards(classeCard="", idPatio="", listaCards=[]){
    document.getElementById(idPatio).innerHTML ="";
    listaCards.forEach((card)=> {
            document.getElementById(idPatio).innerHTML += `
            <div class="${classeCard}">
            <img src="${favorito(card.favorito)}" name="${card.titulo}" class="icones">
            <img src="" alt="${card.titulo}">
            <ul>
            <li><h2>${card.titulo}</h2></li>
            <li>${card.duracao}</li>
            <li>${card.nota}</li>
        </ul>
            </div>`;
    } )
    filmes.forEach((card)=> {
    var filmeElemento=document.getElementsByName(card.titulo)[0];
    filmeElemento.addEventListener("click",trueFalse(`${card.titulo}`))});
    }

export function favorito(favorito){
    if(favorito){
    return `./img/favicon.ico`
    }else{
    return `./img/favicon (1).ico`
    }
}


