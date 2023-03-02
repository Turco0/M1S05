/* import input from "inputs.js"; */

class filme {
  constructor(titulo, duracao, nota) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.nota = nota;
    this.favorito = false;
    this.assistido = false;
  }
  arrey() {
    return { titulo: this.titulo, duracao: this.duracao, nota: this.nota };
  }
}

export default filme;
