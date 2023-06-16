const n = parseInt(prompt("Digite a quantidade de notas:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i}:`));
  soma += nota;
}

const media = soma / n;

alert(`A média das notas é: ${media.toFixed(2)}`);
