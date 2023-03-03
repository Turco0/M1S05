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

export function trueFalse()
{   
    filmes.find(f => f.titulo == titulo).favoritar();
    return gerarPatioDeCards("filme","catalogo", filmes);
}

export default filmes;