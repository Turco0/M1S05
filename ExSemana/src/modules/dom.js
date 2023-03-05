import filme from "../classes/filmes.js";

export function gerarPatioDeCards(
  classeCard = "",
  idPatio = "",
  listaCards = []
) {
  document.getElementById(idPatio).innerHTML = "";
  listaCards.forEach((f = filme) => {
    f.cardNoPatio(classeCard, idPatio,listaCards);
  });
  listaCards.forEach((f = filme) => {
    document.getElementById(String(f.index(listaCards))).addEventListener("click", function () {
        listaCards[Number(this.id)].favoritar(listaCards)
        })
      
    });
  }

