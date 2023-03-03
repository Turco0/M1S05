import filmes from './cadastros.js';

export function gerarPatioDeCards(classeCard="", idPatio="", listaCards=[]){
    document.getElementById(idPatio).innerHTML ="";
    listaCards.forEach((card)=> {
            document.getElementById(idPatio).innerHTML += `
            <div class="${classeCard}">
            <img src="${favorito(card.favorito)}" id="${card.titulo}" class="icones">
            <img src="" alt="${card.titulo}">
            <ul>
            <li><h2>${card.titulo}</h2></li>
            <li>${card.duracao}</li>
            <li>${card.nota}</li>
        </ul>
            </div>`;
        var elemento = document.getElementById(`${card.titulo}`);
        
        elemento.addEventListener("click", () => {           
            filmes.find(f => f.titulo == `${card.titulo}` ).favoritar();
            if( filmes.find(f => f.titulo == `${card.titulo}` ).favorito){
                alert("Favorito");
      }else{
        alert("Não favorito");
      };
      gerarPatioDeCards("filme","catalogo", filmes);})}
    )}
export function favorito (favorito)
{if(favorito){
    return `./img/favicon.ico`
    }else{
    return `./img/favicon (1).ico`
    }};
