import filmes, { achouFilme, pesquisaCards } from "./modules/cadastros.js";
import filme from "./modules/filmes.js";
import { clearInput, getInput } from "./modules/inputs.js";
import { gerarPatioDeCards } from "./modules/dom.js";

var botao = document.querySelector("#botao");

botao.addEventListener("click", lerFilme);

function lerFilme() {
  var titulo = getInput("tituloInput");
  var duracao = getInput("duracaoInput");
  var nota = getInput("notaInput");
  var variavelFilmeCadastro = new filme(titulo, duracao, nota);
  if (achouFilme(variavelFilmeCadastro) == true) {
    alert("Já possui um filme com esse mesmo título");
  } else {
    filmes.push(variavelFilmeCadastro);
    console.log(filmes);
    alert("Filme adicionado com sucesso");
  }
  clearInput("tituloInput")
  clearInput("duracaoInput")
  clearInput("notaInput")
}

const filme1 = new filme("O Senhor dos Anéis", "120", "10");
const filme2 = new filme("the godfather", "120", "8");
filmes.push(filme1);
filmes.push(filme2);
console.log(filmes);

gerarPatioDeCards("filme","catalogo", filmes);

var barraPesquisa = document.querySelector("#pesquisa");
barraPesquisa.addEventListener("input", gerarPatioDeCardsPesquisa);

function gerarPatioDeCardsPesquisa() {
    gerarPatioDeCards("filme","catalogo", pesquisaCards(getInput("pesquisa"), filmes));
    if(pesquisaCards(getInput("pesquisa"), filmes).length == 0) {
    alert("Nenhum filme encontrado");
    barraPesquisa.value = "";
    gerarPatioDeCards("filme","catalogo", filmes);
}}


function favNoFav() {
    
};