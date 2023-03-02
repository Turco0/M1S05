let filmes = []

export function achouFilme(filme, listaCards=[]) {
    return !listaCards.every(f => f.titulo != filme.titulo)
}

export function pesquisaCards(pesquisa="", listaCards=[]){
    return listaCards.filter(card => card.titulo.toLowerCase().includes(pesquisa))
}
export default filmes;