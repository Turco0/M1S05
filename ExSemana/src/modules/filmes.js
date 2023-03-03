/* import input from "inputs.js"; */

class filme {
  constructor(titulo, duracao, nota, favorito=false, assistido=false) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.nota = nota;
    this.favorito = favorito;
    this.assistido = assistido;
  }
  arrey() {
    return { titulo: this.titulo, duracao: this.duracao, nota: this.nota };
  }
  favoritar() {
  return this.favorito = !this.favorito;
  }
}

export default filme;
