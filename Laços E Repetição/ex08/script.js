let numero;
let media = 0;

for (let i = 0; i < 5; i++) {
  numero = parseFloat(prompt("Digite um número: "));
  media += numero;
}

media /= 5;

alert(`A média dos números digitados é ${media.toFixed(1)}`);
