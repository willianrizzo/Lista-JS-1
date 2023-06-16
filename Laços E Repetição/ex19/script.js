let n = parseInt(prompt("Digite a quantidade de números:"));

let menor = 9999;
let maior = -9999;
let soma = 0;

for (let i = 0; i < n; i++) {
  let numero = parseInt(prompt("Digite um número:"));

  while (numero < 0 || numero > 1000 || isNaN(numero)) {
    alert("Número inválido. Digite novamente.");
    numero = parseFloat(prompt("Digite um número entre 0 e 1000:"));
  }

  if (numero < menor) {
    menor = numero;
  }

  if (numero > maior) {
    maior = numero;
  }

  soma += numero;
}

alert(`O menor número é ${menor}`);
alert(`O maior número é ${maior}`);
alert(`A soma dos números é ${soma}`);
