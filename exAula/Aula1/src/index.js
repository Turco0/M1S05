const h1 = (value) => { 
var h1 = document.createElement('h1');
h1.innerText = value;
document.body.appendChild(h1);
}

const isAdult = (age) => {
  return age >= 18;
};

h1(isAdult(20));

const sum = (a, b) => {
 return a + b;
}

h1(sum(10, 20));

class Pessoa {
  constructor(nome){
    this.nome = nome;
  }
  
  imprimirNome() {setTimeout(function(){
 h1(this.nome)}, 100);}
 
  imprimirNomeArrow() {
   setTimeout(() => {
    h1 (this.nome);
   }, 100);
   }
  }

const pessoa = new Pessoa('João');

pessoa.imprimirNome();
pessoa.imprimirNomeArrow();

const par = {
  par: true,
  print() {h1(this.par)}
  ,
  printArrow: () => {
    h1(this.par);
  }
}

par.print();
par.printArrow();
