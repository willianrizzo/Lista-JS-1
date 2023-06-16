let populacaoA = 80000;
let populacaoB = 200000;
const taxaA = 0.03;
const taxaB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaA;
  populacaoB += populacaoB * taxaB;
  anos++;
}
alert(`A população A ultrapassará a população B em ${anos} anos.`);
