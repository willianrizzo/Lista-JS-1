const numero = parseInt(prompt("Digite um número: "));
let primos = [];

for (let i = 1; i <= numero; i++) {
  let numeroPrimo = true;

  if (i === 1 || i === 2) {
    numeroPrimo = false;
  }

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      numeroPrimo = false;
      break;
    }
  }

  if (numeroPrimo) {
    primos.push(i);
  }
}

alert("Os números primos entre 1 e " + numero + " são: " + primos.join(", "));
