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

