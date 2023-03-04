export default class publicacao {
  constructor(nome="",link="",descricao="") {
    this.nome = nome;
    this.link = link;
    this.descricao = descricao;
  }

  div() {
    var elemento = `
    <div>
    <h2>${this.nome}</h2>
    <img src="${this.link}" alt="">
    <p>${this.descricao}</p>
    </div>
    `
    return elemento;
}

}
