let numero;
let maior = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < 5; i++) {
  numero = parseInt(prompt("Digite um número: "));
  if (numero > maior) {
    maior = numero;
  }
}

alert("O maior número digitado foi: " + maior);