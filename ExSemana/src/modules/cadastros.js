import filme from "./filmes.js"
import { gerarPatioDeCards } from "./dom.js"

let filmes = []

export function achouFilme(filme, listaCards=[]) {
    return !listaCards.every(f => f.titulo != filme.titulo)
}

export function pesquisaCards(pesquisa="", listaCards=[]){
    return listaCards.filter(card => card.titulo.toLowerCase().includes(pesquisa))
}

export function indexPorTitulo(titulo, listaCards=[]){
    return listaCards.findIndex(card => card.titulo == titulo)
}

export function trueFalse(titulo){
    var filme = filmes.find(f => f.titulo == titulo)
    filme.favoritar()    
    gerarPatioDeCards("filme","catalogo", filmes);
    console.log(filmes);
    
}

export default filmes;