import publicacao from "./classes/publicacao.js";
import { inputPublicacao } from "./modules/input.js";

let mural = []

const carro = new publicacao()
mural.push(carro)


document.getElementById("enviarForm").addEventListener("click", publicar)

export function publicar(){
    let publicacaoNova = new publicacao(document.getElementById('nome').value,
    document.getElementById('link').value,
    document.getElementById('descricao').value);
    mural.push(publicacaoNova);
    gerarMural()    
}

export function gerarMural(){
    document.getElementById("mural").innerHTML = "";
    mural.forEach((publi)=>{
        document.getElementById("mural").innerHTML += publi.div()
    })

}