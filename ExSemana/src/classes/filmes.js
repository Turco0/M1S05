import { gerarPatioDeCards } from "../modules/dom.js";
import filmes, { indexPorTitulo } from "../modules/cadastros.js";

class filme {
  constructor(titulo="", duracao="", nota="", favorito=false, assistido=false) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.nota = nota;
    this.favorito = favorito;
    this.assistido = assistido;
  }
  arrey() {
    return { titulo: this.titulo, duracao: this.duracao, nota: this.nota };
  }
  favoritar(listaCards=[]) {
   this.favorito = !this.favorito;
   gerarPatioDeCards("filme","catalogo", listaCards);
  }
  index(lista){
    return indexPorTitulo(this.titulo, lista);
  }
  card(classeCard="",listaCards=[]){
    var elemento = `
    <div class="${classeCard}">
    <img src="${this.imagemFavorito()}" id="${this.index(listaCards)}" class="icones">
    <img src="" alt="${this.titulo}">
    <ul>
    <li><h2>${this.titulo}</h2></li>
    <li>${this.duracao}</li>
    <li>${this.nota}</li>
</ul>
    </div>`;
    return elemento;
  }
  imagemFavorito(){
      if (this.favorito) {
        return `./img/favicon.ico`;
      } else {
        return `./img/favicon (1).ico`;
      }
  }
  cardNoPatio(classeCard = "",
  idPatio = "",listaCards=[]){
    document.getElementById(idPatio).innerHTML += this.card(classeCard,listaCards);
    }
}



export default filme;
