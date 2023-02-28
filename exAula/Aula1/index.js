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
 console.log('Normal', this.nome)}, 100);}
 
  imprimirNomeArrow() {
   setTimeout(() => {
  console.log('Arrow', this.nome)}, 100);
   }
  }

  const pessoa = new Pessoa('João');

  pessoa.imprimirNome();
  pessoa.imprimirNomeArrow();


const par = {
  par: true,
  print: function(){
  console.log('Normal', this.par);
  },
  printArrow: () => {
  console.log('Arrow', this.par);
  }
}

par.print();
par.printArrow();
