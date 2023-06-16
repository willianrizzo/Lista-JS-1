const numero = parseInt(prompt("Digite um número: "));
let numeroPrimo = true;

if (numero === 1 || numero === 2) {
  numeroPrimo = false;
}

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    numeroPrimo = false;
    break;
  }
}

if (numeroPrimo) {
  alert("O número " + numero + " é primo");
} else {
  alert("O número " + numero + " não é primo");
}
