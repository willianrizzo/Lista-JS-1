let numero;
let media = 0

for (let i = 0; i < 5; i++) {
  numero = parseInt(prompt("Digite um número: "));
  media += numero;
}

alert(`A media dos numeros foi: ${media.toFixed(1)}`);