import filme from "./modules/filmes";
import input from "./modules/inputs";

var variavelFilmeCadastro = new filme
(titulo=input('tituloInput'), duracao=input('duracaoInput'), nota=input('notaInput')) ;
   
function lerFilme(){;
}

var botao = document.getElementById('botao');
botao.addEventListener('onclick',lerFilme());
