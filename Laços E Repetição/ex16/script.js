let a = 0;
let b = 1;

let serie = [];

while (a < 500) {
  const c = a + b;
  a = b;
  b = c;
  serie.push(a);
}

alert(`A série de Fibonacci com 500 termos é: ${serie}`);
