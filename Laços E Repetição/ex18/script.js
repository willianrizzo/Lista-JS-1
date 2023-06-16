let n = parseInt(prompt("Digite a quantidade de números:"));

let menor = 9999;
let maior = -9999;
let soma = 0;

for (let i = 0; i < n; i++) {
  const numero = parseInt(prompt("Digite um número:"));
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