let populacaoA = parseInt(prompt("Digite a população da cidade A:"));
let populacaoB = parseInt(prompt("Digite a população da cidade B:"));

const taxaA = parseFloat(prompt("Digite a taxa de crescimento da cidade A:"));
const taxaB = parseFloat(prompt("Digite a taxa de crescimento da cidade B:"));

let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaA;
  populacaoB += populacaoB * taxaB;
  anos++;
}

alert(`A população A ultrapassará a população B em ${anos} anos.`);
